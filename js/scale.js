const smallerBtn = document.querySelector('.scale__control--smaller');
const biggerBtn = document.querySelector('.scale__control--bigger');
const scaleInput = document.querySelector('.scale__control--value');
const modalImage = document.querySelector('.img-upload__preview img');

const SCALE_STEP = 25;
const MIN_SCALE = 25;
const MAX_SCALE = 100;
const DEFAULT_SCALE = 100;

function scaleImage(value = DEFAULT_SCALE) {
  modalImage.style.transform = `scale(${value / 100})`;
  scaleInput.value = `${value}%`;
}

function onSmallerBtnClick() {
  const currentValue = parseInt(scaleInput.value, 10);
  let newValue = currentValue - SCALE_STEP;
  if (newValue < MIN_SCALE) {
    newValue = MIN_SCALE;
  }
  scaleImage(newValue);
}

function onBiggerBtnClick() {
  const currentValue = parseInt(scaleInput.value, 10);
  let newValue = currentValue + SCALE_STEP;
  if (newValue > MAX_SCALE) {
    newValue = MAX_SCALE;
  }
  scaleImage(newValue);
}

function resetScale() {
  scaleImage();
}

smallerBtn.addEventListener('click', onSmallerBtnClick);
biggerBtn.addEventListener('click', onBiggerBtnClick);

export {
  resetScale,
  modalImage
};
