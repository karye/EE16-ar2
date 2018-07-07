// Deklarera variabler
var namn, födelseDatum;

// Fråga efter namn
namn = prompt("Hej! Vad heter du?");

// Fråga efter födelsedatum
födelseDatum = prompt("När är du född? (år-månad-dag)");

// Använda Date-objektet för att räkna tid
var födelseDate = new Date(födelseDatum);
var idagDate = new Date();
var skillnadDate = idagDate - födelseDate;

var ålder = skillnadDate / (365 * 24 * 60 * 60 * 1000);
ålder = Math.floor(ålder);
alert(namn + ", du är " + ålder + " år gammal");