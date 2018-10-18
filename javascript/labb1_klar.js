// Globala variabler
var slumptal, antal = 1;

// Slumpa fram ett tal
slumptal = Math.floor(Math.random() * 10 + 1);
console.log(slumptal);

document.getElementById('ganger').innerHTML = "Försök 1";

function testaSvaret() {
    var svar = document.getElementById('dittSvar').value;

    // Räkna antal klick
    antal++;
    console.log("Antal gånger är " + antal);

    document.getElementById('ganger').innerHTML = "Försök " + antal;

    //  Testa om svar är verkligen ett tal
    if (isNaN(svar)) {
        document.getElementById('resultat').value = "Svaret är inte tal. Försök igen!";
    } else {
        if (svar == slumptal) {
            document.getElementById('resultat').value = "Rätt svar!";
            document.getElementById('dittSvar').disabled = true;
            alert("Du vann!");
        } else {
            document.getElementById('resultat').value = "Fel svar!";
            if (antal > 4) {
                document.getElementById('dittSvar').disabled = true;
                alert("Game over!");
            }
        }
    }
}