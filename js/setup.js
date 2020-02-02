'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES = ['black', 'red', 'blue', 'yellow', 'green'];

function arraySum(firstArr, secondArr) {
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

var names = arraySum(WIZARD_NAMES, WIZARD_SURNAME);

function randElement(arr) {
  var randItem;

  for (var i = 0; i < arr.length; i++) {
    randItem = Math.floor(Math.random() * arr.length);
  }
  return arr[randItem];
}

function randArray(count) {
  var wizards = [];

  for (i = 0; i < count; i++) {
    wizards[i] = {
      name: randElement(names),
      coatColor: randElement(WIZARD_COAT),
      eyesColor: randElement(WIZARD_EYES)
    };
  }
  return wizards;
}

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = userDialog.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();
var wizards = randArray(4);

for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}

similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');
