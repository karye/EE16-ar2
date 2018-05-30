//Global variables
var coursesTag;
var courseList = window.opener.courseList;

function init() {
	coursesTag = document.getElementById("courses");
	createCourseList()
} // End init
window.onload = init;

function createCourseList() {
	var i;
	for (i=0; i<courseList.length; i++) {
		coursesTag.innerHTML += "<li>" + courseList[i] + "</li>";
	}
} // End createCourseList