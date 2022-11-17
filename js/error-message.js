import {
  isEscapeKey,
} from './util.js';


const errorMessageTemplate = document.querySelector('#error').content.querySelector('.error');
const errorNode = errorMessageTemplate.cloneNode(true);


function errorMessage() {
  document.body.appendChild(errorNode);
  errorNode.addEventListener('click', closeError);
  document.addEventListener('keydown', onEscKeydown);
  document.addEventListener('click', closeErrorClick);
}


function closeError(evt) {
  if (evt.target.closest('.error__inner') && !evt.target.closest('.error__button')) {
    return;
  }
  document.querySelector('.error').remove();
  document.removeEventListener('keydown', onEscKeydown);
  document.removeEventListener('click', closeErrorClick);
}


function onEscKeydown(evt) {
  if (isEscapeKey(evt)) {
    closeError(evt);
  }
}


function closeErrorClick(evt) {
  if (!evt.target.closest('.error__inner')) {
    closeError();
  }
}

export {
  errorMessage,
};
