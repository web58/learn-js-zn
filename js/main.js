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
  successPopup,
  successBtn,
} from './form.js';

createPictures();

uploadFile.addEventListener('change', openModal);
closeModalCancel.addEventListener('click', closeModal);
uploadPictureElement.addEventListener('submit', (evt) => {
  if (!validateFormDescription.validate()) {
    evt.preventDefault();
  } else {
    closeModal();
    document.body.append(successPopup);
    evt.preventDefault();
  }
});

successBtn.addEventListener('click', () => {
  document.body.querySelector('.success').remove();
});
