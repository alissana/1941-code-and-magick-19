'use strict';

var ESC_KEY = 'Escape';
var ENTER_KEY = 'Enter';
var MIN_NAME_LENGTH = 2;

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

var userDialog = document.querySelector('.setup');

var similarListElement = userDialog.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');
userDialog.querySelector('.setup-similar').classList.remove('hidden');

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');

var wizardCoat = setup.querySelector('.setup-wizard .wizard-coat');
var inputCoat = setup.querySelector('.setup-player input[name = coat-color]');

var wizardEyes = setup.querySelector('.setup-wizard .wizard-eyes');
var inputEyes = setup.querySelector('.setup-player input[name = eyes-color]');

var fireball = setup.querySelector('.setup-fireball-wrap');
var inputFireballColor = fireball.querySelector('input[name = fireball-color]');

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

// Обработчики событий

var onPopupEscPress = function (evt) {
  if (evt.key === ESC_KEY && evt.target !== document.querySelector('.setup-user-name')) {
    closePopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    closePopup();
  }
});

var userNameInput = setup.querySelector('.setup-user-name');

userNameInput.addEventListener('invalid', function (evt) {
  if (userNameInput.validity.tooShort) {
    userNameInput.setCustomValidity('Имя должно состоять минимум из 2-х символов');
  } else if (userNameInput.validity.tooLong) {
    userNameInput.setCustomValidity('Имя не должно превышать 25-ти символов');
  } else if (userNameInput.validity.valueMissing) {
    userNameInput.setCustomValidity('Обязательное поле');
  } else {
    userNameInput.setCustomValidity('');
  }
});

userNameInput.addEventListener('input', function (evt) {
  var target = evt.target;

  if (target.value.length < MIN_NAME_LENGTH) {
    target.setCustomValidity('Имя должно состоять минимум из ' + MIN_NAME_LENGTH + '-х символов');
  } else {
    target.setCustomValidity('');
  }
});

wizardCoat.addEventListener('click', function () {
  var colorWizardCoat = getRandElement(WIZARD_COAT);

  wizardCoat.style.fill = colorWizardCoat;
  inputCoat.value = colorWizardCoat;
});

wizardEyes.addEventListener('click', function () {
  var colorWizardEyes = getRandElement(WIZARD_EYES);

  wizardEyes.style.fill = colorWizardEyes;
  inputEyes.value = colorWizardEyes;
});

fireball.addEventListener('click', function () {
  var colorFireball = getRandElement(FIREBALL);

  fireball.style.backgroundColor = colorFireball;
  inputFireballColor.value = colorFireball;
});
