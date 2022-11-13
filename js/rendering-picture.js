import {
  creatingTemplatePictures,
} from './creating-template-picture.js';

function renderPictures() {
  fetch('https://27.javascript.pages.academy/kekstagram-simple/data')
    .then((responese) => responese.json())
    .then((pictures) => {
      creatingTemplatePictures(pictures);
    });
}

export {
  renderPictures,
};
