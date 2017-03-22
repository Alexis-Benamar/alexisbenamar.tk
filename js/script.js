$(document).ready(function() {

    $(".button-collapse").sideNav({
        closeOnClick: true
    });
    $('.parallax').parallax();
    $('.scrollspy').scrollSpy();

    $(document).on('click', '.menu-link', function(event){
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top - $('#top').height()
        }, 1000, "easeInOutQuad");
    });

    $("#skills").on( 'scroll', function(){
       console.log('Event Fired');
    });

    var isIconDown = true;
    $('#show-more-btn').click(function() {
        $('#show-more').slideToggle(1000, "easeInOutQuad");
        if(isIconDown){
            $('#show-more-icon').css({
                "transition": ".5s ease",
                "-ms-transform": "rotate(180deg)",
                "-moz-transform": "rotate(180deg)",
                "-webkit-transform": "rotate(180deg)",
                "transform": "rotate(180deg)"
            })
            isIconDown = false;
        } else if (!isIconDown) {
            $('#show-more-icon').css({
                "transition": ".5s ease",
                "-ms-transform": "rotate(0deg)",
                "-moz-transform": "rotate(0deg)",
                "-webkit-transform": "rotate(0deg)",
                "transform": "rotate(0deg)"
            })
            isIconDown = true;
        }
    })

    var options = [
        {
            selector: '#headlines', offset: 200, callback: function() {
                $('#headlines').css({
                    "transition": "1s ease",
                    "opacity": "1",
                    "margin-left": "0"
                });
            }
        },
        {
            selector: '.about-me', offset: 200, callback: function() {
                $('.profile-pic').css({
                    "transition": "1s ease",
                    "opacity": "1"
                });
                $('#about-me-text').css({
                    "transition": "1s ease",
                    "opacity": "1",
                    "margin-left": "0"
                });
            }
        },
        {
            selector: '.skill-section', offset: 200, callback: function() {
                $('.skill-section').css({
                    "transition": "1s ease",
                    "opacity": "1"
                });
                $('.skill-rating').css({
                    "transition": "1.5s ease",
                    "width": "100%"
                });
            }
        },
    ];
    Materialize.scrollFire(options);

});
