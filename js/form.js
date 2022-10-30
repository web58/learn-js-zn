import {
  isEscapeKey,
} from './util.js';

const uploadPictureElement = document.querySelector('#upload-select-image');
const openModalElement = uploadPictureElement.querySelector('.img-upload__overlay');
const uploadFile = uploadPictureElement.querySelector('#upload-file');
const closeModalCancel = uploadPictureElement.querySelector('#upload-cancel');
const successTemplate = document.querySelector('#success').content.querySelector('.success');
const successPopup = successTemplate.cloneNode(true);
const successBtn = successPopup.querySelector('.success__button');
const validateFormDescription = new Pristine(uploadPictureElement, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
  errorTextTag: 'span',
});

function openModal() {
  openModalElement.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onModalEscKeydown);
}

function closeModal() {
  uploadPictureElement.reset();
  openModalElement.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onModalEscKeydown);
}

function onModalEscKeydown(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
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
  successPopup,
  successBtn,
};
