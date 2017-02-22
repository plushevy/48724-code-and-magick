'use strict';

(function () {
  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open-icon');
  var setupClose = setup.querySelector('.setup-close');
  var userName = setup.querySelector('.setup-user-name');
  var wizard = document.querySelector('#wizard');
  var wizardCoat = wizard.querySelector('#wizard-coat');
  var wizardEyes = wizard.querySelector('#wizard-eyes');
  var fireball = setup.querySelector('.setup-fireball-wrap');
  var buttonSave = setup.querySelector('.button.setup-submit');
  var DATA_URL = 'https://intensive-javascript-server-myophkugvq.now.sh/code-and-magick/data';
  var wizards;
  var setupSimiliar = document.querySelector('.setup-similar');


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

  var drawNewCloneWizard = function () {

    // массив из 5 случайных
    var makeNewArrayFromRandomEl = function (arr1, maxLength) {
      var arr2 = [];
      while (arr2.length < maxLength) {
        var randElement = window.utils.getRandomElement(arr1);
        if (arr2.indexOf(randElement) === -1) {
          arr2.push(randElement);
        }
      }
      return arr2;
    };

    var newWizards = makeNewArrayFromRandomEl(wizards, 5);
    var setupWizardSvg = document.querySelector('.setup-wizard');

    // клонируем и рисуем копию мага
    var render = function (wizardData) {
      var cloneWizard = setupWizardSvg.cloneNode(true);

      cloneWizard.style.display = 'inline-block';
      cloneWizard.style.position = 'static';
      cloneWizard.setAttribute('title', wizardData.name);

      // меняем id на class
      var changeAttrIdtoClass = function () {
        var arr = cloneWizard.querySelectorAll('[id]');
        arr.forEach(function (el) {
          var value = el.getAttribute('id');
          el.removeAttribute('id');
          el.setAttribute('class', value);
        });
      };
      changeAttrIdtoClass();

      cloneWizard.style.position = 'static';
      cloneWizard.style.width = 50;
      cloneWizard.style.height = 50;
      cloneWizard.querySelector('.wizard-coat').style.fill = wizardData.colorCoat;
      cloneWizard.querySelector('.wizard-eyes').style.fill = wizardData.colorEyes;

      return cloneWizard;
    };

    // вставляем в фрагмент наши 5 клонов
    var fragment = document.createDocumentFragment();
    newWizards.forEach(function (item) {
      fragment.appendChild(render(item));
    });
    setupSimiliar.innerHTML = '';
    setupSimiliar.appendChild(fragment);
  };

  // load()
  var loadAndDrawData = function () {
    window.load(DATA_URL, function (data) {
      wizards = JSON.parse(data);
      drawNewCloneWizard();
    });
  };


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

    // ждем ESC
    var setupKeydownHandler = function (event) {
      if (window.keyPress.isDeactivateEvent(event)) {
        closeOverlay();
      }
    };

    // ждем Enter
    var closeOnSetupKeydown = function (event) {
      if (window.keyPress.isActivateEvent(event)) {
        closeOverlay();
      }
    };


    var closeOnSetupClick = function (event) {
      closeOverlay();
    };

    var openOverlay = function (callback) {
      showOverlay();
      loadAndDrawData();
      setupClose.addEventListener('keydown', closeOnSetupKeydown);
      setupClose.addEventListener('click', closeOnSetupClick);

      onSetupClose = callback;
    };

    return openOverlay;
  })();


  setupOpen.addEventListener('click', window.enableSetup);
  setupOpen.addEventListener('keydown', function (event) {
    if (window.keyPress.isActivateEvent(event)) {
      window.enableSetup(function () {
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
    setTimeout(drawNewCloneWizard, 5000);
  };

  window.colorizeElement(wizardCoat, wizardCoatColors, colorSetter);
  window.colorizeElement(wizardEyes, wizardEyesColors, colorSetter);
  window.colorizeElement(fireball, fireballColors, colorSetter);

  validationSetupForm();
})();

