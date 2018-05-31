// Global variables
var wrongAnswerCounter = 0; // Counts nr of wrong answers in the question of nr of images
var inText, resultTag, largeImg, imgText, imgList; // References to tags

function init() {
	inText = document.getElementById("inText");
	resultTag = document.getElementById("result");
	largeImg = document.getElementById("largeImg");
	imgText = document.getElementById("imgText");
	imgList = document.getElementById("imgList");
} // End init
window.onload = init;

function checkAnswer() {
	var answer, resStr;
	answer = Number(inText.value);
	resStr = answer;
	if (isNaN(answer)) resStr = "Du måste skriva ett tal";
	else if (answer == 5 ) resStr = "Rätt";
	else {
		wrongAnswerCounter += 1;
		resStr = "Fel. Du har nu svarat fel " + wrongAnswerCounter + " gånger.";
	}
	resultTag.innerHTML = resStr;
} // End checkAnswer

function showPict(nr) {
	largeImg.src = "pics/large/pic" + nr + ".jpg";
	var altText = document.getElementById("smallImg"+nr).alt;
	imgText.innerHTML = altText;
	return altText;
} // End showPict

function showRandomPict() {
	var randomNumber = Math.floor(5*Math.random())+1;
	var pictText = showPict(randomNumber);
	imgList.innerHTML += pictText + ", ";
} // End showRandomPict