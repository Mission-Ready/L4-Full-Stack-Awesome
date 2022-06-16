import { BrowserRouter, Routes, Route } from 'react-router-dom';

import About from './pages/About';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Login from './pages/Login';

export default function App() {
  return (
    <>
    <h2>This is from the App component</h2>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
