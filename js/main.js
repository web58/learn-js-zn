function getRandomNumber(min, max) {
  if ((min < max) && ((min > -1) && (max > -1))) {
    const resultat = Math.floor(Math.random() * ((max + 1) - min)) + min;
    return resultat;
  } else {
    const resultat = 0 / 0;
    return resultat;
  }

}

getRandomNumber(1, 6);


function lengthString(inputText, maxlength) {

  if (inputText.length > maxlength) {
    const resultat = false;
    return resultat;
  } else {
    const resultat = true;
    return resultat;
  }
}

lengthString('Рыбный текст – это текст, выполняющий исключительно утилитарную функцию', 71);
