function getRandomNumber(min, max) {
  if (min > max || min < 0 || max < 0) {
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


// Функции генерации поста
const PHOTO_DESCRIPTION = [
  'Однако ее карьера могла не быть такой блестящей, если бы актриса не получила культовую роль Китнисс Эвердин, для которой ее посчитали слишком красивой.',
  'КС, Х — тут мы имеем дело с женщинами, готовыми совершать спонтанные поступки.',
  'Ну и самый неуклюжий способ погибнуть от огня в джунглях — сунуться в огненные ворота в храме, не обезвредив их предварительно.',
  'Она боится влюбляться, потому что погружается в отношения с полной отдачей.',
];

function creatValue(value) {
  const mySet = new Set();
  let newArray = [];
  for (let i = 0; newArray.length < value; i++) {
    newArray = Array.from(mySet.add(getRandomNumber(0, value)));
  }
  return newArray;
}

function getRandomArrayElement(e) {
  return e[getRandomNumber(0, e.length - 1)];
}

const arrayId = creatValue(25);
const arrayUrl = creatValue(25);

function creatObj(e) {
  return {
    id: arrayId[e],
    url: `photos/${arrayUrl[e]}.jpg`,
    description: getRandomArrayElement(PHOTO_DESCRIPTION),
    likes: getRandomNumber(15, 200),
    comments: getRandomNumber(0, 200),
  };


}


const creatArray = Array.from({
  length: 25
}, (e, index) => {
  return creatObj(index);
});
