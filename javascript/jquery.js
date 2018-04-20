$(document).ready(function() {
    $("p").hide();

    $("#varning1").click(function(event) {
        $("p").fadeToggle();
    });
});
