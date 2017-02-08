'use strict';
window.colorizeElement = function (element, colors, property) {

  var currentColor = element.style[property];

  // одна функция на два события клик и нажатие
  var changeRandomColors = function (event) {
    if (event.type === 'click' || window.isActivateEvent(event)) {
      element.style[property] = window.utils.getRandomElementExcept(colors, currentColor);
    }
  };

  element.addEventListener('click', changeRandomColors);
  element.addEventListener('keydown', changeRandomColors);
};
