'use strict';

window.keyPress = (function () {
  var ENTER_KEY_CODE = 13;
  var ESCAPE_KEY_CODE = 27;

  var isKeyboardEvent = function (event) {
    return typeof event.keyCode !== 'undefined';
  };

  // если было нажатие
  return {
    isDeactivateEvent: function (event) {
      return isKeyboardEvent(event) && event.keyCode === ESCAPE_KEY_CODE;
    },

    isActivateEvent: function (event) {
      return isKeyboardEvent(event) && event.keyCode === ENTER_KEY_CODE;
    },
    isKeyboardEvent: isKeyboardEvent
  };
})();
