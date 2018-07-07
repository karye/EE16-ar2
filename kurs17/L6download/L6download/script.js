// JavaScript Document

// Globala variabler
var formElem;		// Referens till elementet med hela formuläret
var totalCostElem;	// Referens till elementet för totalpris

// Initiera globala variabler och koppla funktion till knapp
function init() {
	var i;		// Loopvariabel
	formElem = document.getElementById("booking");
	totalCostElem = document.getElementById("totalCost");
	
} // End init
addListener(window,"load",init);
