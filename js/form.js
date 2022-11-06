import {
  isEscapeKey,
} from './util.js';

import {
  resetScale
} from './scale.js';

import {
  resetEffects
} from './effect.js';

const uploadPictureElement = document.querySelector('#upload-select-image');
const openModalElement = uploadPictureElement.querySelector('.img-upload__overlay');
const uploadFile = uploadPictureElement.querySelector('#upload-file');
const closeModalCancel = uploadPictureElement.querySelector('#upload-cancel');
const validateFormDescription = new Pristine(uploadPictureElement, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
  errorTextTag: 'span',
});

function openModal() {
  resetScale();
  resetEffects();
  openModalElement.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onEscKeydown);
}

function closeModal() {
  uploadPictureElement.reset();
  validateFormDescription.reset();
  openModalElement.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onEscKeydown);
}

function onEscKeydown(evt) {
  if (isEscapeKey(evt)) {
    closeModal();
  }
}


export {
  uploadPictureElement,
  uploadFile,
  closeModalCancel,
  openModal,
  closeModal,
  validateFormDescription,
};
