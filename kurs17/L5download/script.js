// JavaScript Document

// Globala variabler
var carImgElem;		// Referens till bild med bil
var msgElem;		// Referens till elementet för meddelanden
var carImgs;		// Array med filnamn för bilderna med bilen
var carDir;			// Riktning för bilen
var xStep, yStep;	// Antal pixlar som bilen ska förflytta sig i x- resp. y-led i varje steg
var timerRef;		// Referens till timern för bilens förflyttning
var timerStep;		// Tid i ms mellan varje steg i förflyttningen
/* === Tillägg i labben === */


// Initiera globala variabler och koppla funktion till knapp
function init() {
	carImgElem = document.getElementById("car");
	msgElem = document.getElementById("message");
	addListener(document,"keydown",checkKey);
	carImgs = ["car_up.png","car_right.png","car_down.png","car_left.png"];
	carDir = 1;
	addListener(document.getElementById("startBtn"),"click",startGame);
	addListener(document.getElementById("stopBtn"),"click",stopGame);
	xStep = 5;
	yStep = 5;
	timerRef = null;
	timerStep = 20;
	/* === Tillägg i labben === */
	
} // End init
addListener(window,"load",init);

function checkKey(e) {
	var k = e.keyCode;
	switch (k) {
		case 37: // Pil vänster
		case 90: // Z
			carDir--;
			if (carDir < 0) carDir = 3;
			carImgElem.src = "pics/" + carImgs[carDir];
			break;
		case 39:  // Pil höger
		case 173: // -
			carDir++;
			if (carDir > 3) carDir = 0;
			carImgElem.src = "pics/" + carImgs[carDir];
			break;
	}
} // End checkKey

// Starta bilens rörelse
function startGame() {
	carImgElem.style.left = "0px";
	carImgElem.style.top = "0px";
	moveCar();
	/* === Tillägg i labben === */
	
} // End startGame

// Stoppa bilen
function stopGame() {
	if (timerRef != null) clearTimeout(timerRef);
	/* === Tillägg i labben === */
	
} // End stopGame

// Flytta bilen ett steg framåt i bilens riktning
function moveCar() {
	var x;	// x-koordinat (left) för bilen
	var y;	// y-koordinat (top) för bilen
	x = parseInt(carImgElem.style.left);
	y = parseInt(carImgElem.style.top);
	switch (carDir) {
		case 0: // Uppåt
			y -= yStep;
			if (y < 0) y = 0;
			break;
		case 1: // Höger
			x += xStep;
			if (x > 720) x = 720;
			break;
		case 2: // Nedåt
			y += yStep;
			if (y > 420) y = 420;
			break;
		case 3: // Vänster
			x -= xStep;
			if (x < 0) x = 0;
			break;
	}
	carImgElem.style.left = x + "px";
	carImgElem.style.top = y + "px";
	timerRef = setTimeout(moveCar,timerStep);
	/* === Tillägg i labben === */
	
} // End moveCar


/* === Tillägg av nya funktioner i labben === */
