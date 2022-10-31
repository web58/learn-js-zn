import {
  createPictures,
} from './picture.js';

import {
  uploadPictureElement,
  uploadFile,
  closeModalCancel,
  openModal,
  closeModal,
  validateFormDescription,
} from './form.js';

createPictures();

uploadFile.addEventListener('change', openModal);
closeModalCancel.addEventListener('click', closeModal);


uploadPictureElement.addEventListener('submit', (evt) => {
  if (!validateFormDescription.validate()) {
    evt.preventDefault();
  }
});
