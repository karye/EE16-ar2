//Global variables
var formTag;
var courseList;
var windVar;

function init() {
	formTag = document.getElementById("courseForm");
	document.getElementById("showBtn").onclick = showSelectedCourses;
	courseList = [];
	windVar = null;
} // End init
window.onload = init;

function showSelectedCourses() {
	var inputTags, spanTag, i;
	inputTags = formTag.getElementsByTagName("input");
	courseList.length = 0;
	for (i=0; i<inputTags.length; i++) {
		if (inputTags[i].checked) {
			spanTag = inputTags[i].parentNode.getElementsByTagName("span")[0];
			courseList.push(spanTag.innerHTML);
		}
	}
	newWindow(600,600,"kurslista.htm");
} // End showSelectedCourses

function newWindow(width,height,fileName) {
	var windProperties;
	windProperties = "top=100,left=100,toolbar=no,location=no,status=no,menubar=no,scrollbars=no,resizable=no,width=" + width + ",height=" + height;
	if (windVar != null) if (windVar.closed == false) windVar.close();
	windVar = window.open(fileName,"kurser",windProperties);
} // End newWindow
