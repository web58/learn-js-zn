function getRandomNumber(min, max) {
  if (min > max || min < 0 || max < 0 || typeof min !== 'number' || typeof max !== 'number') {
    return NaN;
  }

  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;

}

getRandomNumber(0, 2);


function checkLengthString(inputText, maxlength) {
  return inputText.length <= maxlength;
}


checkLengthString('Рыбный текст – это текст, выполняющий исключительно утилитарную функцию', 71);
