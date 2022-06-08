import { useEffect, useState } from 'react';

function App() {
  //  state called color => string
  const [color, setColor] = useState('yellow');
  const [divColor, setDivColor] = useState('green');

  useEffect(() => {
    console.log('Color of h1 changed to', color);
  }, [color]);

  useEffect(() => {
    console.log('Color of div changed to', setDivColor);
  }, [setDivColor]);

  /*
    / This is run every time instead of on just one particular variable change
    useEffect(() => {
      console.log('Color of h1 changed to', color);
    });
*/
  function changeColor() {
    setColor('red');
  }

  function changeDivColor() {
    setDivColor('pink');
  }

  return (
    <>
      <h1 style={{ background: color }}>Today is only Thursday</h1>
      <div style={{ background: divColor }}>Some div</div>
      <button onClick={changeColor}>Change color</button>
      <button onClick={changeDivColor}>Change DIV color</button>
    </>
  );
}

export default App;
