import {
  validateFormDescription,
  closeModal,
} from './form.js';


import {
  errorMessage,
} from './error-message.js';

import {
  successMessage,
} from './success-message.js';

function setFormSubmit(evt) {
  evt.preventDefault();
  if (validateFormDescription.validate()) {
    const formData = new FormData(evt.target);
    const BtnSubmit = evt.target.querySelector('button[type="submit"]');
    BtnSubmit.setAttribute('disabled', true);

    fetch('https://27.javascript.pages.academy/kekstagram-simple', {
      method: 'POST',
      body: formData,
    })
      .then((data) => {
        if (data.ok) {
          successMessage();
          closeModal();
        } else {
          errorMessage();
        }
      })
      .catch(() => errorMessage())
      .finally(() => BtnSubmit.removeAttribute('disabled'));
  }
}

export {
  setFormSubmit
};
