'use strict';
window.load = (function () {

  var loadXhr = null;

  var loadHandler = function () {
    if (typeof loadXhr === 'function') {
      loadXhr(event.target.response);
    }
  };

  return function (dataUrl, onLoad) {
    var xhr = new XMLHttpRequest();
    loadXhr = onLoad;

    xhr.addEventListener('load', loadHandler);

    xhr.open('GET', dataUrl);
    xhr.send();
  };
})();
