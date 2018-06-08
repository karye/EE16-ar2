// Globala variabler
var slumptal, antal = 1;

// Slumpa fram ett tal
slumptal = Math.floor(Math.random() * 10 + 1);
console.log(slumptal);

function testaSvaret() {
    var svar = document.getElementById('dittSvar').value;

    // Räkna antal klick
    antal++;
    console.log("Antal gånger är " + antal);

    //  Testa om svar är verkligen ett tal
    if (isNaN(svar)) {
        document.getElementById('resultat').value = "Svaret är inte tal. Försök igen!";
    } else {
        if (svar == 5) {
            document.getElementById('resultat').value = "Rätt svar!";
            alert("Du vann!");
        } else {
            document.getElementById('resultat').value = "Fel svar!";
        }
    }
}
