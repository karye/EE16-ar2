//Global variables
var coursesTag, selectedCourseTag;

function init() {
	coursesTag = document.getElementById("courses");
	selectedCourseTag = document.getElementById("selectedCourse");
	requestCourses();
} // End init
window.onload = init;

function requestCourses() {
	var request;
	if (XMLHttpRequest) { request = new XMLHttpRequest(); }
	else if (ActiveXObject) {request = new ActiveXObject("Microsoft.XMLHTTP"); }
	else {return false; }
	request.open("GET","courses/courselist.xml",true);
	request.send(null);
	request.onreadystatechange = function () {
		if ( (request.readyState == 4) && (request.status == 200) ) getCourses(request.responseXML);
	};
} // End requestCourses

function getCourses(XMLcode) {
	var codes, titles, HTMLcode, i;
	codes = XMLcode.getElementsByTagName("code");
	titles = XMLcode.getElementsByTagName("title");
	HTMLcode = "";
	// Add tags for the courses
	for (i=0; i<codes.length; i++) {
		HTMLcode += "<li id='" + codes[i].firstChild.data + "'>" + codes[i].firstChild.data + " " + titles[i].firstChild.data + "</p>";
	}
	coursesTag.innerHTML = HTMLcode;
	// Add event handlers
	courses = coursesTag.getElementsByTagName("li");
	for (i=0; i<courses.length; i++) {
		courses[i].onclick = showLiteratureList;
	}
} // End getCourses

function showLiteratureList() {
	requestList(this.id);
} // End showLiteratureList

function requestList(courseCode) {
	var request;
	if (XMLHttpRequest) { request = new XMLHttpRequest(); }
	else if (ActiveXObject) {request = new ActiveXObject("Microsoft.XMLHTTP"); }
	else {return false; }
	request.open("GET","courses/literature" + courseCode + ".xml",true);
	request.send(null);
	request.onreadystatechange = function () {
		if ( (request.readyState == 4) && (request.status == 200) ) getList(request.responseXML);
	};
} // End requestList

function getList(XMLcode) {
	var code, title, references, i, a, firstname, lastname, initial;
	code = XMLcode.getElementsByTagName("code")[0];
	title = XMLcode.getElementsByTagName("title")[0];
	selectedCourseTag.innerHTML = "<h3>" + code.firstChild.data + " " + title.firstChild.data + "</h3>";
	references = XMLcode.getElementsByTagName("reference");
	for (i=0; i<references.length; i++) {
		selectedCourseTag.innerHTML += "<p>";
		authors = references[i].getElementsByTagName("author");
		for (a=0; a<authors.length; a++) {
			firstname = authors[a].getElementsByTagName("firstname")[0];
			lastname = authors[a].getElementsByTagName("lastname")[0];
			initial = firstname.getAttribute("initial");
			selectedCourseTag.innerHTML += lastname.firstChild.data + ", " + initial + "; ";
		}
		title = references[i].getElementsByTagName("title")[0];
		selectedCourseTag.innerHTML += title.firstChild.data + "</p>";
	}
} // End getList