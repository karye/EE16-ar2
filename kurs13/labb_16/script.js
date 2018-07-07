// Global variables
var movieListItemTags, movieTag, youtubeTags;
var winWidth, winHeight;

function init() {
	var i;
	movieListItemTags = document.getElementById("movielist").getElementsByTagName("li");
	for (i=0; i<movieListItemTags.length; i++) {
		movieListItemTags[i].onclick = showMovie;
	}
	movieTag = document.getElementById("movies");
	youtubeTags = movieTag.getElementsByTagName("iframe");
	document.getElementById("closeBtn").onclick = hideMovie;
} // End init
window.onload = init;

function showMovie() {
	
} // End showMovie

function hideMovie() {
	
} // End hideMovie

function getWindowSize() {
	if (window.innerWidth && window.innerHeight) {
		winWidth = window.innerWidth;
		winHeight = window.innerHeight;
	}
	else if (document.documentElement && (document.documentElement.clientWidth && document.documentElement.clientHeight)) {
		winWidth = document.documentElement.clientWidth;
		winHeight = document.documentElement.clientHeight;
	}
	else if (document.body && (document.body.clientWidth && document.body.clientHeight)) {
		winWidth = document.body.clientWidth;
		winHeight = document.body.clientHeight;
	}
	else { // Just assume a small window
		winWidth = 640;
		winHeight = 480;
	} // End if
	winWidth -= 60;  // Leave a margin of 30 pixels
	winHeight -= 60;
} // End getWindowSize
