$(function() {
    $("p").hide();

    $("#varning1").on('click', function(event) {
        $("p").fadeToggle();
    });

    // Byt ut all html inuti body med img-taggen
    $("#nuke").on('click', function(event) {
        $('body').html('<img src="images/tsar_bomba.jpg">');
    });

    // Infoga mer text
    $("#visaMer").on('click', function(event) {
        $('p').append('<p>Heil Hitler, jag hade nästan lyckats me\'re<br>' +
        'Heil Hitler, vad jag var stolt när alla skrek det<br>' +
        'Heil Hitler, jag var en bit på väg mot en värld som skulle frunka utan lyx' + 'och<br> överflöd, men det ända den fick möta var förintelse och död');
        $('body').css('background', 'url("images/meduza.jpg")').css('color', '#FFF');
    });
});
