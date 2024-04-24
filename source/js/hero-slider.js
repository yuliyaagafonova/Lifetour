import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';

new Swiper('.swiper-1', {
  modules: [ Pagination ],

  slidesPerView: 1,
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },

  breakpoints: {
    1440: {
      allowTouchMove: false,
    }
  }
});
