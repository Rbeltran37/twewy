var mainCardOptions = ["images/circleCard.png", "images/crossCard.png", "images/starCard.png", "images/waveCard.png"];
var cardOptions = ["circle", "cross", "star", "wave"]
var clickedOnCards = [0, 0, 0, 0, 0, 0, 0]
var mainCardIndex;
var playCardsActive;
var shuffledPlayCards;
var tempMainCard;
var tempCard;
var matchCardsFound = 0;
var currentRound = 1;
var pickedCard;
var flawlessRound = true;
var scoreInt = 1;
var scoreDecimal = 0;
var timer = 32;
var timer2 = 32;
var joshuaDeck = ["1", "2", "3"]
var joshuaCurrentCard = 1;
var joshuaCardsInPlay = 3;
var joshuaCurrentRound = 1;
var joshuaCardsFound = 0;
var timer3 = 32;
var beatCardOptions = ["club", "diamond", "heart", "spade"];
var beatDeck =  ["club", "club", "club", "diamond", "diamond", "diamond", "heart", "heart", "heart", "spade", "spade", "spade", "club", "club", "club", "club"];
var beatCardPositions = [-12.5, -5, 2.5, 10, 17.5, 25, 32.5, 40, 47.5, 55, 62.5, 70, 77.5, 85, 92.5, 100];
var lastBeatCard = "heart";
var lastBeatCard2 = "heart";
var moveLeftVW = 7.5;

function selectShiki() {
    document.getElementById("selectIcon1").style.display = "block";
    document.getElementById("selectIcon2").style.display = "block";
    document.getElementById("shikiMainMenu").style.animation = "shikiMainMenuAnimation .4s linear alternate-reverse infinite";
}

function deselectShiki() {
    document.getElementById("selectIcon1").style.display = "none";
    document.getElementById("selectIcon2").style.display = "none";
    document.getElementById("shikiMainMenu").style.animation = null;
}

function selectJoshua() {
    document.getElementById("selectIcon3").style.display = "block";
    document.getElementById("selectIcon4").style.display = "block";
    document.getElementById("joshuaMainMenu").style.animation = "joshuaMainMenuAnimation .4s linear alternate-reverse infinite";
}

function deselectJoshua() {
    document.getElementById("selectIcon3").style.display = "none";
    document.getElementById("selectIcon4").style.display = "none";
    document.getElementById("joshuaMainMenu").style.animation = null;
}

function selectBeat() {
    document.getElementById("selectIcon5").style.display = "block";
    document.getElementById("selectIcon6").style.display = "block";
    document.getElementById("beatMainMenu").style.animation = "beatMainMenuAnimation .4s linear alternate-reverse infinite";
}

function deselectBeat() {
    document.getElementById("selectIcon5").style.display = "none";
    document.getElementById("selectIcon6").style.display = "none";
    document.getElementById("beatMainMenu").style.animation = null;
}

function setUpMiniGame1() {
    document.getElementById("timer").style.animation = "timer " + timer + "s linear forwards";
    document.getElementById("startMenuContainer").style.display = "none";
    document.getElementById("miniGame1").style.display = "block";
    document.getElementById("miniGame1WhiteFlash").style.animation = "miniGame1WhiteFlashAnimation 10s linear " + (timer - 10) +  "s forwards";
    document.getElementById("neku1").style.animation = "MoveNeku1 2s ease forwards";
    document.getElementById("neku1Shadow").style.animation = "MoveNeku1Shadow 2s ease forwards";
    document.getElementById("shiki1").style.animation = "MoveShiki1 2s ease forwards";
    document.getElementById("shiki1Shadow").style.animation = "MoveShiki1Shadow 2s ease forwards";
    MiniGame1Ending();
    setTimeout(() => {
        document.getElementById("timer").style.visibility = "visible";
        document.getElementById("neku1").style.animation = "MoveNeku2 " + timer + "s linear forwards";
        document.getElementById("neku1Shadow").style.animation = "MoveNeku2Shadow " + timer + "s linear forwards";
        document.getElementById("shiki1").style.animation = "MoveShiki2 " + timer + "s linear forwards";
        document.getElementById("shiki1Shadow").style.animation = "MoveShiki2Shadow " + timer + "s linear forwards";
        document.getElementById("shikiMainCardContainer").style.animation = "MoveMainCard 0.2s linear forwards";
        document.getElementById("shikiMainCardBorder").style.animation = "MoveBorder1 .2s infinite alternate-reverse, RevealMainCardBorder .8s linear forwards";
        document.getElementById("shikiMainCardBorder2").style.animation = "MoveBorder2 .2s infinite alternate-reverse, RevealMainCardBorder .8s linear forwards";
        document.getElementById("shikiMainCardBorder3").style.animation = "MoveBorder3 .2s infinite alternate-reverse, RevealMainCardBorder .8s linear forwards";
        document.getElementById("shikiCard1").style.animation = "MoveshikiCard1Round1 0.2s linear forwards";
        document.getElementById("shikiCard2").style.animation = "MoveshikiCard2Round1 0.2s linear forwards";
        document.getElementById("shikiCard3").style.animation = "MoveshikiCard3Round1 0.2s linear forwards";
        document.getElementById("shikiCard4").style.animation = "MoveshikiCard4Round1 0.2s linear forwards";
        document.getElementById("score").style.animation = "FadeIn .8s linear forwards";
        startRound();
      }, "2000")
}

function pickMainCard() {
    mainCardIndex = Math.floor(Math.random() * 4);
    document.getElementById("shikiMainCardFrontImg").src = mainCardOptions[mainCardIndex];
}

function revealMainCard() {
    document.getElementById("shikiMainCardBack").style.transform = "rotateY(180deg)";
    document.getElementById("shikiMainCardFront").style.transform = "rotateY(0deg)";
}

function startRound() {
    setTimeout(() => {
        pickMainCard();
        setupPlayCards();
        revealMainCard();
        revealPlayCards();
      }, "400")
}

function revealPlayCards() {
    var i = 1;
    for (const cards of playCardsActive) {
        document.getElementById("shikiCardFrontPreviewImg"+ [i]).src = "images/" + cards +"CardPreview.png";
        i++
    }
    document.getElementById("shikiCardFrontPreviewImg1").style.visibility = "visible";
    document.getElementById("shikiCardFrontPreviewImg2").style.visibility = "visible";
    document.getElementById("shikiCardFrontPreviewImg3").style.visibility = "visible";
    document.getElementById("shikiCardFrontPreviewImg4").style.visibility = "visible";
    document.getElementById("shikiCardFrontPreviewImg5").style.visibility = "visible";
    document.getElementById("shikiCardFrontPreviewImg6").style.visibility = "visible";
    clickedOnCards = [1, 1, 1, 1, 1, 1, 1];
    setTimeout(() => {
        document.getElementById("shikiCardFrontPreviewImg1").style.visibility = "hidden";
        document.getElementById("shikiCardFrontPreviewImg2").style.visibility = "hidden";
        document.getElementById("shikiCardFrontPreviewImg3").style.visibility = "hidden";
        document.getElementById("shikiCardFrontPreviewImg4").style.visibility = "hidden";
        document.getElementById("shikiCardFrontPreviewImg5").style.visibility = "hidden";
        document.getElementById("shikiCardFrontPreviewImg6").style.visibility = "hidden";
        clickedOnCards = [0, 0, 0, 0, 0, 0, 0];
      }, "400")
}

function setupPlayCards() {
    var playCardsAvailable = ["circle", "cross", "star", "wave"];
    tempMainCard = playCardsAvailable[mainCardIndex];
    playCardsAvailable.splice(mainCardIndex,1);
    playCardsActive = [tempMainCard, tempMainCard];
    pickedCard = Math.floor(Math.random() * 3);
    tempCard = playCardsAvailable[pickedCard];
    playCardsAvailable.splice(pickedCard,1);
    playCardsActive.push(tempCard, tempCard);
    if (currentRound == 2)
    {
        tempCard = playCardsAvailable[Math.floor(Math.random() * 2)];
        playCardsActive.push(tempCard);
    }
    if (currentRound > 2)
    {
        tempCard = playCardsAvailable[Math.floor(Math.random() * 2)];
        playCardsActive.push(tempCard, tempCard);
    }
    shuffledPlayCards = playCardsActive.sort((a, b) => 0.5 - Math.random());

    i = 1;
    for (const cards of shuffledPlayCards) {
        document.getElementById("shikiCardFrontImg"+ [i]).src = "images/" + cards +"Card.png";
        i++
    }
}

function selectCard(selectedCard) {
    if(clickedOnCards[selectedCard] == 1) {
        return;
    }
    clickedOnCards[selectedCard] = 1;
    document.getElementById("shikiCardFront" + selectedCard).style.transform = "rotateY(0deg)";
    document.getElementById("shikiCardBack" + selectedCard).style.transform = "rotateY(180deg)";
    if (document.getElementById("shikiCardFrontImg" + selectedCard).src == document.getElementById("shikiMainCardFrontImg").src) {
        updateScore();
        matchCardsFound++;
        correctCardAnimation(selectedCard);
        roundWon();
    }
    else {
        flawlessRound = false;
        wrongCardAnimation(selectedCard);
    }
}

function correctCardAnimation(selectedCard) {
    document.getElementById("correctCardEffect1-" + selectedCard).style.visibility = "visible";
    setTimeout(() => {
        document.getElementById("correctCardEffect1-" + selectedCard).style.visibility = "hidden";
        document.getElementById("correctCardEffect2-" + selectedCard).style.visibility = "visible";
    }, "90")
    setTimeout(() => {
        document.getElementById("correctCardEffect2-" + selectedCard).style.visibility = "hidden";
        document.getElementById("correctCardEffect3-" + selectedCard).style.visibility = "visible";
    }, "180")
    setTimeout(() => {
        document.getElementById("correctCardEffect3-" + selectedCard).style.visibility = "hidden";
        document.getElementById("correctCardEffect4-" + selectedCard).style.visibility = "visible";
    }, "270")
    setTimeout(() => {
        document.getElementById("correctCardEffect4-" + selectedCard).style.visibility = "hidden";
    }, "360")
}

function wrongCardAnimation(selectedCard) {
    document.getElementById("miniGame1BackgroundContainer").classList.remove("addScreenShakeAnimation");
    void document.getElementById("miniGame1BackgroundContainer").offsetWidth;
    document.getElementById("miniGame1BackgroundContainer").classList.add("addScreenShakeAnimation");
    document.getElementById("wrongCardEffect1-" + selectedCard).classList.remove("addWrongCardAnimation1");
    void document.getElementById("wrongCardEffect1-" + selectedCard).offsetWidth;
    document.getElementById("wrongCardEffect1-" + selectedCard).classList.add("addWrongCardAnimation1");
    document.getElementById("wrongCardEffect2-" + selectedCard).classList.remove("addWrongCardAnimation2");
    void document.getElementById("wrongCardEffect2-" + selectedCard).offsetWidth;
    document.getElementById("wrongCardEffect2-" + selectedCard).classList.add("addWrongCardAnimation2");
}

function roundWon() {
    if (matchCardsFound == 2) {
        clickedOnCards = [1, 1, 1, 1, 1, 1, 1];
        setTimeout(() => {
            if (flawlessRound) {
                for (var i = 1; i < 7; i++) {
                    if (shuffledPlayCards[(i-1)] == tempMainCard) {
                        document.getElementById("shikiCardFront" + i).style.transform = "rotateY(180deg)";
                        document.getElementById("shikiCardFront" + i).style.transform = "rotateY(360deg)";
                    }
                    else {
                        document.getElementById("shikiCardFront" + i).style.transform = "rotateY(0deg)";
                        document.getElementById("shikiCardBack" + i).style.transform = "rotateY(180deg)";
                    }
                    correctCardAnimation(i);
                }
            }
            else {
                for (var i = 1; i < 7; i++) {
                    document.getElementById("shikiCardFront" + i).style.transform = "rotateY(0deg)";
                    document.getElementById("shikiCardBack" + i).style.transform = "rotateY(180deg)";
                }
            }
        }, "100")
        setTimeout(() => {
            updateScore();
            document.getElementById("shikiMainCardBack").style.transform = "rotateY(0deg)";
            document.getElementById("shikiMainCardFront").style.transform = "rotateY(180deg)";
            if (currentRound == 1)
            {
                document.getElementById("shikiCard1").style.animation = "retrieveShikiCard1 0.2s linear forwards";
                document.getElementById("shikiCard2").style.animation = "retrieveShikiCard2 0.2s linear forwards";
                document.getElementById("shikiCard3").style.animation = "retrieveShikiCard3 0.2s linear forwards";
                document.getElementById("shikiCard4").style.animation = "retrieveShikiCard4 0.2s linear forwards";
            }
            if (currentRound == 2)
            {
                document.getElementById("shikiCard1").style.animation = "retrieveShikiCard1Round2 0.2s linear forwards";
                document.getElementById("shikiCard2").style.animation = "retrieveShikiCard2Round2 0.2s linear forwards";
                document.getElementById("shikiCard3").style.animation = "retrieveShikiCard3Round2 0.2s linear forwards";
                document.getElementById("shikiCard4").style.animation = "retrieveShikiCard4Round2 0.2s linear forwards";
                document.getElementById("shikiCard5").style.animation = "retrieveShikiCard5Round2 0.2s linear forwards";
            }
            if (currentRound > 2)
            {
                document.getElementById("shikiCard1").style.animation = "retrieveShikiCard1Round3 0.2s linear forwards";
                document.getElementById("shikiCard2").style.animation = "retrieveShikiCard2Round3 0.2s linear forwards";
                document.getElementById("shikiCard3").style.animation = "retrieveShikiCard3Round3 0.2s linear forwards";
                document.getElementById("shikiCard4").style.animation = "retrieveShikiCard4Round3 0.2s linear forwards";
                document.getElementById("shikiCard5").style.animation = "retrieveShikiCard5Round3 0.2s linear forwards";
                document.getElementById("shikiCard6").style.animation = "retrieveShikiCard6Round3 0.2s linear forwards";
            }
        }, "600")
        setTimeout(() => {
            currentRound++;
            nextRoundSetup();
        }, "800")
    }
}

function nextRoundSetup() {
    clickedOnCards = [0, 0, 0, 0, 0, 0, 0];
    flawlessRound = true;
    matchCardsFound = 0;
    for (var i = 1; i < 7; i++) {
        document.getElementById("shikiCardFront" + i).style.transform = "rotateY(-180deg)";
        document.getElementById("shikiCardBack" + i).style.transform = "rotateY(0deg)";
    }
    if(currentRound == 2)
    {
        document.getElementById("shikiCard1").style.animation = "MoveshikiCard1Round2 0.2s linear forwards";
        document.getElementById("shikiCard2").style.animation = "MoveshikiCard2Round2 0.2s linear forwards";
        document.getElementById("shikiCard3").style.animation = "MoveshikiCard3Round2 0.2s linear forwards";
        document.getElementById("shikiCard4").style.animation = "MoveshikiCard4Round2 0.2s linear forwards";
        document.getElementById("shikiCard5").style.animation = "MoveshikiCard5Round2 0.2s linear forwards";
    }
    if(currentRound > 2)
    {
        document.getElementById("shikiCard1").style.animation = "MoveshikiCard1Round3 0.2s linear forwards";
        document.getElementById("shikiCard2").style.animation = "MoveshikiCard2Round3 0.2s linear forwards";
        document.getElementById("shikiCard3").style.animation = "MoveshikiCard3Round3 0.2s linear forwards";
        document.getElementById("shikiCard4").style.animation = "MoveshikiCard4Round3 0.2s linear forwards";
        document.getElementById("shikiCard5").style.animation = "MoveshikiCard5Round3 0.2s linear forwards";
        document.getElementById("shikiCard6").style.animation = "MoveshikiCard6Round3 0.2s linear forwards";
    }
    startRound();
}

function updateScore() {
    scoreDecimal++;
    document.getElementById("scoreOutline").classList.remove("RotateEnlargeScoreAnimation");
    document.getElementById("scoreOutline").classList.remove("enlargeScoreAnimation");
    void document.getElementById("scoreOutline").offsetWidth;
    if (scoreDecimal >= 10) {
        scoreInt++;
        scoreDecimal = 0;
        document.getElementById("scoreInt").style.backgroundImage = "url(images/integer" + scoreInt + ".png)";
        document.getElementById("scoreIntOutline").style.backgroundImage = "url(images/integer" + scoreInt + "Outline.png)";
        switch(scoreInt) {
            case 2:
                document.getElementById("mainDecimal").style.transform = "translate(10%, 5%)";
                document.getElementById("scoreDecimalOutline").style.transform = "translate(10%, 5%)";
                break;
            case 3:
                document.getElementById("mainDecimal").style.transform = "translate(10%, 18%)";
                document.getElementById("scoreDecimalOutline").style.transform = "translate(10%, 18%)";
                break;
            case 4:
                document.getElementById("mainDecimal").style.transform = "translate(20%, 35%)";
                document.getElementById("scoreDecimalOutline").style.transform = "translate(20%, 35%)";
                break;
        }
    }
    document.getElementById("mainDecimal").style.backgroundImage = "url(images/decimal" + scoreDecimal + ".png)";
    document.getElementById("scoreDecimalOutline").style.backgroundImage = "url(images/decimal" + scoreDecimal + "Outline.png)";

    if (matchCardsFound == 2) {
        document.getElementById("scoreOutline").classList.add("RotateEnlargeScoreAnimation");
    }
    else {
        document.getElementById("scoreOutline").classList.add("enlargeScoreAnimation");
    }
}

function MiniGame1Ending() {
    setTimeout(() => {
        document.getElementById("finalScoreInt").style.backgroundImage = document.getElementById("scoreInt").style.backgroundImage;
        document.getElementById("finalMainDecimal").style.backgroundImage = document.getElementById("mainDecimal").style.backgroundImage;
        document.getElementById("finalMainDecimal").style.transform = document.getElementById("mainDecimal").style.transform;
        document.getElementById("miniGame1").style.display = "none";
        document.getElementById("miniGame1EndingBackgroundContainer").style.display = "block";
      }, timer + "000")
    setTimeout(() => {
        ResetMiniGame1();
        document.getElementById("startMenuContainer").style.display = "block";
        document.getElementById("miniGame1EndingBackgroundContainer").style.display = "none";
      }, (timer + 9) + "000")
}

function ResetMiniGame1() {
    scoreDecimal = 0;
    scoreInt = 1;
    document.getElementById("scoreInt").style.backgroundImage = "url(images/integer1.png)";
    document.getElementById("mainDecimal").style.backgroundImage = "url(images/decimal0.png)";
    document.getElementById("scoreIntOutline").style.backgroundImage = "url(images/integer1Outline.png)";
    document.getElementById("scoreDecimalOutline").style.backgroundImage = "url(images/decimal0Outline.png)";
    document.getElementById("timer").style.visibility = "hidden";
    document.getElementById("shikiMainCardContainer").style.animation = null;
    document.getElementById("shikiCard1").style.animation = null;
    document.getElementById("shikiCard2").style.animation = null;
    document.getElementById("shikiCard3").style.animation = null;
    document.getElementById("shikiCard4").style.animation = null;
    document.getElementById("shikiCard5").style.animation = null;
    document.getElementById("shikiCard6").style.animation = null;
    document.getElementById("shikiMainCardBorder").style.animation = null;
    document.getElementById("shikiMainCardBorder2").style.animation = null;
    document.getElementById("shikiMainCardBorder3").style.animation = null;
    document.getElementById("score").style.animation = null;
    document.getElementById("scoreOutline").classList.remove("enlargeScoreAnimation");
    void document.getElementById("scoreOutline").offsetWidth;
    document.getElementById("scoreOutline").classList.remove("RotateEnlargeScoreAnimation");
    void document.getElementById("scoreOutline").offsetWidth;
    document.getElementById("miniGame1BackgroundContainer").classList.remove("addScreenShakeAnimation");
    void document.getElementById("miniGame1BackgroundContainer").offsetWidth;
    clickedOnCards = [0, 0, 0, 0, 0, 0, 0];
    flawlessRound = true;
    matchCardsFound = 0;
    currentRound = 1;
    document.getElementById("mainDecimal").style.transform = null;
    document.getElementById("scoreDecimalOutline").style.transform = null;
    document.getElementById("shikiMainCardBack").style.transform = "rotateY(0deg)";
    document.getElementById("shikiMainCardFront").style.transform = "rotateY(180deg)";
    for (var i = 1; i < 7; i++) {
        document.getElementById("shikiCardFront" + i).style.transform = "rotateY(-180deg)";
        document.getElementById("shikiCardBack" + i).style.transform = "rotateY(0deg)";
    }
}

function setUpMiniGame2() {
    document.getElementById("startMenuContainer").style.display = "none";
    document.getElementById("miniGame2").style.display = "block";
    document.getElementById("miniGame2WhiteFlash").style.animation = "miniGame1WhiteFlashAnimation 10s linear " + (timer2 - 10) +  "s forwards";
    document.getElementById("timer2").style.animation = "timer " + timer2 + "s linear forwards";
    document.getElementById("neku2").style.animation = "MoveNeku2-1 2s ease forwards";
    document.getElementById("joshua").style.animation = "MoveJoshua2 2s ease forwards";
    MiniGame2Ending();

    setTimeout(() => {
        document.getElementById("timer2").style.visibility = "visible";
        document.getElementById("score2").style.animation = "FadeIn .8s linear forwards";
        document.getElementById("neku2").style.animation = "MoveNeku2-2 " + timer2 + "s linear forwards";
        document.getElementById("joshua").style.animation = "MoveJoshua2-2 " + timer2 + "s linear forwards";
        startJoshuaRound();
      }, "2000")
}

function startJoshuaRound() {
    setTimeout(() => {
        MoveJoshuaCardsToPlayArea();
        ResetCorrectAnimation();
      }, "200")
    setTimeout(() => {
        setupRound();
      }, "400")
}

function setupRound() {
    var cardDelay = [Math.random() * .4, Math.random() * .4, Math.random() * .4, Math.random() * .4, Math.random() * .4]

    if (joshuaCurrentRound == 1)
    {
        joshuaDeck = ["1", "2", "3"];
    }

    if (joshuaCurrentRound == 2)
    {
        joshuaDeck = ["1", "2", "3", "2R"];
    }

    if (joshuaCurrentRound >= 3)
    {
        joshuaDeck = ["1", "2", "3", "2R", "3R"];
    }

    joshuaDeck = joshuaDeck.sort(() => Math.random() - 0.5);
    joshuaDeck = joshuaDeck.sort(() => Math.random() - 0.5);

    for (var i = 0; i < joshuaCardsInPlay; i++) {
        document.getElementById("joshuaCardFrontImg" + (i + 1)).src = "images/" + joshuaDeck[i] +"Card.png";
        document.getElementById("joshuaCardBack" + (i + 1)).style.transform = "rotateY(180deg)";
        document.getElementById("joshuaCardFront" + (i + 1)).style.transform = "rotateY(0deg)";
    }

    setTimeout(() => {
        for (var i = 0; i < joshuaCardsInPlay; i++) {
            document.getElementById("joshuaCardBack" + (i + 1)).style.animation = "infiniteCardRotateBack .8s linear " + cardDelay[i] +"s infinite";
            document.getElementById("joshuaCardFront" + (i + 1)).style.animation = "infiniteCardRotateFront .8s linear " + cardDelay[i] +"s infinite";
        }
    }, "400")
}

function selectedJoshuaCard(joshuaSelectedCard) {
    if(joshuaDeck[(joshuaSelectedCard-1)] == 0) {
        return;
    }

    if (joshuaCurrentCard == joshuaDeck[(joshuaSelectedCard-1)]) {
        joshuaCardsFound++;
        updateJoshuaScore();
        joshuaDeck[(joshuaSelectedCard-1)] = 0;
        joshuaCorrectCardAnimation(joshuaSelectedCard);
        document.getElementById("joshuaCardBack" + joshuaSelectedCard).style.animation = "flipJoshuaCardFront .2s linear forwards";
        document.getElementById("joshuaCardFront" + joshuaSelectedCard).style.animation = "flipJoshuaCardBack .2s linear forwards";
        joshuaCurrentCard++;
        if(joshuaCurrentCard >= 4) {
            for (var i = 1; i < (joshuaCardsInPlay + 1); i++) {
                joshuaCorrectCardAnimation(i);
                document.getElementById("joshuaCardBack" + i).style.animation = "flipJoshuaCardFrontWon .2s linear forwards";
                document.getElementById("joshuaCardFront" + i).style.animation = "flipJoshuaCardBackWon .2s linear forwards";
            }
            joshuaCurrentCard = 1;

            setTimeout(() => {
                for (var i = 1; i < (joshuaCardsInPlay + 1); i++) {
                    document.getElementById("joshuaCard" + i).style.animation = "RetrieveJoshuaCard" + joshuaCurrentRound + "-" + i +" 0.2s linear forwards";
                }
                
                if(joshuaCardsInPlay < 5) {
                    joshuaCardsInPlay++;
                }

                if(joshuaCurrentRound < 3) {
                    joshuaCurrentRound++;
                }

                startJoshuaRound();
            }, "500")
        }
    }

    else {
        joshuaWrongCardAnimation(joshuaSelectedCard);
    }
}

function MoveJoshuaCardsToPlayArea() {
    for (var i = 1; i < (joshuaCardsInPlay + 1); i++) {
        document.getElementById("joshuaCard" + i).style.animation = "MoveJoshuaCard" + joshuaCurrentRound + "-" + i + " 0.2s linear forwards";
    }
}

function ResetCorrectAnimation() {
    for (var i = 1; i < (joshuaCardsInPlay + 1); i++) {
        document.getElementById("joshuaCorrectCardEffect3-" + i).style.visibility = "hidden";
        document.getElementById("joshuaCardBack" + i).style.animation = "FlipOverJoshuaCardBack .4s linear forwards";
        document.getElementById("joshuaCardFront" + i).style.animation = "FlipOverJoshuaCardFront .4s linear forwards";
    }
}

function joshuaCorrectCardAnimation(joshuaSelectedCard) {
    document.getElementById("joshuaCorrectCardEffect1-" + joshuaSelectedCard).style.visibility = "visible";
    setTimeout(() => {
        document.getElementById("joshuaCorrectCardEffect1-" + joshuaSelectedCard).style.visibility = "hidden";
        document.getElementById("joshuaCorrectCardEffect2-" + joshuaSelectedCard).style.visibility = "visible";
    }, "90")
    setTimeout(() => {
        document.getElementById("joshuaCorrectCardEffect2-" + joshuaSelectedCard).style.visibility = "hidden";
        document.getElementById("joshuaCorrectCardEffect3-" + joshuaSelectedCard).style.visibility = "visible";
    }, "180")
    setTimeout(() => {
        document.getElementById("joshuaCorrectCardEffect4-" + joshuaSelectedCard).style.visibility = "visible";
    }, "270")
    setTimeout(() => {
        document.getElementById("joshuaCorrectCardEffect4-" + joshuaSelectedCard).style.visibility = "hidden";
    }, "360")
}

function joshuaWrongCardAnimation(joshuaSelectedCard) {
    document.getElementById("miniGame2BackgroundContainer").classList.remove("addScreenShakeAnimation");
    void document.getElementById("miniGame2BackgroundContainer").offsetWidth;
    document.getElementById("miniGame2BackgroundContainer").classList.add("addScreenShakeAnimation");
    document.getElementById("joshuaWrongCardEffect1-" + joshuaSelectedCard).classList.remove("addWrongCardAnimation1");
    void document.getElementById("joshuaWrongCardEffect1-" + joshuaSelectedCard).offsetWidth;
    document.getElementById("joshuaWrongCardEffect1-" + joshuaSelectedCard).classList.add("addWrongCardAnimation1");
    document.getElementById("joshuaWrongCardEffect2-" + joshuaSelectedCard).classList.remove("addWrongCardAnimation2");
    void document.getElementById("joshuaWrongCardEffect2-" + joshuaSelectedCard).offsetWidth;
    document.getElementById("joshuaWrongCardEffect2-" + joshuaSelectedCard).classList.add("addWrongCardAnimation2");
}

function updateJoshuaScore() {
    scoreDecimal++;
    document.getElementById("scoreOutline2").classList.remove("RotateEnlargeScoreAnimation");
    document.getElementById("scoreOutline2").classList.remove("enlargeScoreAnimation");
    void document.getElementById("scoreOutline2").offsetWidth;
    if (scoreDecimal >= 10) {
        scoreInt++;
        scoreDecimal = 0;
        document.getElementById("scoreInt2").style.backgroundImage = "url(images/integer" + scoreInt + ".png)";
        document.getElementById("scoreIntOutline2").style.backgroundImage = "url(images/integer" + scoreInt + "Outline.png)";
        switch(scoreInt) {
            case 2:
                document.getElementById("mainDecimal2").style.transform = "translate(10%, 5%)";
                document.getElementById("scoreDecimalOutline2").style.transform = "translate(10%, 5%)";
                break;
            case 3:
                document.getElementById("mainDecimal2").style.transform = "translate(10%, 18%)";
                document.getElementById("scoreDecimalOutline2").style.transform = "translate(10%, 18%)";
                break;
            case 4:
                document.getElementById("mainDecimal2").style.transform = "translate(20%, 35%)";
                document.getElementById("scoreDecimalOutline2").style.transform = "translate(20%, 35%)";
                break;
        }
    }
    document.getElementById("mainDecimal2").style.backgroundImage = "url(images/decimal" + scoreDecimal + ".png)";
    document.getElementById("scoreDecimalOutline2").style.backgroundImage = "url(images/decimal" + scoreDecimal + "Outline.png)";

    if (joshuaCardsFound == 3) {
        document.getElementById("scoreOutline2").classList.add("RotateEnlargeScoreAnimation");
        joshuaCardsFound = 0;
    }
    else {
        document.getElementById("scoreOutline2").classList.add("enlargeScoreAnimation");
    }
}

function MiniGame2Ending() {
    setTimeout(() => {
        document.getElementById("joshuaFinalScoreInt").style.backgroundImage = document.getElementById("scoreInt2").style.backgroundImage;
        document.getElementById("joshuaFinalMainDecimal").style.backgroundImage = document.getElementById("mainDecimal2").style.backgroundImage;
        document.getElementById("joshuaFinalMainDecimal").style.transform = document.getElementById("mainDecimal2").style.transform;
        document.getElementById("miniGame2").style.display = "none";
        document.getElementById("miniGame2EndingBackgroundContainer").style.display = "block";
        ResetMiniGame2();
      }, timer2 + "000")

    setTimeout(() => {
        document.getElementById("startMenuContainer").style.display = "block";
        document.getElementById("miniGame2EndingBackgroundContainer").style.display = "none";
      }, (timer2 + 9) + "000")
}

function ResetMiniGame2() {
    scoreDecimal = 0;
    scoreInt = 1;
    document.getElementById("scoreInt2").style.backgroundImage = "url(images/integer1.png)";
    document.getElementById("mainDecimal2").style.backgroundImage = "url(images/decimal0.png)";
    document.getElementById("scoreIntOutline2").style.backgroundImage = "url(images/integer1Outline.png)";
    document.getElementById("scoreDecimalOutline2").style.backgroundImage = "url(images/decimal0Outline.png)";
    document.getElementById("timer2").style.visibility = "hidden";

    for (var i = 1; i < 6; i++) {
        document.getElementById("joshuaCard" + i).style.animation = null;
        document.getElementById("joshuaCardBack" + i).style.animation = null;
        document.getElementById("joshuaCardFront" + i).style.animation = null;
    }

    document.getElementById("score2").style.animation = null;
    document.getElementById("scoreOutline2").classList.remove("enlargeScoreAnimation");
    void document.getElementById("scoreOutline2").offsetWidth;
    document.getElementById("scoreOutline2").classList.remove("RotateEnlargeScoreAnimation");
    void document.getElementById("scoreOutline2").offsetWidth;
    document.getElementById("miniGame2BackgroundContainer").classList.remove("addScreenShakeAnimation");
    void document.getElementById("miniGame2BackgroundContainer").offsetWidth;
    joshuaDeck = ["1", "2", "3"]
    joshuaCurrentCard = 1;
    joshuaCardsInPlay = 3;
    joshuaCurrentRound = 1;
    joshuaCardsFound = 0;
    document.getElementById("mainDecimal2").style.transform = null;
    document.getElementById("scoreDecimalOutline2").style.transform = null;
}

function setUpMiniGame3() {
    document.getElementById("startMenuContainer").style.display = "none";
    document.getElementById("miniGame3").style.display = "block";
    document.getElementById("miniGame3WhiteFlash").style.animation = "miniGame1WhiteFlashAnimation 10s linear " + (timer3 - 10) +  "s forwards";
    document.getElementById("timer3").style.animation = "timer " + timer3 + "s linear forwards";
    MiniGame3Ending();

    for (var i = 0; i < 16; i++) {
        document.getElementById("beatCard" + i).style.animation = "beatCardAnimation2 2s linear forwards";
        while(lastBeatCard == beatDeck[i]) {
            beatDeck[i] = beatCardOptions[Math.floor(Math.random() * 4)];
        }
        document.getElementById("beatCardFrontImg" + i).src = "images/" + beatDeck[i] + "card.png";
        lastBeatCard = beatDeck[i];
    }

    console.log(beatDeck);

    setTimeout(() => {
        testing();
        document.getElementById("neku3").style.animation = "neku3Move " + timer3 + "s linear forwards";
        document.getElementById("beat").style.animation = "beatMove " + timer3 + "s linear forwards";
        document.getElementById("timer3").style.visibility = "visible";
        document.getElementById("score3").style.animation = "FadeIn .8s linear forwards";
      }, "2000")
    }

function testing() {
        for (var i = 0; i < 16; i++) {
            document.getElementById("beatCard" + i).style.animation = "beatCardAnimation1 1s linear";
        }

        for (var i = 0, t = .3; i < 16; i++) {
            document.getElementById("beatCardFront" + i).style.animation = "flipBeatCardFront .5s linear " + t + "s forwards";
            document.getElementById("beatCardBack" + i).style.animation = "flipBeatCardBack .5s linear " + t + "s forwards";
            t += .1;
        }

        setTimeout(() => {
            for (var i = 0, d = 0; i < 15; i++) {
                document.getElementById("beatCard" + i).style.animation = null;
            }
          }, "1000")
    }

function takeOutCard(selectedBeatCard) {
    selectedBeatCard.classList.remove("kaka");
    void selectedBeatCard.offsetWidth;
    selectedBeatCard.classList.add("kaka");
}
    
function testy(cardNumber) {
    lastBeatCard = beatDeck[0];
    lastBeatCard2 = beatDeck[14];
    beatDeck.splice(cardNumber, 1);

    if (cardNumber < 8) {
        while(lastBeatCard == beatDeck[0]) {
            lastBeatCard = beatCardOptions[Math.floor(Math.random() * 4)];
        }

        beatDeck.unshift(lastBeatCard);

        for (var i = 0; i < cardNumber; i++) {
            document.getElementById("beatCard" + i).right = beatCardPositions + "vw";
        }
    }

    if (cardNumber >= 8) {
        while(lastBeatCard2 == beatDeck[15]) {
            lastBeatCard2 = beatCardOptions[Math.floor(Math.random() * 4)];
        }

        beatDeck.push(lastBeatCard2);

        for (var i = 15; i > cardNumber; i--) {
            document.getElementById("beatCard" + i).right = beatCardPositions + "vw";
        }
    }

    setTimeout(() => {
        for (var i = 0; i < 16; i++) {
            document.getElementById("beatCardFrontImg" + i).src = "images/" + beatDeck[i] + "card.png";
        }

        for (var i = 1; i < 16; i++) {
            if (beatDeck[i] == beatDeck[i-1]) {
                beatCorrectCardAnimation(i);
            }
        }
      }, "500")
}

function beatCorrectCardAnimation(correctJoshuaCards) {
    updateBeatScore();
    document.getElementById("beatCorrectCardEffect1-" + correctJoshuaCards).style.visibility = "visible";
    document.getElementById("beatCorrectCardEffect1-" + (correctJoshuaCards - 1)).style.visibility = "visible";
    setTimeout(() => {
        document.getElementById("beatCorrectCardEffect1-" + correctJoshuaCards).style.visibility = "hidden";
        document.getElementById("beatCorrectCardEffect2-" + correctJoshuaCards).style.visibility = "visible";
        document.getElementById("beatCorrectCardEffect1-" + (correctJoshuaCards - 1)).style.visibility = "hidden";
        document.getElementById("beatCorrectCardEffect2-" + (correctJoshuaCards - 1)).style.visibility = "visible";
    }, "90")
    setTimeout(() => {
        document.getElementById("beatCorrectCardEffect2-" + correctJoshuaCards).style.visibility = "hidden";
        document.getElementById("beatCorrectCardEffect3-" + correctJoshuaCards).style.visibility = "visible";
        document.getElementById("beatCorrectCardEffect2-" + (correctJoshuaCards - 1)).style.visibility = "hidden";
        document.getElementById("beatCorrectCardEffect3-" + (correctJoshuaCards - 1)).style.visibility = "visible";
    }, "180")
    setTimeout(() => {
        document.getElementById("beatCorrectCardEffect3-" + correctJoshuaCards).style.visibility = "hidden";
        document.getElementById("beatCorrectCardEffect4-" + correctJoshuaCards).style.visibility = "visible";
        document.getElementById("beatCorrectCardEffect3-" + (correctJoshuaCards - 1)).style.visibility = "hidden";
        document.getElementById("beatCorrectCardEffect4-" + (correctJoshuaCards - 1)).style.visibility = "visible";
    }, "270")
    setTimeout(() => {
        document.getElementById("beatCorrectCardEffect4-" + correctJoshuaCards).style.visibility = "hidden";
        document.getElementById("beatCorrectCardEffect4-" + (correctJoshuaCards - 1)).style.visibility = "hidden";

        beatDeck.splice(correctJoshuaCards-1, 2);

        lastBeatCard = beatDeck[0];
        while(lastBeatCard == beatDeck[0]) {
            lastBeatCard = beatCardOptions[Math.floor(Math.random() * 4)];
        }
        beatDeck.unshift(lastBeatCard);

        lastBeatCard = beatDeck[0];
        while(lastBeatCard == beatDeck[0]) {
            lastBeatCard = beatCardOptions[Math.floor(Math.random() * 4)];
        }
        beatDeck.unshift(lastBeatCard);

        for (var i = 0; i < 16; i++) {
            document.getElementById("beatCardFrontImg" + i).src = "images/" + beatDeck[i] + "card.png";
        }

        for (var i = 1; i < 16; i++) {
            if (beatDeck[i] == beatDeck[i-1]) {
                beatCorrectCardAnimation(i);
            }
        }

    }, "360")
}

function updateBeatScore() {
    scoreDecimal++;
    document.getElementById("scoreOutline3").classList.remove("RotateEnlargeScoreAnimation");
    document.getElementById("scoreOutline3").classList.remove("enlargeScoreAnimation");
    void document.getElementById("scoreOutline3").offsetWidth;
    if (scoreDecimal >= 10) {
        scoreInt++;
        scoreDecimal = 0;
        document.getElementById("scoreInt3").style.backgroundImage = "url(images/integer" + scoreInt + ".png)";
        document.getElementById("scoreIntOutline3").style.backgroundImage = "url(images/integer" + scoreInt + "Outline.png)";
        switch(scoreInt) {
            case 2:
                document.getElementById("mainDecimal3").style.transform = "translate(10%, 5%)";
                document.getElementById("scoreDecimalOutline3").style.transform = "translate(10%, 5%)";
                break;
            case 3:
                document.getElementById("mainDecimal3").style.transform = "translate(10%, 18%)";
                document.getElementById("scoreDecimalOutline3").style.transform = "translate(10%, 18%)";
                break;
            case 4:
                document.getElementById("mainDecimal3").style.transform = "translate(20%, 35%)";
                document.getElementById("scoreDecimalOutline3").style.transform = "translate(20%, 35%)";
                break;
        }
    }
    document.getElementById("mainDecimal3").style.backgroundImage = "url(images/decimal" + scoreDecimal + ".png)";
    document.getElementById("scoreDecimalOutline3").style.backgroundImage = "url(images/decimal" + scoreDecimal + "Outline.png)";
    document.getElementById("scoreOutline3").classList.add("enlargeScoreAnimation");
}

function MiniGame3Ending() {
    setTimeout(() => {
        document.getElementById("beatFinalScoreInt").style.backgroundImage = document.getElementById("scoreInt3").style.backgroundImage;
        document.getElementById("beatFinalMainDecimal").style.backgroundImage = document.getElementById("mainDecimal3").style.backgroundImage;
        document.getElementById("beatFinalMainDecimal").style.transform = document.getElementById("mainDecimal3").style.transform;
        document.getElementById("miniGame3").style.display = "none";
        document.getElementById("miniGame3EndingBackgroundContainer").style.display = "block";
        MiniGame3Reset();
        MiniGame3EndingAnimations();
      }, timer3 + "000")
}

function MiniGame3Reset() {
    for (var i = 0; i < 16; i++) {
        document.getElementById("beatCard" + i).style.animation = "beatCardAnimation2 2s linear forwards";
        while(lastBeatCard == beatDeck[i]) {
            beatDeck[i] = beatCardOptions[Math.floor(Math.random() * 4)];
        }
        document.getElementById("beatCardFrontImg" + i).src = "images/" + beatDeck[i] + "card.png";
        lastBeatCard = beatDeck[i];
    }
    document.getElementById("timer3").style.visibility = "hidden";
    document.getElementById("score3").style.animation = null;
    document.getElementById("scoreOutline3").classList.remove("RotateEnlargeScoreAnimation");
    document.getElementById("scoreOutline3").classList.remove("enlargeScoreAnimation");
    document.getElementById("neku3").style.animation = "";
    document.getElementById("beat").style.animation = "";
    document.getElementById("miniGame3WhiteFlash").style.animation = "";

    for (var i = 0; i < 16; i++) {
        document.getElementById("beatCard" + i).style.animation = "";
        document.getElementById("beatCardFront" + i).style.animation = "";
        document.getElementById("beatCardBack" + i).style.animation = "";

        document.getElementById("beatCard" + i).classList.remove("kaka");
        void document.getElementById("beatCard" + i).offsetWidth;
    }

    scoreDecimal = 0;
    scoreInt = 1;
    document.getElementById("mainDecimal3").style.transform = "";
    document.getElementById("scoreDecimalOutline3").style.transform = "";
    document.getElementById("mainDecimal3").style.backgroundImage = "url(images/decimal" + scoreDecimal + ".png)";
    document.getElementById("scoreDecimalOutline3").style.backgroundImage = "url(images/decimal" + scoreDecimal + "Outline.png)";
    document.getElementById("scoreInt3").style.backgroundImage = "url(images/integer" + scoreInt + ".png)";
    document.getElementById("scoreIntOutline3").style.backgroundImage = "url(images/integer" + scoreInt + "Outline.png)";
    
}

function MiniGame3EndingAnimations() {
    setTimeout(() => {
        document.getElementById("skateNeku1").style.animation = "skateNeku1-2 .6s linear";
        document.getElementById("skateNeku2").style.animation = "skateNeku2-2 .6s linear .6s";
        document.getElementById("skateBeat1").style.animation = "skateBeat1-2 .6s linear 1.2s";
        document.getElementById("skateBeat2").style.animation = "skateBeat2-2 .6s linear 1.8s";
    }, "3000")
    setTimeout(() => {
        document.getElementById("skateNeku1").style.animation = "skateNeku1-3 .4s linear";
        document.getElementById("skateNeku2").style.animation = "skateNeku2-3 .4s linear .4s";
        document.getElementById("skateBeat1").style.animation = "skateBeat1-3 .4s linear .8s";
        document.getElementById("skateBeat2").style.animation = "skateBeat2-3 .4s linear 1.2s";
    }, "5400")
    setTimeout(() => {
        document.getElementById("skateNeku1").style.animation = "skateNeku1-4 .2s linear";
        document.getElementById("skateNeku2").style.animation = "skateNeku2-4 .2s linear .2s";
        document.getElementById("skateBeat1").style.animation = "skateBeat1-4 .2s linear .4s";
        document.getElementById("skateBeat2").style.animation = "skateBeat2-4 .2s linear .6s";
    }, "6200")
    setTimeout(() => {
        document.getElementById("skateNeku1").style.animation = "skateNeku1-5 .1s linear";
        document.getElementById("skateNeku2").style.animation = "skateNeku2-5 .1s linear .1s";
        document.getElementById("skateBeat1").style.animation = "skateBeat1-5 .1s linear .2s";
        document.getElementById("skateBeat2").style.animation = "skateBeat2-5 .1s linear .3s";
    }, "6600")
    setTimeout(() => {
        document.getElementById("startMenuContainer").style.display = "block";
        document.getElementById("miniGame3EndingBackgroundContainer").style.display = "none";
    }, "9000")
}