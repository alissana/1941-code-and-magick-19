'use strict';


var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');
var similarListElement = userDialog.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');
userDialog.querySelector('.setup-similar').classList.remove('hidden');

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES = ['black', 'red', 'blue', 'yellow', 'green'];

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

function getRandElement(arr) {
  var randItem;

  for (var i = 0; i < arr.length; i++) {
    randItem = Math.floor(Math.random() * arr.length);
  }
  return arr[randItem];
}

function getRandomWizzards(countWizards) {
  var wizards = [];

  for (var i = 0; i < countWizards; i++) {
    wizards[i] = {
      name: getRandElement(names),
      coatColor: getRandElement(WIZARD_COAT),
      eyesColor: getRandElement(WIZARD_EYES)
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

var names = getArraySum(WIZARD_NAMES, WIZARD_SURNAME);
copyWizard(4);
