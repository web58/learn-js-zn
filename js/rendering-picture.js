import {
  creatingTemplatePictures,
} from './creating-template-picture.js';

import {
  errorMessage,
} from './error-message.js';

function renderPictures() {
  fetch('https://27.javascript.pages.academy/kekstagram-simple/data', {
    method: 'GET',
    headers: {
      'content-type': 'application/json'
    },
  })
    .then((responese) => {
      if (responese.ok) {
        return responese.json();
      }
    })
    .then((pictures) => {
      creatingTemplatePictures(pictures);
    })
    .catch(() => {
      errorMessage();
    });
}

export {
  renderPictures,
};
