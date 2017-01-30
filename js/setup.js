'use strict';

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var userName = setup.querySelector('.setup-user-name');
var wizard = document.querySelector('#wizard');
var wizardCoat = wizard.querySelector('#wizard-coat');
var wizardEyes = wizard.querySelector('#wizard-eyes');
var fireball = wizard.querySelector('#setup-fireball-wrap');

// открытие - закрытие оверлея
var showOverlay = function () {
  setup.classList.remove('invisible');
};
var closeOverlay = function () {
  setup.classList.add('invisible');
};

// валидация имени пользователя
userName.required = true;
userName.maxLength = 50;

// получаем случайный элемент массива
var getRandomArrItem = function (arr) {
  return arr[
    Math.floor(Math.random * arr.length)
  ];
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

  fireball.style.fill = getRandomArrItem(fireballColors);
};

setupOpen.addEventListener('click', showOverlay);
setupClose.addEventListener('click', closeOverlay);
wizardCoat.addEventListener('click', changeCoatColors);
wizardEyes.addEventListener('click', changeEyesColors);
fireball.addEventListener('click', changeFireballColors);
