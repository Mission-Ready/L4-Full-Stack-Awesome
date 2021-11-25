import React, {useState} from 'react'
import './App.css';
import InputComponent from './components/InputComponent'
import ShowInput from './components/ShowInput'
import Counter from './components/Counter'

export default function App() {
  const [count, setCount] = useState(0)
  function updateCount() {
    setCount(count + 1)
  }

  return (
    <div className="App">
      <Counter count={count} updateCount={updateCount} />
      <Counter count={count} updateCount={updateCount} />
    </div>
  );
}