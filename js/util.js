function getRandomNumber(min, max) {
  if (min > max || min < 0 || max < 0) {
    return NaN;
  }

  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;

}

function checkLengthString(inputText, maxlength) {
  return inputText.length <= maxlength;
}

checkLengthString('Рыбный текст – это текст, выполняющий исключительно утилитарную функцию', 71);

function isEscapeKey(evt) {
  return evt.key === 'Escape';
}

export {
  getRandomNumber,
  checkLengthString,
  isEscapeKey,
};
