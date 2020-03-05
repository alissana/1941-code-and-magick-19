'use strict';

(function () {
  var COAT_COLORS = [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'
  ];
  var EYES_COLORS = [
    'red',
    'yellow',
    'green',
    'blue',
    'black'
  ];

  var FIREBALL = [
    '#ee4830',
    '#30a8ee',
    '#5ce6c0',
    '#e848d5',
    '#e6e848'
  ];

  var userDialog = document.querySelector('.setup');
  var inputEyes = userDialog.querySelector('input[name=eyes-color]');
  var inputCoat = userDialog.querySelector('input[name=coat-color]');
  var inputFireBall = userDialog.querySelector('input[name=fireball-color]');
  var wizardCoat = userDialog.querySelector('.setup-wizard .wizard-coat');
  var wizardEyes = userDialog.querySelector('.setup-wizard .wizard-eyes');
  var fireball = userDialog.querySelector('.setup-fireball-wrap');

  function colorize(element, colors, input) {
    element.addEventListener('click', function () {
      var color = window.util.getRandomElement(colors);
      if (element.tagName.toLowerCase() === 'div') {
        element.style.backgroundColor = color;
        input.value = color;
      } else {
        element.style.fill = color;
        input.value = color;
      }
    });
  }
  colorize(wizardEyes, EYES_COLORS, inputEyes);
  colorize(wizardCoat, COAT_COLORS, inputCoat);
  colorize(fireball, FIREBALL, inputFireBall);

  var wizard = {
    onEyesChange: function () {},
    onCoatChange: function () {}
  };

  wizardCoat.addEventListener('click', function () {
    var newColor = window.util.getRandomElement(COAT_COLORS);
    wizardCoat.style.fill = newColor;
    wizard.onCoatChange(newColor);
  });

  wizardEyes.addEventListener('click', function () {
    var newColor = window.util.getRandomElement(EYES_COLORS);
    wizardEyes.style.fill = newColor;
    wizard.onEyesChange(newColor);
  });

  window.wizard = wizard;
})();
