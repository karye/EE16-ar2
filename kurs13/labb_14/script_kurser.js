//Global variables
var formTag;
var windVar;

function init() {
    formTag = document.getElementById("courseForm");
    document.getElementById("showBtn").onclick = showSelectedCourses;
    windVar = null;
} // End init
window.onload = init;

function showSelectedCourses() {

} // End showSelectedCourses

function newWindow(width,height,fileName) {
    var windProperties;
    windProperties = "top=100,left=100,toolbar=no,location=no,status=no,menubar=no,scrollbars=no,resizable=no,width=" + width + ",height=" + height;
    if (windVar != null) if (windVar.closed == false) windVar.close();
    windVar = window.open(fileName,"kurser",windProperties);
} // End newWindow
