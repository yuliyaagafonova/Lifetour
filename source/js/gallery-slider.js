import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

new Swiper('.swiper-6', {
  modules: [ Navigation ],

  slidesPerView: 2,
  spaceBetween: 5,
  loop: true,
  navigation: {
    nextEl: '.gallery__button-next',
    prevEl: '.gallery__button-prev',
  },

  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 18,
    },

    1440: {
      slidesPerView: 3,
      spaceBetween: 30,
      allowTouchMove: false,
    }
  }
});
