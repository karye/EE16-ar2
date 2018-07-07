//Global variables
var coursesTag, selectedCourseTag;
var courseList = window.opener.courseList;
var courseIdList = window.opener.courseIdList;

function init() {
	coursesTag = document.getElementById("courses");
	selectedCourseTag = document.getElementById("selectedCourse");
	createCourseList()
} // End init
window.onload = init;

function createCourseList() {
	var courses, i;
	for (i=0; i<courseList.length; i++) {
		coursesTag.innerHTML += "<li id='" + courseIdList[i] + "'>" + courseList[i] + "</li>";
	}
	// Add event handlers
	courses = coursesTag.getElementsByTagName("li");
	for (i=0; i<courses.length; i++) {
		courses[i].onclick = showLiteratureList;
	}
} // End createCourseList

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