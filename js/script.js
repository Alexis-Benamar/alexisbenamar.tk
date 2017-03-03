$(document).ready(function() {

    $(".button-collapse").sideNav();
    $('.parallax').parallax();
    $('.scrollspy').scrollSpy();

    $(document).on('click', 'a', function(event){
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top
        }, 750);
    });

});
