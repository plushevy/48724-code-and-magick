'use strict';
window.colorizeElement = function (element, colors, property) {
  var currentColor = colors[0];

  element.addEventListener('click', function () {
    var newColor = null;
    while (!newColor || newColor === currentColor) {
      newColor = window.utils.getRandomElementExcept(colors, currentColor);
    }
    currentColor = newColor;
    element.style[property] = currentColor;
  });


  element.addEventListener('keydown', function (event) {
    var newColor = null;
    while (!newColor || newColor === currentColor) {
      newColor = window.utils.getRandomElementExcept(colors, currentColor);
    }
    currentColor = newColor;
    element.style[property] = currentColor;
  });

  // element.addEventListener('click', function () {
  //   element.style[property] = window.utils.getRandomElementExcept(colors, currentColor);
  // });

  // element.addEventListener('keydown', function (event) {
  //   if (window.isActivateEvent(event)) {
  //     element.style[property] = window.utils.getRandomElementExcept(colors, currentColor);
  //   }
  // });
};
