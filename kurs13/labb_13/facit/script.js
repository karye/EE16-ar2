// Global variables
var smallImgTags, choosedFruitTag, largeImgTag, infoTextTag;

function init() {
	var tag, i, inputTags;
	choosedFruitTag = document.getElementById("choosedFruit");
	tag = document.getElementById("controlPanel").getElementsByTagName("button")[0];
	tag.onclick = showHideLargeImage;
	smallImgTags = document.getElementById("fruits").getElementsByTagName("img");
	inputTags = document.getElementById("fruits").getElementsByTagName("input");
	for (i=0; i<smallImgTags.length; i++) {
		smallImgTags[i].onclick = chooseImage;
		inputTags[i].onblur = checkFruitName;
	}
	largeImgTag = choosedFruitTag.getElementsByTagName("img")[0];
	tag = document.getElementById("controlPanel").getElementsByTagName("select")[0];
	tag.onchange = selectImage;
	infoTextTag = choosedFruitTag.getElementsByTagName("p")[0];
	largeImgTag.onmouseover = showInfoText;
	largeImgTag.onmouseout = hideInfoText;
} // End init
window.onload = init;

function showHideLargeImage() {
	if (choosedFruitTag.style.display == "none") choosedFruitTag.style.display = "block";
	else choosedFruitTag.style.display = "none";
} // End showHideLargeImage

function chooseImage() {
	largeImgTag.src = this.src;
	infoTextTag.innerHTML = this.alt;
	this.parentNode.getElementsByTagName("input")[0].select();
} // End chooseImage

function selectImage() {
	var ix;
	ix = this.selectedIndex - 2;
	largeImgTag.src = smallImgTags[ix].src;
	infoTextTag.innerHTML = smallImgTags[ix].alt;
	this.selectedIndex = 0;
} // End selectImage

function checkFruitName() {
	var divTag, fruitName, spanTag, inputText;
	divTag = this.parentNode;
	fruitName = divTag.getElementsByTagName("img")[0].alt;
	spanTag = divTag.getElementsByTagName("span")[0];
	inputText = this.value.toLowerCase();
	if (inputText == "") spanTag.innerHTML = "";
	else if (inputText == fruitName) spanTag.innerHTML = "Rätt";
	else spanTag.innerHTML = "Fel";
} // End checkFruitName

function showInfoText() {
	infoTextTag.style.visibility = "visible";
} // End showInfoText

function hideInfoText() {
	infoTextTag.style.visibility = "hidden";
} // End hideInfoText