// JavaScript

// Globala variabler
// Ord och bilder
	var allPics;			// Array med alla ord
	var allDescription;		// Array med kort beskrivning av alla ord/bilder
	var picsIx4;			// Array med nummer (index till allPics) för de fyra bilder som ska visas
	var words8;				// Array med de åtta ord som ska finnas i listan (sorteras i bokstavsordning)
// Element i gränssnittet
	var startGameBtn;		// Referenser till start-knappen (button)
	var checkAnswersBtn;	// Referens till knappen för att kontrollera svar (button)
	var wordListElem;		// Referens till listan med de ord som kan dras (ul-elemntet)
	var	wordElems;			// Array med referenser till elementen för de åtta orden (li-elemnten)
	var picsElems;			// Array med referenser till elementen med de fyra bilderna (img)
	var userAnswerElems;	// Array med referenser till elementen för orden intill bilderna (span)
	var correctAnswerElems;	// Array med referenser till element för rätta svar (span)
	var largePictElem;		// Referens till elementet med den stora bilden (img)
	var msgElem; 			// Referens till div-element för utskrift av meddelanden (div)
// Element vid drag and drop
	var dragWordElem;		// Det ord som dras (kan vara både li och span)

// Funktion som körs då hela webbsidan är inladdad, dvs då all HTML-kod är utförd.
// Initiering av globala variabler samt händelsehanterare.
function init() {
	var i;	// Loopvariabel
	// Ord och bilder
		allPics = ["Borgholm","Gränna","Gävle","Göteborg","Halmstad","Jönköping","Kalmar","Karlskrona","Kiruna","Ljungby","Malmö","Norrköping","Skara","Stockholm","Sundsvall","Umeå","Visby","Västervik","Växjö","Örebro"];
		allDescription = [" - Kyrkan"," - Storgatan"," - Julbock"," - Operan"," - Picassoparken"," - Sofiakyrkan"," - Domkyrkan"," - Rosenbom"," - Stadshus"," - Garvaren"," - Stortorget"," - Spårvagn"," - Domkyrka"," - Rosenbad"," - Hotell Knaust"," - Storgatan"," - Stadsmur"," - Hamnen"," - Teater"," - Svampen"];
	// Referenser till element i gränssnittet
		
	// Lägg på händelsehanterare
		
	// Aktivera/inaktivera knappar
		
} // End init
addListener(window,"load",init); // Se till att init aktiveras då sidan är inladdad

// Initiera spelet. Välj ord slumpmässigt. Visa ord och bilder.
function startGame() {
	
} // End startGame

// Lägg på eller ta bort händelsehanterare på de element som ska kunna dras
// samt händelsehanterare för element där man kan släppa orden (drop).
function eventsForDrag(drag) {
	
} // End eventsForDrag

// Visa förstorad bild
function showLargePict() {
	
} // End showLargePict

// Dölj förstorad bild
function hideLargePict() {
	
} // End hideLargePict

// Ett ord börjar dras.
function dragStarted(e) {
	
} // End dragStarted

// Hantera händelserna dragover och drop, då ett ord släpps över en bild
// Endast drop används i detta exempel
function wordOverPict(e) {
	
} // End wordOverPict

// Hantera händelserna dragover och drop, då ett ord släpps över listan med ord
// Endast drop används i detta exempel
function wordOverList(e) {
	
} // End wordOverList

// Flytta tillbaks ordet till listan
function moveBackToList(word) { // word är det ord som ska flyttas tillbaks
	
} // End moveBackToList

// Kontrollera användarens svar och visa de korrekta svaren
function checkAnswers() {
	
} // End checkAnswers