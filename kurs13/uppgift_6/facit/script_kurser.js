//Global variables
var formTag;
var courseList;
var courseIdList;
var windVar;

function init() {
	formTag = document.getElementById("courseForm");
	document.getElementById("showBtn").onclick = showSelectedCourses;
	courseList = [];
	courseIdList = [];
	windVar = null;
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
		HTMLcode += "<label><input type='checkbox'> <span id='" + codes[i].firstChild.data + "'>" +
					codes[i].firstChild.data + " " + titles[i].firstChild.data + "</span></label>";
	}
	formTag.innerHTML = HTMLcode;
} // End getCourses

function showSelectedCourses() {
	var inputTags, spanTag, i;
	inputTags = formTag.getElementsByTagName("input");
	courseList.length = 0;
	courseIdList.length = 0;
	for (i=0; i<inputTags.length; i++) {
		if (inputTags[i].checked) {
			spanTag = inputTags[i].parentNode.getElementsByTagName("span")[0];
			courseList.push(spanTag.innerHTML);
			courseIdList.push(spanTag.id);
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
