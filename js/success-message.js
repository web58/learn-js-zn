import {
  isEscapeKey,
} from './util.js';


const successMessageTemplate = document.querySelector('#success').content.querySelector('.success');
const successNode = successMessageTemplate.cloneNode(true);

function successMessage() {
  document.body.appendChild(successNode);
  successNode.addEventListener('click', closeSuccess);
  document.addEventListener('keydown', onEscKeydown);
  document.addEventListener( 'click', closeSuccessClick );
}

function closeSuccess(evt) {
  if (evt.target.closest('.success__inner') && !evt.target.closest('.success__button')) {
    return;
  }
  document.querySelector('.success').remove();
  document.removeEventListener('keydown', onEscKeydown);
  document.removeEventListener( 'click', closeSuccessClick );
}

function onEscKeydown(evt) {
  if (isEscapeKey(evt)) {
    closeSuccess(evt);
  }
}


function closeSuccessClick(evt) {
  if (!evt.target.closest('.success__inner')) {
    closeSuccess();
  }
}

export {
  successMessage,
};
