import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

new Swiper('.swiper-4', {
  modules: [ Navigation ],

  slidesPerView: 1,
  loop: false,
  spaceBetween: 30,
  navigation: {
    nextEl: '.reviews__button-next',
    prevEl: '.reviews__button-prev',
  },

  breakpoints: {
    768: {
      slidesPerView: 1,
      spaceBetween: 30,
    },

    1440: {
      spaceBetween: 120,
      allowTouchMove: false,
    }
  }
});
