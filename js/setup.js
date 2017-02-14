'use strict';

(function () {
  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = setup.querySelector('.setup-close');
  var userName = setup.querySelector('.setup-user-name');
  var wizard = document.querySelector('#wizard');
  var wizardCoat = wizard.querySelector('#wizard-coat');
  var wizardEyes = wizard.querySelector('#wizard-eyes');
  var fireball = setup.querySelector('.setup-fireball-wrap');
  var buttonSave = setup.querySelector('.button.setup-submit');

  var wizardCoatColors = [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'
  ];

  var wizardEyesColors = [
    'black',
    'red',
    'blue',
    'green',
    'yellow'
  ];

  var fireballColors = [
    '#ee4830',
    '#30a8ee',
    '#5ce6c0',
    '#e848d5',
    '#e6e848'
  ];

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


  // закрытие при нажатии на esc
  var setupKeydownHandler = function (event) {
    if (window.keyPress.isDeactivateEvent(event)) {
      setup.classList.add('invisible');
    }
  };

  // валидация полей формы имени пользователя
  var validationSetupForm = function () {
    userName.required = true;
    userName.maxLength = 50;
  };

  setupOpen.addEventListener('click', showOverlay);
  setupOpen.addEventListener('keydown', function (event) {
    if (window.keyPress.isActivateEvent(event)) {
      showOverlay();
    }
  });

  setupClose.addEventListener('click', closeOverlay);
  setupClose.addEventListener('keydown', function (event) {
    if (window.keyPress.isActivateEvent(event)) {
      closeOverlay();
    }
  });

  buttonSave.addEventListener('click', function (event) {
    event.preventDefault();
    closeOverlay();
  });
  buttonSave.addEventListener('keydown', function (event) {
    if (window.keyPress.isActivateEvent(event)) {
      event.preventDefault();
      closeOverlay();
    }
  });

  // меняем цвет пальто, глаз и файрбола
  window.colorizeElement(wizardCoat, wizardCoatColors, 'fill');
  window.colorizeElement(wizardEyes, wizardEyesColors, 'fill');
  window.colorizeElement(fireball, fireballColors, 'background');

  validationSetupForm();
})();

