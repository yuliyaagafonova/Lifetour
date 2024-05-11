import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';

new Swiper('.swiper-1', {
  modules: [ Pagination ],
  slidesPerView: 1,
  loop: true,
  watchSlidesProgress: true,

  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },

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


// const bullets = swiper.querySelectorAll('.swiper-pagination-bullet');
// const slides = swiper.querySelectorAll('.swiper-slide');

// bullets.forEach((bullet) => {
//   bullet.setAttribute('tabindex', '0');
// });

const swiper = document.querySelector('.swiper-1');
const bullets = swiper.querySelectorAll('.swiper-pagination-bullet');
const slides = swiper.querySelectorAll('.swiper-slide');


bullets.forEach((bullet, index) => {
  bullet.setAttribute('tabindex', '0');
  bullet.setAttribute('data-index', 'bullet[i]');


var tabs = document.querySelectorAll('.tab');
tabs.forEach(function(tab) {
  tab.addEventListener('click', function() {
    var index = parseInt(this.getAttribute('data-index'));
    swiper.slideTo(index);
  });
});
});
