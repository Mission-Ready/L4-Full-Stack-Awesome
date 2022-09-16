const getDogPic = () => {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then((result) => result.json())
    .then((jsonResult) => {
      const imageElement = document.querySelector('img');
      imageElement.src = jsonResult.message;
    });
};

const getCatFact = () => {
  fetch('https://meowfacts.herokuapp.com')
    .then((result) => result.json())
    .then((jsonResult) => {
      const h1Element = document.querySelector('h1');
      h1Element.innerText = jsonResult.data[0];
    });
};
