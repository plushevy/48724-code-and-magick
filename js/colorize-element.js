'use strict';
window.colorizeElement = (function () {

  return function (element, colors, callback) {
    var currentColor = colors[0];

    // одна функция на два события клик и нажатие
    var changeRandomColors = function (event) {
      if (event.type === 'click' || window.keyPress.isActivateEvent(event)) {
        callback(element, window.utils.getRandomElementExcept(colors, currentColor));
      }
    };
    element.addEventListener('click', changeRandomColors);
    element.addEventListener('keydown', changeRandomColors);
  };

})();

