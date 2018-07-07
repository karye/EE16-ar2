// Global variables
var randomNumber = 0; // Random number to be generated in function newRandom
var guessCounter = 0; // Number of guesses the user made
var inText, resultTag, pictureTag; // References to tags

function init() {
	inText = document.getElementById("inText");
	resultTag = document.getElementById("result");
	pictureTag = document.getElementById("picture");
} // End init
window.onload = init;

function newRandom(high) {
	var randNr = Math.floor(high*Math.random())+1;
	return randNr;
} // End newRandom

function newGame() {
	randomNumber = newRandom(10);
	guessCounter = 0;
	pictureTag.src = "pics/transparent.gif";
	alert("Ett nytt slumptal mellan 1 och 10 är nu genererat");
} // End newGame

function checkGuess() {
	var guess, resStr;
	guess = Number(inText.value);
	if (isNaN(guess)) resStr = "Du måste skriva ett tal";
	else if (guess == randomNumber) {
		resStr = "Rätt";
		showFlower();
	}
	else {
		guessCounter += 1;
		resStr = guessCounter + " fel";
		if (guessCounter == 5) resStr = "Nu har du gissat fel 5 gånger. Rätt svar är " + randomNumber;
	}
	resultTag.innerHTML = resStr;
} // End checkGuess

function showFlower() {
	var pictNr = newRandom(3);
	pictureTag.src = "pics/flower" + pictNr + ".jpg";
} // End showFlower
