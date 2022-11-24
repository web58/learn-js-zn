const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const containerPictures = document.querySelector('.pictures');

function createPicture(data) {
  const {
    comments,
    likes,
    url,
    description,
  } = data;
  const picture = pictureTemplate.cloneNode(true);

  picture.href = url;
  picture.querySelector('.picture__img').src = url;
  picture.querySelector('.picture__img').alt = description;
  picture.querySelector('.picture__comments').textContent = comments;
  picture.querySelector('.picture__likes').textContent = likes;

  return picture;
}

function creatingTemplatePictures(pictures) {
  const postsFragment = document.createDocumentFragment();
  pictures.forEach((picture) => {
    const pictureElement = createPicture(picture);
    postsFragment.append(pictureElement);
  });
  containerPictures.append(postsFragment);
}

export {
  creatingTemplatePictures,
};
