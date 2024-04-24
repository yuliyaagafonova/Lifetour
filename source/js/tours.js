const parentContainer = document.querySelector('.swiper-slide');
const childContainer = document.querySelector('.swiper-slide__wrapper');

function checkHeight() {
  const parentHeight = parentContainer.clientHeight;
  const childHeight = childContainer.scrollHeight;

  if (childHeight > parentHeight) {
    childContainer.style.overflowY = 'scroll';
  } else {
    childContainer.style.overflowY = 'hidden';
  }
}

// Вызываем функцию для проверки высоты при загрузке страницы
checkHeight();

// Вызываем функцию для проверки высоты при изменении размеров окна
window.addEventListener('resize', checkHeight);

