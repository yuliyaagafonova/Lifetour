const nav = document.querySelector('.header__nav');
const buttonNav = document.querySelector('.header__button');
const buttonIcon = document.querySelector('.header__button-icon');
const modal = document.querySelector('.page-body');
const overlay = document.querySelector('.page-blackout');

buttonNav.addEventListener('click', () => {
  const currentHref = buttonIcon.querySelector('use').getAttribute('href');
  const newHref = currentHref === '/__spritemap__#sprite-cross' ? '/__spritemap__#sprite-menu' : '/__spritemap__#sprite-cross';
  buttonIcon.querySelector('use').setAttribute('href', newHref);

  modal.classList.toggle('modal-active');
  nav.classList.toggle('active');

  if (overlay.style.display === 'block') {
    overlay.style.display = 'none';
  } else {
    overlay.style.display = 'block';
  }
});
