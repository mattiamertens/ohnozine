$(document).ready(function(){
    $('.disclaimer').delay(1000).addClass('scale-down-center');
    $('.loader').delay(1200).slideUp(400);
});


// $(window).on('load', function(){
//     $('.loader').fadeOut();    
// });

// $(window).scroll(function (e) {
//     var currentScrollPosition = $(window).scrollTop();
//     console.log(currentScrollPosition);
//     // if (currentScrollPosition > 7050) {
//     //     $('#container').addClass('zoom_in');
//     //     $('#container').css({"width": "100%", 'height': '100%'});
//     // }
// });

const controller = new ScrollMagic.Controller();
const capellino = $('.container');

$('.exp_wrapper').each(function(){
    const wrp_height = $(this).outerHeight();
    new ScrollMagic.Scene({
        duration: wrp_height,
        triggerElement: this,
        triggerHook: 0.04
    })
    // .setPin(this.children[0], {pushfollowers: false})
    .setPin(this)
    .setClassToggle(this.children[2], 'visible')
    .on('end', function(event) {
        $(this.children[2]).addClass('visible');
    })
    // .reverse(false)
    .addTo(controller);
});

$('.hamb_menu').click(function(){
    $('.menu_container').toggleClass('slide_in');

});
$(document).keyup(function(e) {
    if(e.keyCode == 27) {
        $('.menu_container').removeClass('slide_in');
    }
});


var $animationElements = $('.drawing');
var $window = $(window);

function checkIfInView() {

    var windowHeight = $window.height();
    var windowTopPosition = $window.scrollTop();
    var windowBottomPosition = (windowTopPosition + windowHeight);

    $.each($animationElements, function () {
        var $element = $(this);
        var elementHeight = $element.outerHeight();
        var elementTopPosition = $element.offset().top;
        var elementBottomPosition = (elementTopPosition + elementHeight);

//check to see if this current container is within viewport
        if ( (elementBottomPosition >= (windowTopPosition + 200) ) &&
            (elementTopPosition <= (windowBottomPosition - 200) ) ) {
            $element.addClass('catch');
        } else {
            $element.removeClass('catch');
        }
    });
}

$window.on('scroll resize', checkIfInView);
$window.trigger('scroll');