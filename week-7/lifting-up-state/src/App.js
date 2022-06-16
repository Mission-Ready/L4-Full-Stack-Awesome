import { useState } from 'react';

import InputComponent from './components/InputComponent'
import ShowInput from './components/ShowInput'

function App() {
  const [val, setVal] = useState('');
  const handleInputChange = (e) => setVal(e.target.value);

  return <>
  <InputComponent val={val} handleInputChange={handleInputChange} ></InputComponent>
  <br />
  <ShowInput val={val}></ShowInput>
  </>;
}

export default App;
