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


  // валидация полей формы имени пользователя
  var validationSetupForm = function () {
    userName.required = true;
    userName.maxLength = 50;
  };

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

  window.enableSetup = (function () {
    var onSetupClose = null;

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

      if (typeof onSetupClose === 'function') {
        onSetupClose();
      }
    };

    var setupKeydownHandler = function (event) {
      if (window.keyPress.isDeactivateEvent(event)) {
        setup.classList.add('invisible');
      }
    };

    var onSetupClick = function (event) {
      closeOverlay();
    };

    var onSetupKeydown = function (event) {
      if (window.keyPress.isActivateEvent(event)) {
        closeOverlay();
      }
    };

    var openOverlay = function (callback) {
      showOverlay();
      setupClose.addEventListener('keydown', onSetupKeydown);
      setupClose.addEventListener('click', onSetupClick);

      onSetupClose = callback;
    };

    return {
      openOverlay: openOverlay
    };
  })();


  setupOpen.addEventListener('click', window.enableSetup.openOverlay);
  setupOpen.addEventListener('keydown', function (event) {
    if (window.keyPress.isActivateEvent(event)) {
      window.enableSetup.openOverlay(function () {
        setupOpen.focus();
      });
    }
  });


  var colorSetter = function (element, color) {
    if (element.tagName === 'g') {
      element.style.fill = color;
    } else {
      element.style.background = color;
    }
  };

  window.colorizeElement(wizardCoat, wizardCoatColors, colorSetter);
  window.colorizeElement(wizardEyes, wizardEyesColors, colorSetter);
  window.colorizeElement(fireball, fireballColors, colorSetter);

  validationSetupForm();
})();

