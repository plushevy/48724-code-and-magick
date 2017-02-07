'use strict';

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var userName = setup.querySelector('.setup-user-name');
var wizard = document.querySelector('#wizard');
var wizardCoat = wizard.querySelector('#wizard-coat');
var wizardEyes = wizard.querySelector('#wizard-eyes');
var fireball = setup.querySelector('.setup-fireball-wrap');
var buttonSave = setup.querySelector('.button.setup-submit');

var ENTER_KEY_CODE = 13;
var ESCAPE_KEY_CODE = 27;

// открытие - закрытие оверлея
var showOverlay = function () {
  setup.classList.remove('invisible');
  setupOpen.setAttribute('aria-pressed', true);
  setupClose.setAttribute('aria-pressed', false);
  buttonSave.setAttribute('aria-pressed', false);

  document.addEventListener('keydown', setupKeydownHandler);
};

var closeOverlay = function () {
  setup.classList.add('invisible');
  setupOpen.setAttribute('aria-pressed', false);
  setupClose.setAttribute('aria-pressed', true);
  buttonSave.setAttribute('aria-pressed', true);

  document.removeEventListener('keydown', setupKeydownHandler);
};

// если было нажатие
var isActivateEvent = function (event) {
  return event.keyCode && event.keyCode === ENTER_KEY_CODE;
};

// закрытие при нажатии на esc
var setupKeydownHandler = function (event) {
  if (event.keyCode === ESCAPE_KEY_CODE) {
    setup.classList.add('invisible');
  }
};

// валидация полей формы имени пользователя
var validationSetupForm = function () {
  userName.required = true;
  userName.maxLength = 50;
};

// получаем случайный элемент массива
var getRandomArrItem = function (arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

// меняем цвет пальто
var changeCoatColors = function () {
  var wizardCoatColors = [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'
  ];

  wizardCoat.style.fill = getRandomArrItem(wizardCoatColors);
};

// меняем цвет глаз
var changeEyesColors = function () {
  var wizardEyesColors = [
    'black',
    'red',
    'blue',
    'green',
    'yellow'
  ];

  wizardEyes.style.fill = getRandomArrItem(wizardEyesColors);
};

// меняем цвет фаербола
var changeFireballColors = function () {
  var fireballColors = [
    '#ee4830',
    '#30a8ee',
    '#5ce6c0',
    '#e848d5',
    '#e6e848'
  ];

  fireball.style.backgroundColor = getRandomArrItem(fireballColors);
};

setupOpen.addEventListener('click', showOverlay);
setupOpen.addEventListener('keydown', function (event) {
  if (isActivateEvent(event)) {
    showOverlay();
  }
});

setupClose.addEventListener('click', closeOverlay);
setupClose.addEventListener('keydown', function (event) {
  if (isActivateEvent(event)) {
    closeOverlay();
  }
});

buttonSave.addEventListener('click', function (event) {
  event.preventDefault();
  closeOverlay();
});
buttonSave.addEventListener('keydown', function (event) {
  if (isActivateEvent(event)) {
    event.preventDefault();
    closeOverlay();
  }
});
wizardCoat.addEventListener('click', changeCoatColors);
wizardEyes.addEventListener('click', changeEyesColors);
fireball.addEventListener('click', changeFireballColors);
validationSetupForm();
