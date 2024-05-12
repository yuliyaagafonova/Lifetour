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

form.addEventListener("submit", function(event) {
  // Получаем значение из поля ввода телефонного номера
  const phoneNumber = phoneInput.value;

  // Создаем регулярное выражение, которое соответствует только цифрам
  const pattern = /^\d+$/;

  // Проверяем телефонный номер с помощью регулярного выражения
  if (!pattern.test(phoneNumber)) {
      // Если телефонный номер содержит не только цифры, предотвращаем отправку формы
      event.preventDefault();
      phoneInput.style.outline = "1px solid #ff121f";
  }
});

phoneInput.addEventListener("input", function() {
  this.style.outline = "none";
});


form.addEventListener("submit", function(event) {

  const email = emailInput.value;
  const isMailRu = email.endsWith("@mail.ru");
  const isRf = email.endsWith(".рф");

  if (!isMailRu && !isRf) {

      event.preventDefault();
      emailInput.style.outline = "1px solid #ff121f";
  }
});

emailInput.addEventListener("input", function() {
  this.style.outline = "none";
});

