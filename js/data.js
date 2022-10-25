import {
  getRandomNumber
} from './util.js';

const ELEMENT_PICTURE_COUNT = 25;
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

const arrayId = createArrayConsecutiveNumbers(ELEMENT_PICTURE_COUNT);
const arrayUrl = createArrayConsecutiveNumbers(ELEMENT_PICTURE_COUNT);

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

export {
  creatDescriptionsPhoto,
  ELEMENT_PICTURE_COUNT,
};
