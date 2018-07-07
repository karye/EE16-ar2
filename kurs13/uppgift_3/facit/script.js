// Global variables
var input1Tag, input2Tag, resultTag, listResultTag, sumResultTag;
var allResults = [];

function init() {
	input1Tag = document.getElementById("inputField1");
	input2Tag = document.getElementById("inputField2");
	resultTag = document.getElementById("result");
	listResultTag = document.getElementById("listResult");
	sumResultTag = document.getElementById("sumResult");
} // End init
window.onload = init;

/*
function calculate() {      // Funktionen i övning 1
	var nr1, nr2, res;
	nr1 = Number(input1Tag.value);
	nr2 = Number(input2Tag.value);
	res = nr1 + nr2;
	resultTag.innerHTML = res;
} // End calculate
*/

function calculate(op) {      // Funktionen i övning 2
	var nr1, nr2, res;
	nr1 = Number(input1Tag.value);
	nr2 = Number(input2Tag.value);
	if (op == "+") res = nr1 + nr2;
	else if (op == "-") res = nr1 - nr2;
	else if (op == "*") res = nr1 * nr2;
	else if (op == "/") res = nr1 / nr2;
	else res = "ingen operator gavs";
	resultTag.innerHTML = res;
	allResults.push(res); // Denna rad läggs till i övning 3
} // End calculate


function listAllResults() {     // Denna funktion skrivs i övning 4
	listResultTag.innerHTML = allResults.join("<br>");
} // End listAllResults


function sumAllResults() {     // Denna funktion skrivs i övning 5
	var i, sum;
	sum = 0;
	for (i=0; i<allResults.length; i++) {
		sum += allResults[i];
	}
	sumResultTag.innerHTML = sum;
} // End sumAllResults
