import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

new Swiper('.swiper-5', {
  modules: [ Navigation ],

  slidesPerView: 1,
  loop: true,
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
      slidesPerView: 2,
      allowTouchMove: false,
    },

    1440: {
      allowTouchMove: false,
      slidesPerView: 'auto',
      slidesPerGroup: 2,
      initialSlide: 2,
      centeredSlides: true,
    }
  }
});
