$(function() {
    var Accordion = function(el, multiple) {
        this.el = el || {};

        this.multiple = multiple || false;

        var dropdownlink = this.el.find('.items-menu');
        dropdownlink.on('click', { el: this.el, multiple: this.multiple },
            this.dropdown);
    };

    Accordion.prototype.dropdown = function(e) {
        var $el = e.data.el,
            $this = $(this),

            $next = $this.next();

        $next.slideToggle();
        $this.parent().toggleClass('open');

        if (!e.data.multiple) {

            $el.find('.menu-lower').not($next).slideUp().parent().removeClass('open');
        }
    }

    var accordion = new Accordion($('.menu-item'), false);
})
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 4,
    centeredSlides: false,

    allowTouchMove: true,
    direction: getDirection(),
    speed: 1000,
    loop: true,

    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
        stopOnLast: true,
    },
    mousewheel: {
        invert: false,
    },
    breakpoints: {
        1025: {
            slidesPerView: 4
        },
        769: {
            slidesPerView: 3
        },
        681: {
            slidesPerView: 2
        },
        320: {
            slidesPerView: 1

        }
    }

});

function getDirection() {
    var windowWidth = window.innerWidth;
    var direction = window.innerWidth <= 320 ? 'vertical' : 'horizontal';
    return direction;
}

$('#menu-toggle-input').click(function() {
    $(this).toggleClass('active');
    $('#menu').toggleClass('open');
});