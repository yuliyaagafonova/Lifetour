import Swiper from 'swiper';
// import { Pagination } from 'swiper/modules';
// import { Autoplay } from 'swiper/modules';

new Swiper('.swiper-2', {
  // modules: [ Pagination, Autoplay ],

  slidesPerView: 1,
  loop: true,

  // autoplay: {
  //   delay: 5000,
  //   disableOnInteraction: true,
  // },

  // pagination: {
  //   el: '.swiper-pagination',
  //   type: 'bullets',
  //   clickable: true,
  // },

  breakpoints: {
    1440: {
      allowTouchMove: false,
    }
  }
});




// import Swiper from 'swiper';
// // import { Navigation } from 'swiper/modules';

// new Swiper('.swiper-2', {
//   // modules: [ Navigation ],

//   slidesPerView: 1,
//   speed: 400,
//   loop: true,
  // navigation: {
  //   nextEl: '.custom-next',
  //   prevEl: '.custom-prev',
  // },

  // breakpoints: {
  //   320: {
  //     slidesPerView: 1,
  //     spaceBetween: 93,
  //     initialSlide: 2,
  //   },
  //   768: {
  //     slidesPerView: 2,
  //     spaceBetween: 40,
  //     navigation: false,
  //   },
  //   1366: {
  //     slidesPerView: 4,
  //     spaceBetween: 40,
  //     simulateTouch: false,
  //     navigation: {
  //       nextEl: '.custom-next',
  //       prevEl: '.custom-prev',
  //     },
  //   }
  // }
// });
