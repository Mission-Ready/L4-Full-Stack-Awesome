import { useEffect, useState } from 'react';

function App() {
  //  state called color => string
  const [color, setColor] = useState('yellow');

  useEffect(() => {
    console.log('Color of h1 changed to', color);
  }, [color]);

//  //This is run every time instead of on just one particular state variable change
//     useEffect(() => {
//       console.log('Color of h1 changed to', color);
//     });

  function changeColor() {
    setColor('red');
  }

  return (
    <>
      <h1 style={{ background: color }}>Today is only Thursday</h1>
      <button onClick={changeColor}>Change color</button>
    </>
  );
}

export default App;
