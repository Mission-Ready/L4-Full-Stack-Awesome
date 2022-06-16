import { useState } from 'react';

export default function InputComponent({val, handleInputChange }) {

  const [inputToShow, setInputToShow] = useState('');


  const handleFormSubmit = (e) => {
    e.preventDefault();
    setInputToShow(val);
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input type="text" value={val} onChange={handleInputChange} />
        <input type="submit" />
      </form>
      <h1>{inputToShow}</h1>
    </div>
  );
}
