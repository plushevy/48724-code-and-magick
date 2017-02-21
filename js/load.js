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

    var errorHandler = function () {
      alert('Something wrong');
    };

    xhr.addEventListener('load', function (event) {
      if ((event.target.status >= 200) && (event.target.status < 400)) {
        loadHandler();
      } else {
        errorHandler();
      }
    });

    xhr.open('GET', dataUrl);
    xhr.send();
  };
})();
