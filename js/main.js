function getRandomNumber(min, max) {
  if (min > max || min < 0 || max < 0 || isNaN(min) || isNaN(max)) {
    return NaN;
  }

  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;

}

getRandomNumber(0, 2);


function lengthString(inputText, maxlength) {
  return inputText.length >= maxlength;
}


lengthString('Рыбный текст – это текст, выполняющий исключительно утилитарную функцию', 72);
