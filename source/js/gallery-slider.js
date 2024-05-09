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
      slidesPerView: 3,
    },

    1440: {
      allowTouchMove: false,
      navigation: false,
      slidesPerView: 5,
      spaceBetween: -10,
    }
  }
});
