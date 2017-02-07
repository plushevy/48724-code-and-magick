'use strict';
// обьект utils
window.utils = {
  'getRandomElement': function (array) {
    return array[Math.floor(Math.random() * array.length)];
  },
  'getRandomElementExcept': function (array, element) {
    var newElement = null;
    while (!newElement || newElement === element) {
      newElement = this.getRandomElement(array);
    }
    return newElement;
  }

};
