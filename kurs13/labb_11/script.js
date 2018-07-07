// Global variables
var dateTag, imgTag, nameListTag, pictListTag; // References to tags

function init() {
	dateTag = document.getElementById("date");
	imgTag = document.getElementById("fruitPict");
	nameListTag = document.getElementById("fruitNameList");
	pictListTag = document.getElementById("fruitPictList");
} // End init
window.onload = init;


function chooseFruit(fruitName) {
	imgTag.src = "pics/fruits/" + fruitName + ".jpg";
} // End chooseFruit


function prevPict() {
	
} // End prevPict


function nextPict() {
	
} // End nextPict


function listFruits() {
	
} // End listFruits


function ifAppleChangeLemonsToOranges() {
	
} //End ifAppleChangeLemonsToOranges
