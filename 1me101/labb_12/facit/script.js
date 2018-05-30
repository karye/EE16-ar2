//Global variables
var formTag, extra1Tag;
var totalCostTag;
var customerTags;

function init() {
	formTag = document.getElementById("bookingForm");
	extra1Tag = document.getElementById("extra1");
	totalCostTag = document.getElementById("totalCost");
	customerTags = document.getElementById("customerdata").getElementsByTagName("input");
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
	var name, town, zipcode, dblSpacePos, i, nameArr, nameArr2;
	// Delete double spaces in the name
	name = formTag.name.value;
	while (name.indexOf("  ") != -1) {
		dblSpacePos = name.indexOf("  ");
		name = name.substring(0,dblSpacePos) + name.substring(dblSpacePos+1);
	}
	nameArr = name.split(" ");
	for (i=0; i<nameArr.length; i++) {
		if (nameArr[i].indexOf("-") != -1) {
			nameArr2 = nameArr[i].split("-");
			nameArr[i] = initialUpperCase(nameArr2[0]) + "-" + initialUpperCase(nameArr2[1]);
		}
		else nameArr[i] = initialUpperCase(nameArr[i]);
	}
	name = nameArr.join(" ");
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
	// Check that the text fields are not empty
	for (i=0; i<customerTags.length; i++) {
		if (customerTags[i].value == "") {
			alert("Alla textfält måste vara ifyllda");
			return false;
		}
	}	
	// If we came here, everything is OK. We return true, so that the form can be submitted
	return true;
} // End checkForm

function initialUpperCase(word) {
	word = word.charAt(0).toUpperCase() + word.substring(1).toLowerCase();
	return word;
} // End initialUpperCase

function calculateCost() {
	var nightOption, nrOfNights, roomPrice, totalCost, i, theValue;
	nightOption = formTag.nights.selectedIndex;
	nrOfNights = Number(formTag.nights.options[nightOption].value);
	for (i=0; i<formTag.room.length; i++) {
		if (formTag.room[i].checked) {
			theValue = formTag.room[i].value;
			roomPrice = Number(theValue.split(",")[1]);
			break;
		}
	}
	for (i=0; i<formTag.extra.length; i++) {
		if (formTag.extra[i].checked && !formTag.extra[i].disabled) {
			theValue = formTag.extra[i].value;
			roomPrice += Number(theValue.split(",")[1]);
		}
	}
	totalCost = nrOfNights * roomPrice;
	totalCostTag.innerHTML = totalCost + " kr";
} // End calculateCost
