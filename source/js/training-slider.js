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
      loop: true,
    },

    768: {
      loop: false,
      slidesPerView: 3,
      spaceBetween: 18,
    },

    1440: {
      slidesPerView: 4,
      spaceBetween: 20,
      allowTouchMove: false,
    }
  }
});
