function testaSvaret() {
    var svar = document.getElementById('dittSvar').value;

    if (svar == 5) {
        document.getElementById('resultat').value = "Rätt svar!";
        alert("Du vann!");
    } else {
        document.getElementById('resultat').value = "Fel svar!";
    }
}
