'use strict';
window.colorizeElement = (function () {

  return function (element, colors, callback) {
    var currentColor = colors[0];

    // одна функция на два события клик и нажатие
    var changeRandomColors = function (event) {
      if (event.type === 'click' || window.keyPress.isActivateEvent(event)) {
        currentColor = window.utils.getRandomElementExcept(colors, currentColor);
        callback(element, currentColor);
      }
    };
    element.addEventListener('click', changeRandomColors);
    element.addEventListener('keydown', changeRandomColors);
  };

})();

