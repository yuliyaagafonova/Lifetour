import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import { Autoplay } from 'swiper/modules';

new Swiper('.swiper-1', {
  modules: [ Pagination, Autoplay ],

  slidesPerView: 1,
  loop: true,

  // autoplay: {
  //   delay: 5000,
  //   disableOnInteraction: true,
  // },

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
