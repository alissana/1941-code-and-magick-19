'use strict';

window.random = (function () {
  function getRendomElement(arr) {
    var randItem;

    for (var i = 0; i < arr.length; i++) {
      randItem = Math.floor(Math.random() * arr.length);
    }
    return arr[randItem];
  }

  return {
    getRendomElement: getRendomElement
  };
})();
