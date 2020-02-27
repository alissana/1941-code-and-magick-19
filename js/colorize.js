'use strict';

(function () {
  window.colorize = function (element, colors, input) {
    element.addEventListener('click', function () {
      var color = window.random.getRendomElement(colors);
      if (element.tagName.toLowerCase() === 'div') {
        element.style.backgroundColor = color;
        input.value = color;
      } else {
        element.style.fill = color;
        input.value = color;
      }
    });
  };
})();
