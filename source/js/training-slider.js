import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

new Swiper('.swiper-3', {
  modules: [ Navigation ],

  slidesPerView: 1,
  loop: false,
  navigation: {
    nextEl: '.training__button-next',
    prevEl: '.training__button-prev',
  },

  breakpoints: {
    320: {
      initialSlide: 2,
    },

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
