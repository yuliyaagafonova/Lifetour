const form = document.querySelector('.form__fields');
const phoneInput = document.querySelector('.form__phone');
const emailInput = document.querySelector('.form__email');
const phoneLabel = document.querySelector('.form__label--phone');
const emailLabel = document.querySelector('.form__label--email');

phoneInput.addEventListener('input', () => {
  if (phoneInput.value !== '') {
    phoneLabel.style.opacity = '0';
  } else {
    phoneLabel.style.opacity = '0.5';
  }
});

emailInput.addEventListener('input', () => {
  if (emailInput.value !== '') {
    emailLabel.style.opacity = '0';
  } else {
    emailLabel.style.opacity = '0.5';
  }
});
