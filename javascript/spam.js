function hemligAdress() {
    // Läsa av innehållet i ruta 1
    var get1 = document.getElementById("tal1").value;
    console.log(get1);

    // Läsa av innehållet i ruta 2
    var get2 = document.getElementById("tal2").value;
    console.log(get2);

    // Läsa av innehållet i ruta summa
    var get3 = document.getElementById("summa").value;
    console.log(get3);

    // Räkna ut tal1 + tal2
    var summa = get1 + get2;
    

    // Jämföra tal1 + tal2 med summa
    // Om lika visa hemlig adress
    if (summa == get3) {
        document.getElementById("hemligt").innerHTML = "Hagsätragatan 2, 124 70 Bandhagen.";
    } else {
        document.write("Get lost spamer!");
    }
}
