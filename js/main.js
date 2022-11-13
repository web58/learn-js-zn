import {
  renderPictures,
} from './rendering-picture.js';

import {
  uploadPictureElement,
  uploadFile,
  closeModalCancel,
  openModal,
  closeModal,
} from './form.js';

import {
  setFormSubmit
} from './send-form.js';

renderPictures();

uploadFile.addEventListener('change', openModal);
closeModalCancel.addEventListener('click', closeModal);
uploadPictureElement.addEventListener('submit', setFormSubmit);
