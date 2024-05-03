import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

new Swiper('.swiper-5', {
  modules: [ Navigation ],

  slidesPerView: 1,
  loop: false,
  spaceBetween: 30,
  navigation: {
    nextEl: '.adv__button-next',
    prevEl: '.adv__button-prev',
  },

  breakpoints: {
    320: {
      allowTouchMove: false,
    },

    768: {
      slidesPerView: 'auto',
      spaceBetween: 30,
    },

    1440: {
      spaceBetween: 120,
      allowTouchMove: false,
      slidesPerView: 'auto',
    }
  }
});
