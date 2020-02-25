'use strict';

(function () {
  var MAX_WIZARD_COUNT = 4;
  var userDialog = document.querySelector('.setup');
  var similarListElement = userDialog.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
      .content
      .querySelector('.setup-similar-item');
  userDialog.querySelector('.setup-similar').classList.remove('hidden');

  var wizardCoat = userDialog.querySelector('.setup-wizard .wizard-coat');
  var wizardEyes = userDialog.querySelector('.setup-wizard .wizard-eyes');
  var fireball = userDialog.querySelector('.setup-fireball-wrap');

  function createWizard(wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    return wizardElement;
  }

  function loadHandler(wizards) {
    var fragment = document.createDocumentFragment();
    var unicWizards = [];
    var randItem;

    for (var i = 0; i < MAX_WIZARD_COUNT; i++) {
      randItem = Math.floor(Math.random() * (wizards.length - i));
      unicWizards[i] = wizards[randItem];
      wizards.splice(randItem, 1);
      fragment.appendChild(createWizard(unicWizards[i]));
    }
    similarListElement.appendChild(fragment);
    userDialog.querySelector('.setup-similar').classList.remove('hidden');
  }

  function errorHandler(errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';

    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  }

  window.colorize(wizardEyes, window.constants.WIZARD_COAT);
  window.colorize(wizardCoat, window.constants.WIZARD_COAT);
  window.colorize(fireball, window.constants.FIREBALL);

  window.backend.load(loadHandler, errorHandler);
})();
