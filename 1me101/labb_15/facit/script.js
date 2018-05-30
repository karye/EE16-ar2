// Global variables
var movieListItemTags, dimTag, movieTag, youtubeTags; // References to t´differnt tags
var movieNr; // Nr (index) to the current movie
var winWidth, winHeight; // Width and height of the inner area of the window

function init() {
	var i;
	movieListItemTags = document.getElementById("movielist").getElementsByTagName("li");
	for (i=0; i<movieListItemTags.length; i++) {
		movieListItemTags[i].onclick = showMovie;
	}
	dimTag = document.getElementById("dimmer");
	movieTag = document.getElementById("movies");
	youtubeTags = movieTag.getElementsByTagName("iframe");
	document.getElementById("closeBtn").onclick = hideMovie;
} // End init
window.onload = init;

// Show an element for dimming the page and an element with the movie
function showMovie() {
	var i;
	for (i=0; i<movieListItemTags.length; i++) { // Get the nr for the movie the user clicked on
		if (this == movieListItemTags[i]) break;
	}
	movieNr = i; // Current movie
	adjustMovieSize(); // Adjust the size of the movie to the window
	dimTag.style.visibility = "visible"; // Show the "dimmer"
	youtubeTags[movieNr].style.display = "block"; // Show the iframe with the selected movie
	movieTag.style.visibility = "visible"; // Show the element with the movie (and close button)
} // End showMovie

// Hide the movie element and the dimmer element
function hideMovie() {
	var saveSrc;
	movieTag.style.visibility = "hidden"; // Hide the element with the movie frames
	// Stop the YouTube movie to play
		saveSrc = youtubeTags[movieNr].src; // Save source from the iframe tag
		youtubeTags[movieNr].src = ""; // Set the iframe to empty (this removes the movie, and makes it stop playing)
		youtubeTags[movieNr].src = saveSrc; // Reset the iframe src attribute. The movie is included again, but doesn't start play (until the user clicks it).
	youtubeTags[movieNr].style.display = "none"; // Hide the iframe with the movie
	dimTag.style.visibility = "hidden"; // Hide the "dimmer"
} // End hideMovie

// Get the inner width and height of the window. Save them in the global variables winWidth and winHeight.
// The size of the window is received differently in different browsers.
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

// Adjust the size of the iframe with the movie, so it fits the window
function adjustMovieSize() {
	var iframeWidth, iframeHeight, delta;
	getWindowSize(); // Get the window's size
	iframeWidth = youtubeTags[movieNr].width;
	iframeHeight = youtubeTags[movieNr].height;
	// Calculate the ratio between the window width and iframe width, and the window height and the iframe height
	delta = Math.min(winWidth/iframeWidth, winHeight/iframeHeight); // Use the smallest of these values
	iframeWidth = Math.floor(delta * iframeWidth); // New iframe width and height
	iframeHeight = Math.floor(delta * iframeHeight);
	youtubeTags[movieNr].width = iframeWidth;
	youtubeTags[movieNr].height = iframeHeight;
	// Center the div element with the iframe. 30 is the margin between the window border and the movie border
	movieTag.style.left = Math.floor((winWidth-iframeWidth)/2+30) + "px";
} // End adjustMovieSize