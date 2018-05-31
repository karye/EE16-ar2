// Fyll ruta 1 med slumpat tal 0-99
var get1 = Math.floor(Math.random() * 100);
document.getElementById("tal1").value = get1;
console.log(get1);

// Fyll ruta 2 med slumpat tal 0-99
var get2 = Math.floor(Math.random() * 100);
document.getElementById("tal2").value = get2;
console.log(get2);

function hemligAdress() {
    // Läsa av innehållet i ruta summa
    var get3 = document.getElementById("summa").value;
    console.log(get3);

    // Räkna ut tal1 + tal2
    var summa = Number(get1) + Number(get2);
    // Vad händer här?
    console.log(summa);

    // Jämföra tal1 + tal2 med summa
    // Om lika visa hemlig adress
    if (summa == get3) {
        document.getElementById("hemligt").innerHTML = "Hagsätragatan 2, 124 70 Bandhagen.";
    } else {
        document.write("Get lost spamer!");
    }
}
