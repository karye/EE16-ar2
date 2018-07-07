// Global variables
var fruitBtnTags, largePictBoxTag, fruitTitleTag, fruitPictTag;

function init() {
	var i;
	fruitBtnTags = document.getElementById("fruitButtons").getElementsByTagName("img");
	for (i=0; i<fruitBtnTags.length; i++) {
		fruitBtnTags[i].onclick = chooseFruit;
	}
	largePictBoxTag = document.getElementById("largePictBox");
	fruitTitleTag = largePictBoxTag.getElementsByTagName("h4")[0];
	fruitPictTag = largePictBoxTag.getElementsByTagName("img")[0];
} // End init
window.onload = init;

function chooseFruit() {
	
} // End chooseFruit