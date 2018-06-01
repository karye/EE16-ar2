function testaSvaret() {
    var svar = document.getElementById('dittSvar').value;

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
