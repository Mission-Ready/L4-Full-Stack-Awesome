import { useState } from 'react';

import InputComponent from './components/InputComponent';
import ShowInput from './components/ShowInput';

function App() {
  const [val, setVal] = useState('');
  const handleInputChange = (e) => setVal(e.target.value);

  return (
    <div style={{ border: '2px solid red', margin: '5px', padding: '2px' }}>
      {/*orange component  */}
      <InputComponent val={val} handleInputChange={handleInputChange}></InputComponent>
      <br />
      {/*green component */}
      <ShowInput val={val}></ShowInput>
    </div>
  );
}

export default App;
