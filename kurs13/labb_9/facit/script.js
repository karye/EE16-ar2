function init() {
	document.getElementById("result").innerHTML = "Hej hela världen!";
} // End init
window.onload = init;

/*
function doSomething() {
	var price = Number(document.getElementById("inText").value);
	var vatFactor = 0.25; // Momsen är 25%
	var vat = vatFactor * price;
	var totPrice = price + vat;
	var resStr = "Pris: " + totPrice + " varav " + vat + " är moms";
	document.getElementById("result").innerHTML = resStr;
} // End doSomething
*/

function doSomething() {
	var price, vatFactor, totPrice, resStr;
	price = Number(document.getElementById("inText").value);
	vatFactor = 0.25; // Momsen är 25%
	totPrice = price + vatFactor * price;
	resStr = "Pris: " + totPrice + " med moms på " + vatFactor * 100 + "%";
	vatFactor = 0.06; // Momsen är 6%
	totPrice = price + vatFactor * price;
	resStr += "<br>Pris: " + totPrice + " med moms på " + vatFactor * 100 + "%";
	document.getElementById("result").innerHTML = resStr;
} // End doSomething