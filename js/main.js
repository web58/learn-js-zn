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
const PHOTO_DESCRIPTIONS = [
  'Однако ее карьера могла не быть такой блестящей, если бы актриса не получила культовую роль Китнисс Эвердин, для которой ее посчитали слишком красивой.',
  'КС, Х — тут мы имеем дело с женщинами, готовыми совершать спонтанные поступки.',
  'Ну и самый неуклюжий способ погибнуть от огня в джунглях — сунуться в огненные ворота в храме, не обезвредив их предварительно.',
  'Она боится влюбляться, потому что погружается в отношения с полной отдачей.',
];

function createArrayConsecutiveNumbers(value) {
  const mySet = new Set();
  for (let i = 0; mySet.size < value; i++) {
    mySet.add(getRandomNumber(1, value));
  }
  return [...mySet];
}

function getRandomArrayElement(element) {
  return element[getRandomNumber(0, element.length - 1)];
}

const arrayId = createArrayConsecutiveNumbers(25);
const arrayUrl = createArrayConsecutiveNumbers(25);

function creatObj(i) {
  return {
    id: arrayId[i],
    url: `photos/${arrayUrl[i]}.jpg`,
    description: getRandomArrayElement(PHOTO_DESCRIPTIONS),
    likes: getRandomNumber(15, 200),
    comments: getRandomNumber(0, 200),
  };


}


function creatDescriptionsPhoto(value) {
  const result = [];
  for (let i = 0; i < value; i++) {
    result.push(creatObj(i));
  }
  return result;
}

creatDescriptionsPhoto(25);
