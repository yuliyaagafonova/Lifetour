const form = document.querySelector('.form__fields');
const phoneInput = document.querySelector('.form__phone');
const emailInput = document.querySelector('.form__email');


form.addEventListener('submit', function(event) {
  const value = phoneInput.value;
  if(!/d/.test(value)) {
      event.preventDefault();
  }
});

