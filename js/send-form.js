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
    const formDate = new FormData(evt.target);

    fetch('https://27.javascript.pages.academy/kekstagram-simple', {
      method: 'POST',
      body: formDate,
    })
      .then(() => {
        successMessage();
        closeModal();
      })
      .catch(() => errorMessage());

  }
}

export {
  setFormSubmit
};
