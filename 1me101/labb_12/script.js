//Global variables
var formTag, extra1Tag;

function init() {
	formTag = document.getElementById("bookingForm");
	extra1Tag = document.getElementById("extra1");
	formTag.reset();
	formTag.extra[1].disabled = false;
	extra1Tag.style.color = "#000";
} // End init
window.onload = init;

function familyRoomSelected() {
	formTag.persons.disabled = false;
	formTag.extra[1].disabled = true;
	extra1Tag.style.color = "#999";
} // End familyRoomSelected

function familyRoomNotSelected() {
	formTag.persons.disabled = true;
	formTag.extra[1].disabled = false;
	extra1Tag.style.color = "#000";
} // End familyRoomNotSelected

function checkForm() {
	var name, town, zipcode, dblSpacePos, i;
	// Delete double spaces in the name
	name = formTag.name.value;
	while (name.indexOf("  ") != -1) {
		dblSpacePos = name.indexOf("  ");
		name = name.substring(0,dblSpacePos) + name.substring(dblSpacePos+1);
	}
	formTag.name.value = name;
	// Convert the toen to uppercase letters
	town = formTag.town.value;
	town = town.toUpperCase();
	formTag.town.value = town;
	// Check that the zipcode consists of five digits
	zipcode = formTag.zipcode.value;
	if (zipcode.length != 5) {
		alert("Postnumret måste bestå av fem siffror");
		return false;
	}
	for (i=0; i<zipcode.length; i++) {
		if ("0123456789".indexOf(zipcode.charAt(i)) == -1) {
			alert("Postnumret får endast innehålla siffror");
			return false;
		}
	}
	// If we came here, everything is OK. We return true, so that the form can be submitted
	return true;
} // End checkForm
