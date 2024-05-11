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

document.addEventListener('DOMContentLoaded', function() {
  const menuLinks = document.querySelectorAll('.menu-link');

  menuLinks.forEach(function(menuLink) {
      menuLink.addEventListener('click', function(event) {
          event.preventDefault();

          const targetId = menuLink.getAttribute('data-target');
          const targetBlock = document.getElementById(targetId);

          if (targetBlock) {
              targetBlock.scrollIntoView({ behavior: 'smooth' });
              modal.classList.remove('modal-active');
              nav.classList.remove('active');
              overlay.style.display = 'none';
              buttonIcon.querySelector('use').setAttribute('href', '/__spritemap__#sprite-menu');
          }
      });
  });
});
