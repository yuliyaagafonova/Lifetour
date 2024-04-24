import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

new Swiper('.swiper-2', {
  modules: [ Navigation ],

  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: '.custom-next',
    prevEl: '.custom-prev',
  },

  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 18,
    },

    1440: {
      allowTouchMove: false,
    }
  }
});
