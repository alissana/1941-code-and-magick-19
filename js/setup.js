'use strict';

(function () {
  var userDialog = document.querySelector('.setup');
  var similarListElement = userDialog.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
      .content
      .querySelector('.setup-similar-item');
  userDialog.querySelector('.setup-similar').classList.remove('hidden');

  var wizardCoat = userDialog.querySelector('.setup-wizard .wizard-coat');
  var wizardEyes = userDialog.querySelector('.setup-wizard .wizard-eyes');
  var fireball = userDialog.querySelector('.setup-fireball-wrap');

  var names = getArraySum(window.constants.WIZARD_NAMES, window.constants.WIZARD_SURNAME);
  copyWizard(4);

  function getArraySum(firstArr, secondArr) {
    var length = (firstArr.length !== secondArr.length) ? Math.min(firstArr.length, secondArr.length) : firstArr.length;
    var sumArr = [];
    var firstRand;
    var secondRand;

    for (var i = 0; i < length; i++) {
      firstRand = Math.floor(Math.random() * length);
      secondRand = Math.floor(Math.random() * length);
      sumArr[i] = firstArr[firstRand] + ' ' + secondArr[secondRand];
    }
    return sumArr;
  }

  function getRandomWizzards(countWizards) {
    var wizards = [];

    for (var i = 0; i < countWizards; i++) {
      wizards[i] = {
        name: window.random.getRendomElement(names),
        coatColor: window.random.getRendomElement(window.constants.WIZARD_COAT),
        eyesColor: window.random.getRendomElement(window.constants.WIZARD_EYES)
      };
    }
    return wizards;
  }

  function createWizard(wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

    return wizardElement;
  }

  function copyWizard(countWizards) {
    var wizards = getRandomWizzards(countWizards);
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < wizards.length; i++) {
      fragment.appendChild(createWizard(wizards[i]));
    }

    similarListElement.appendChild(fragment);
  }

  window.colorize(wizardEyes, window.constants.WIZARD_COAT);
  window.colorize(wizardCoat, window.constants.WIZARD_COAT);
  window.colorize(fireball, window.constants.FIREBALL);
})();
