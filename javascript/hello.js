function hej() {
    alert("Hejhej!");
}

function hejdu(namn) {
    alert("Hejhej!" + namn);
}

function rubrik() {
    var nyText = "Jag älskar Javascript";

    document.getElementById("andre").innerHTML = nyText;

    console.log(nyText);
}

function nuke() {
    document.write("Evil rabbit was here!");
}

function visaEpost() {
    var hemligEpost = "bat@gmail.com";
    document.getElementById("hemligEpost").innerHTML = hemligEpost;
}

console.log("Allt ok!");
