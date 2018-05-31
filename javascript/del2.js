// En global variabel
// Ändra till ett begränsat antal försök
var antalFelSvar = 0
var svarRuta, resultatRuta;

// Peka ut element på webbsidan
svarRuta = document.getElementById('inText');
resultatRuta = document.getElementById('utText');

function testaSvar() {
    var svarIn, svarUt;

    // Hämta svaret
    svarIn = Number(svarRuta.value);

    // Slumpa fram ett tal mellan 1 och 10
    // slumptal = Math.floor(10 * Math.random() + 1);

    // Kolla om svaret är ett tal
    // Kolla om svaret är rätt
    if (isNaN(svarIn)) {
        svarUt = "Du måste skriva ett tal!";
    } else if (svarIn == 5) {
        svarUt = "Rätt";
    } else {
        antalFelSvar += 1;
        svarUt = "Fel. Du har nu svarat fel " + antalFelSvar + " gånger.";
    }

    // Skriv ut svaret
    resultatRuta.value = svarUt;

    // Rensa rutorna efter 1 sekund
    setTimeout(function(){ alert("Hello"); }, 1000);
}
