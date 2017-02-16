'use strict';
window.colorizeElement = (function () {

  return function (element, colors, property, callback) {

    if (typeof callback === 'function') {
      callback(element, colors, property);
    }
  };

})();
