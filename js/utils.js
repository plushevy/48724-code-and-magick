'use strict';
// обьект utils
window.utils = (function () {

  return {
    'getRandomElement': function (array) {
      return array[Math.floor(Math.random() * array.length)];
    },
    'getRandomElementExcept': function (array, element) {
      var newElement = element;
      while (newElement === element) {
        newElement = this.getRandomElement(array);
      }
      return newElement;
    }
  };
})();
