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


const swiper = document.querySelector('.swiper-1');
const bullets = swiper.querySelectorAll('.swiper-pagination-bullet');
const slides = swiper.querySelectorAll('.swiper-slide');


bullets.forEach((bullet) => {
  bullet.setAttribute('tabindex', '0');
});

bullets.forEach((bullet, index) => {

  bullet.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.keyCode === 32) {
      showSlide(index);
    }
  });
});

function showSlide(index) {
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.style.display = 'block';
      bullets[i].classList.add('swiper-pagination-bullet-active');
    } else {
      slide.style.display = 'none';
      bullets[i].classList.remove('swiper-pagination-bullet-active');
    }
  });
}
