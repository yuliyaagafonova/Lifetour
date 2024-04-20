const nav = document.querySelector('.header__nav');
const buttonNav = document.querySelector('.header__button');
const buttonIcon = document.querySelector('.header__button-icon');

buttonNav.onclick = function () {
  nav.classList.toggle('active');
  buttonIcon.src = '/__spritemap#sprite-logo-header';
}
