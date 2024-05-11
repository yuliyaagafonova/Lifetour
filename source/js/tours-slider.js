import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

new Swiper('.swiper-2', {
  modules: [ Navigation ],

  slidesPerView: 1,
  loop: false,

  observer: true,
observeParents: true,

  navigation: {
    nextEl: '.tours__button-next',
    prevEl: '.tours__button-prev',
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
