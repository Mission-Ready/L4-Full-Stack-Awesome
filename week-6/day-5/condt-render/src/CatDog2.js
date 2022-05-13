/* eslint-disable jsx-a11y/alt-text */
import { useState } from 'react';
function CatDog2(props) {
  // const [animalImageURL, setAnimalImageURL] = useState("");

  // const handleShowCat = () => setAnimalImageURL("https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png");
  // const handleShowDog = () => setAnimalImageURL("https://image.cnbcfm.com/api/v1/image/105992231-1561667465295gettyimages-521697453.jpeg?v=1561667497&w=1600&h=900");

  // return (
  //   <div>
  //     <button onClick={handleShowCat}>Show me the Cat</button>
  //     <br />
  //     <button onClick={handleShowDog}>Show me the Dog</button>
  //     <br />
  //     <img src={animalImageURL} width="100%" />
  //   </div>
  // );

  const [animalImageURL, setAnimalImageURL] = useState('');
  const showAnimal = () => {
    const animal = 'dog';
    if (animal === 'cat') {
      setAnimalImageURL(
        'https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png'
      );
    } else if (animal === 'dog') {
      setAnimalImageURL(
        'https://image.cnbcfm.com/api/v1/image/105992231-1561667465295gettyimages-521697453.jpeg?v=1561667497&w=1600&h=900'
      );
    }
  };
  
  return (
    <div>
      <button onClick={() => showAnimal()}>Show me the Cat</button>
      <br />
      <button onClick={() => showAnimal()}>Show me the Dog</button>
      <br />
      <img src={animalImageURL} width="50%" />
    </div>
  );
}

export default CatDog2;
