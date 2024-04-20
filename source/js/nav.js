const nav = document.querySelector('.header__nav');
const buttonNav = document.querySelector('.header__button');
const buttonIcon = document.querySelector('.header__button-icon');

buttonNav.onclick = function () {
  nav.classList.toggle('active');
  if (buttonIcon.href = '/__spritemap#sprite-menu') {
    buttonIcon.href = '/__spritemap#sprite-cross';
  } else {
    buttonIcon.href = '/__spritemap#sprite-menu';
  }
};
// оверлей на все + меняется кнопка + открывается меню все в одной функции
