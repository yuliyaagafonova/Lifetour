import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';

new Swiper('.swiper-1', {
  modules: [ Pagination ],

  slidesPerView: 1,
  // speed: 400,
  // loop: true,
  autoplay: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },

  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  },

  breakpoints: {
    1440: {
      allowTouchMove: false,
    }
  }
});
