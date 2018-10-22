/* $(function() {
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
 */

/* 
 * Klicka för att hitta den gömda bilden.
 */

/* När webbsidan laddtas klart kör start() */
window.onload = start;

/* Start-delen */
function start() {

    /* Lyssna på klick på hela sidan */
    const elementKontainer = document.querySelector('.grid');
    elementKontainer.addEventListener('click', klick);

    /* Vad händer när man klickat på sidan? */
    function klick(e) {
        console.log('Nu har vi en klick event på ' + e.target.nodeName);

        /* Har man klickat på en cell (td) */
        if (e.target.className === 'ruta') {
            tittaEfter(e.target);
        }
    }

    /* Slumpa fram en position */
    var slumptal = Math.ceil(Math.random() * 9 - 1);
    
    /* Funktion för att göra fotot suddigt */
    function tittaEfter(div) {
        console.log('tittaEfter');
        
        /* Visa dolda bilden */
        div.className.add('pumpa');
    }
}