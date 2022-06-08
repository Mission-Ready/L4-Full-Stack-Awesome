/* eslint-disable jsx-a11y/alt-text */
import { useState } from 'react';
function CatDog(props) {
  const [showACat, setShowACat] = useState(false);
  const [showADog, setShowADog] = useState(false);

  const handleShowCat = () => setShowACat(true);
  const handleShowDog = () => setShowADog(true);

  return (
    <div>
      <button onClick={handleShowCat}>Show me the Cat</button>
      <br />
      <button onClick={handleShowDog}>Show me the Dog</button>
      <br />

      {showACat && (
        <img
          src="https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png"
          width="50%"
        />
      )}

      {showADog && (
        <img
          src="https://image.cnbcfm.com/api/v1/image/105992231-1561667465295gettyimages-521697453.jpeg?v=1561667497&w=1600&h=900"
          width="50%"
        />
      )}
    </div>
  );
}

export default CatDog;
