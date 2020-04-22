$(document).ready(function(){
    // alert('daje frehi');
    $('.disclaimer').addClass('scale-down-center')
});

$(window).scroll(function (e) {
    var currentScrollPosition = $(window).scrollTop();
    console.log(currentScrollPosition);
    // if (currentScrollPosition > 7050) {
    //     $('#container').addClass('zoom_in');
    //     $('#container').css({"width": "100%", 'height': '100%'});
    // }
});




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
    // .setPin(this, {pushfollower: false})
    .setClassToggle(this.children[2], 'visible')
    .on('end', function(event) {
        $(this.children[2]).addClass('visible');
    })
    // .on('start', function(event) {
    //     // $(capellino).addClass('no_vis').delay( 1800 ).addClass('move').delay( 400 ).removeClass('no_vis');
    //     $(capellino).animate({
    //         left: '+=100'
    //     })
    // })
    .reverse(false)
    .addTo(controller);

});

// function hat_parallax() {
//     new ScrollMagic.Scene({
//         duration: 9000,
//         triggerElement: '#container',
//         triggerHook: 0
//     })
//     .setPin('#container')
//     .addIndicators()
//     .addTo(controller);
// }

// hat_parallax();

// $('.exp_wrapper').each(function(){
//     const wrp_height = $(this).outerHeight();
//     new ScrollMagic.Scene({
//         duration: wrp_height,
//         triggerElement: this,
//         triggerHook: 0.04
//     })
//     .setClassToggle(this, 'test')
//     .addTo(controller);

// });