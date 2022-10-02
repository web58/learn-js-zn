function getRandomNumber(min, max) {
  if ((min < max) && ((min > -1) && (max > -1))) {
    const resultat = Math.floor(Math.random() * ((max + 1) - min)) + min;
    console.log(resultat);
    // return resultat;
  } else {
    const resultat = 0 / 0;
    return resultat;
  }

}

getRandomNumber(1, 6);
