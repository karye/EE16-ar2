function raknaMoms() {
    var pris = Number(document.getElementById("pris").value);
    var moms = 0.25;
    var totalPris = pris + pris * moms;
    alert("Varan pris med moms är " + totalPris);
}
