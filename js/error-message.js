import {
  isEscapeKey,
} from './util.js';


const errorMessageTemplate = document.querySelector('#error').content.querySelector('.error');
const errorNode = errorMessageTemplate.cloneNode(true);


function errorMessage() {
  document.body.appendChild(errorNode);
  errorNode.addEventListener('click', closeError);
  document.addEventListener( 'keydown', onEscKeydown );
}


function closeError(evt) {
  if (evt.target.closest('.error') && !evt.target.closest('.error__button')) {
    return;
  }
  document.querySelector('.error').remove();
  document.removeEventListener( 'keydown', onEscKeydown );
}


function onEscKeydown(evt) {
  if (isEscapeKey(evt)) {
    closeError(evt);
  }
}

export {
  errorMessage,
};
