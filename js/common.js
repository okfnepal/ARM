// Sticky Header


        $('.main-header').addClass('sticky');

// Mobile Navigation
$('.mobile-toggle').click(function() {
    if ($('.main-header').hasClass('open-nav')) {
        $('.main-header').removeClass('open-nav');
    } else {
        $('.main-header').addClass('open-nav');
    }
});

$('.main-header li a').click(function() {
    if ($('.main-header').hasClass('open-nav')) {
        $('.navigation').removeClass('open-nav');
        $('.main-header').removeClass('open-nav');
    }
});

// navigation scroll lijepo radi materem
$('nav a').click(function(event) {
    var id = $(this).attr("href");
    var offset = 70;
    var target = $(id).offset().top - offset;
    $('html, body').animate({
        scrollTop: target
    }, 500);
    event.preventDefault();
});