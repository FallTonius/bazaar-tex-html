// import FreeMode module if you use core version of Swiper
import Swiper from 'swiper';

const swiper = new Swiper('.swiper', {
    // install FreeMode module if you use core version of Swiper
    freeMode: {
        enabled: true,
        minimumVelocity: 0.2,
        momentum: false,
    },
});
