/*

*/

// Globala variabler
var slumptal, antal = 0;

// Slumpa fram ett tal mellan 1 och 3
slumptal = Math.floor(Math.random() * 5 + 1);
console.log(slumptal);

// Testar om svaret är korrekt
function testaSvaret(dittSvar) {
    antal++;

    if (dittSvar == slumptal) {
        document.getElementById('resultat').innerHTML = "Grattis! Du hitta rätt knapp.";
        document.getElementById('knapp1').disabled = true;
        document.getElementById('knapp2').disabled = true;
        document.getElementById('knapp3').disabled = true;
        document.getElementById('knapp4').disabled = true;
        document.getElementById('knapp5').disabled = true;
    } else {
        document.getElementById('resultat').innerHTML = "Fel! Försök igen!";
        var knapp = "knapp" + dittSvar;
        console.log(knapp);
        document.getElementById(knapp).disabled = true;
    }

    if (antal >= 3) {
        document.getElementById('knapp1').disabled = true;
        document.getElementById('knapp2').disabled = true;
        document.getElementById('knapp3').disabled = true;
        document.getElementById('knapp4').disabled = true;
        document.getElementById('knapp5').disabled = true;
        alert("Game Over!");
    }
}
