'use strict';
window.colorizeElement = (function () {

  return function (element, colors, property, callback) {

    var currentColor = element.style[property];
    var changeRandomColors = function (event) {
      if (event.type === 'click' || window.keyPress.isActivateEvent(event)) {
        element.style[property] = window.utils.getRandomElementExcept(colors, currentColor);
      }
    };

    if (typeof callback === 'function') {
      callback(element, changeRandomColors);
    }
  };

})();
