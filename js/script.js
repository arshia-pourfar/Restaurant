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

    // mouse over on search input
    // $('.search-box-icon').mouseover(function () {
    //     if ($(window).width() >= 992) {
    //         // focus search box
    //         $('.search-box').focus();
    //         // open search box
    //         $('.search-box').css({
    //             width: '400px',
    //             padding: '0px 5px',
    //             borderRadius: '0px 18px 18px 0px',
    //         });

    //         $('.search-box-icon').css({ borderRadius: '18px 0px 0px 18px' });
    //         // check not focus search box
    //         $('.search-box').on("blur", function () {
    //             $('.search-box').focus();
    //         });
    //     }
    // });

    // $('.search-box').mouseleave(function () {
    //     closeSearchBox();
    // });

    // get height page with function and add styles to elements
    pageSize();
    $(window).resize(function () {
        pageSize();
    });

    // on page scroll call function and add styles to elements
    // windowScroll();
    // $(window).scroll(function () {
    //     windowScroll();
    // });
    $('.menu').click(function () {
        $(this).toggleClass('open');
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
// function closeSearchBox() {
//     // search box not empty
//     if ($('.search-box').val() == '' && $(window).width() >= 992) {
//         // close search box
//         $('.search-box').css({ width: '0', padding: 0 });
//         $('.search-box-icon').css('border-radius', '50%');
//     }
// }
// function windowScroll() {
//     if ($(window).scrollTop() >= $(window).height() - 100) {
//         $('#navbar').removeClass('navbar-dark bg-gradient');
//         $('#navbar').addClass('navbar-light bg-light shadow-lg');
//         $('.nav-link').css('color', '#000');
//         $('.search-form').css('border', '1px solid #b9b9b9');
//         $('.navbar').attr('style', 'background-image: none');
//         $('.search-box').css('width', '100%');
//     } else {
//         $('#navbar').removeClass('navbar-light bg-light shadow-lg');
//         $('#navbar').addClass('navbar-dark bg-gradient');
//         $('.nav-link').css('color', '#fff');
//         $('.search-form').css('border', 'none');
//         $('.navbar').attr('style', 'background-image: linear-gradient(rgba(26, 25, 25, 0.589), rgba(255, 255, 255, 0)) !important;');
//         $('.search-box').css({ width: 0, padding: 0 });
//         $('.search-box-icon').css({ borderRadius: '50%' });
//     }
// }

function pageSize() {
    if ($(window).height() >= 510 && $(window).height() <= 992) {
        pageHeight = $(window).height();
        $('.header-image').css('height', pageHeight);
    }
    // if ($(window).width() <= 980) {
    //     $('.header-image').css()
    // }
}