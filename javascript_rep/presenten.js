$(function() {
    // Slumpa fram ett tal mellan 1 och 9
    var present = Math.floor(Math.random() * 9 + 1);
    console.log(present);

    $('.ruta').on('click', function() {

        // Hämta siffran i rutan
        var texten = $(this).text();
        console.log(texten);

        if (present == texten)
            $(this).css('background', 'url("images/quino-al-638426-unsplash.jpg")');
    });

    
});
