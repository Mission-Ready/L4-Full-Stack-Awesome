import { useState } from 'react';

export default function InputComponent({ val, handleInputChange }) {
  const [inputToShow, setInputToShow] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setInputToShow(val);
  };

  return (
    <div style={{ border: '2px dashed orange' }}>
      <form onSubmit={handleFormSubmit}>
        <input type="text" value={val} onChange={handleInputChange} />
        <button type="submit"> Submit </button>
      </form>
      <h1>{inputToShow}</h1>
    </div>
  );
}
