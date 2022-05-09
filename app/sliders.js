import Swiper, { Navigation, Pagination } from 'swiper';
const breakpoint = window.matchMedia( '(min-width: 768px)' );
var mySwiper;
const breakpointChecker = function() {
    if ( breakpoint.matches === true ) {
        if ( mySwiper !== undefined ) mySwiper.destroy( true, true );
        return;
    } else if ( breakpoint.matches === false ) {
        return enableSwiper();
    }
};

const enableSwiper = function() {
    mySwiper = new Swiper ('.swiper-container', {
        slidesPerView: 'auto',
        spaceBetween: 16,
        centeredSlides: false,
        grabCursor: true,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
};
breakpoint.addListener(breakpointChecker);
breakpointChecker();