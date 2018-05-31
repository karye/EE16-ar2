function init() {
	alert("Hej");
} // End init
window.onload = init;

function myClickFunction() {
	var nr1, nr2, res;
	nr1 = Number(document.getElementById("inText1").value);
	nr2 = Number(document.getElementById("inText2").value);
	res = (nr1 + nr2) * 4;
	document.getElementById("result").innerHTML = "Resultatet blir " + res;
} // End myClickFunction