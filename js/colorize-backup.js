'use strict';
window.colorizeElement = (function () {

  return function (element, colors, property) {
    var currentColor = element.style[property];
    // одна функция на два события клик и нажатие
    var changeRandomColors = function (event) {
      if (event.type === 'click' || window.keyPress.isActivateEvent(event)) {
        element.style[property] = window.utils.getRandomElementExcept(colors, currentColor);
      }
    };
    element.addEventListener('click', changeRandomColors);
    element.addEventListener('keydown', changeRandomColors);
  };

})();
