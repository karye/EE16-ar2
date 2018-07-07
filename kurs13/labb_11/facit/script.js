// Global variables
var dateTag, imgTag, nameListTag, pictListTag; // References to tags
var selectedFruits = []; // Array for selected fruit names
var currentPict; // Index to selectedFruits for the fruit showing in the large img tag

function init() {
	dateTag = document.getElementById("date");
	imgTag = document.getElementById("fruitPict");
	nameListTag = document.getElementById("fruitNameList");
	pictListTag = document.getElementById("fruitPictList");
	showDate();
	currentPict = -1;
} // End init
window.onload = init;

function showDate() {
	var day = ["Söndag","Måndag","Tisdag","Onsdag","Torsdag","Fredag","Lördag"];
	var month = ["januari","februari","mars","april","maj","juni","juli","augusti","september","oktober","november","december"];
	var today = new Date();
	var y = today.getFullYear();
	var m = today.getMonth();
	var d = today.getDate();
	var dayNr = today.getDay();
	// dateTag.innerHTML = d + "/" + (m+1) + ", " + y;
	dateTag.innerHTML = day[dayNr] + " den " + d + " " + month[m] + " " + y;
} // End showDate

function chooseFruit(fruitName) {
	imgTag.src = "pics/fruits/" + fruitName + ".jpg";
	selectedFruits.push(fruitName);
	currentPict = selectedFruits.length - 1;
} // End chooseFruit

function prevPict() {
	if (currentPict > 0) changePict(currentPict - 1);
} // End prevPict

function nextPict() {
	if (currentPict < selectedFruits.length - 1) changePict(currentPict + 1);
} // End nextPict

function changePict(pictNr) {
	imgTag.src = "pics/fruits/" + selectedFruits[pictNr] + ".jpg";
	currentPict = pictNr;
} // End changePict

function listFruits() {
	var i, imgList;
	nameListTag.innerHTML = selectedFruits.join(", ");
	imgList = "";
	for (i=0; i<selectedFruits.length; i++) {
		imgList += "<img src='pics/fruits/" + selectedFruits[i] + ".jpg' alt='frukt'>";
	}
	pictListTag.innerHTML = imgList;
} // End listFruits

function ifAppleChangeLemonsToOranges() {
	var i, appleFound;
	appleFound = false;
	for (i=0; i<selectedFruits.length; i++) {
		if (selectedFruits[i] == "apple") {
			appleFound = true;
			break;
		}
	}
	if (appleFound) {
		for (i=0; i<selectedFruits.length; i++) {
			if (selectedFruits[i] == "lemon") selectedFruits[i] = "orange";
		}
	}
	listFruits();
} //End ifAppleChangeLemonsToOranges
