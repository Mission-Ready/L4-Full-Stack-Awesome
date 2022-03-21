import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Login from './pages/Login';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

/**
 * import InputComponent from './components/InputComponent';
import ShowInput from './components/ShowInput';

const App = () => {
  const [val, setVal] = useState('');
  const handleChangeMethodInApp = (event) => setVal(event.target.value);

  return (
    <div style={{ border: '2px solid black', margin: '5px' }}>
      {/*orange component}
      <InputComponent val={val} handleChange={handleChangeMethodInApp} /> 
      {/*green component}
      <ShowInput val={val} />
    </div>
  );
};
 */
