import { useEffect, useState } from 'react';

export default function ColorDiv() {
  const [h1Color, setH1Color] = useState('yellow');

  function changeColor() {
    switch (h1Color) {
      case 'yellow':
        setH1Color('orange');
        break;
      case 'orange':
        setH1Color('red');
        break;
      case 'red':
        setH1Color('green');
        break;
      case 'green':
        setH1Color('pink');
        break;

      default:
        setH1Color('yellow');
        break;
    }
  }

  useEffect(() => {
    console.log(`The color of the H1 tag changed to ${h1Color}`);
  }, [h1Color]);

  return (
    <>
      <h1 style={{ background: h1Color }}>
        This element background is going to be changed.
      </h1>
      <button onClick={changeColor}>Change Color</button>
    </>
  );
}
