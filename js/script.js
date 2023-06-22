$(document).ready(function () {
    // typing animation
    (function ($) {
        $.fn.writeText = function (content) {
            var contentArray = content.split(""),
                current = 0,
                elem = this;
            setInterval(function () {
                if (current < contentArray.length) {
                    elem.text(elem.text() + contentArray[current++]);
                }
            }, 20);
        };
    })(jQuery);

    // input text for typing animation
    $("#header-sub-title").writeText("Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque nisi corrupti consequatur dicta,libero unde aperiam magni quas, aspernatur id asperiores iste! Voluptas voluptatum nam consequunturnesciunt eveniet officia iste!");

    // mouse over dropdown(menu)
    $('.dropdown-center').mouseover(function () {
        $('.dropdown-toggle').addClass('show');
        $('.dropdown-menu').addClass('show');
        $('.dropdown-toggle').attr('aria-expanded', true);
    });

    // mouse leave dropdown(menu)
    $('.dropdown-center').mouseout(function () {
        $('.dropdown-toggle').removeClass('show');
        $('.dropdown-menu').removeClass('show');
        $('.dropdown-toggle').attr('aria-expanded', false);
    });

    $('.navbar-container').click(function () {
        windowScroll();
    })

    // get height page with function and add styles to elements
    pageSize();
    $(window).resize(function () {
        pageSize();
        windowScroll();
    });

    // on page scroll call function and add styles to elements
    windowScroll();
    $(window).scroll(function () {
        windowScroll();
    });

    slideShow('right');
});

function slideShow(direction) {
    if (direction == 'right') {
        $('.header-image .slider-container').animate({ scrollLeft: '+=150' }, 1700, function () {
            if ($(this).scrollLeft() <= $('.header-image .slider-container').get(0).scrollWidth - $('.header-image .slider-container').get(0).clientWidth - 1) {
                slideShow('right');
            } else {
                slideShow('left');
            }
        });
    }
    if (direction == 'left') {
        $('.header-image .slider-container').animate({ scrollLeft: '-=150' }, 1700, function () {
            if ($(this).scrollLeft() >= 1) {
                slideShow('left');
            } else {
                slideShow('right');
            }
        });
    }
}

function windowScroll() {
    if ($(window).scrollTop() <= $(window).height() - 75 && $(window).width() <= 992 && $('#navbar-toggler').hasClass('collapsed')) {
        $('#navbar').removeClass('navbar-light bg-light shadow-lg');
        $('#navbar').addClass('navbar-dark bg-gradient');
        $('.nav-link').css('color', '#fff');
        $('.line').css('stroke', '#fff');
        $('.navbar-brand img').attr('src', 'images/logo-light.png');
        $('.cart-user-container a').css('color', '#fff');
        $('.navbar').attr('style', 'background-image: linear-gradient(rgb(0 0 0 / 86%), rgb(0 0 0 / 7%)) !important');
        $('.navbar-container').removeClass('bg-light');
    } else {
        $('#navbar').removeClass('navbar-dark bg-gradient');
        $('#navbar').addClass('navbar-light bg-light shadow-lg');
        $('.nav-link').css('color', '#000');
        $('.line').css('stroke', '#000');
        $('.navbar-brand img').attr('src', 'images/logo.png');
        $('.cart-user-container a').css('color', 'gray');
        $('.navbar').attr('style', 'background-image: none;');
        $('.navbar-container').addClass('bg-light');
    }
}

function pageSize() {
    if ($(window).height() >= 510 && $(window).height() <= 992) {
        pageHeight = $(window).height();
        $('.header-image').css('height', pageHeight);
    }
}