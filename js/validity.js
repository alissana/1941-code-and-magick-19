'use strict';

(function () {
  var userDialog = document.querySelector('.setup');
  var userNameInput = userDialog.querySelector('.setup-user-name');

  userNameInput.addEventListener('invalid', function () {
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
    var MIN_NAME_LENGTH = 2;
    if (target.value.length < MIN_NAME_LENGTH) {
      target.setCustomValidity('Имя должно состоять минимум из ' + MIN_NAME_LENGTH + '-х символов');
    } else {
      target.setCustomValidity('');
    }
  });
})();
