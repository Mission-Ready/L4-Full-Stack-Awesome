import './App.css';
import { useState } from 'react'

function App() {
  const [color, setColor] = useState("red")

  function changeColor() {
    switch (color) {
      case "red":
        setColor("blue")
        break;
      case "blue":
        setColor("green")
        break;
      case "green":
        setColor("orange")
        break;
      case "orange":
        setColor("yellow")
        break;
      default:
        setColor("red")
    }
  }

  return (
    <div className="App">
      <h1 style={{background: color}}>This element is going to change colour</h1>
      <button onClick={changeColor}>Change color</button>
    </div>
  );
}

export default App;
