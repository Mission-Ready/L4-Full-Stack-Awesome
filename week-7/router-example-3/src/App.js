import { BrowserRouter, Routes, Route } from 'react-router-dom';

import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Book from './pages/Book';
import Car from './pages/Car';

function App() {
  return (
    <>
      <BrowserRouter>
      {/* Defining the routes in the app by specifying the path and the component for each path */}
        <Routes>
        {/* localhost:3000 =>  localhost:3000/  */}
          <Route path="/" element={<Home/>}/> 
          <Route path="/about" element={<About/>}/>
        {/* localhost:3000 + /about =>  localhost:3000/about  */}
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/> {/** Exercise 2 */ }
          <Route path="/book/:bookID" element={<Book/>}/> {/** Exercise 3 */ }
          <Route path="/car/:modelNo" element={<Car/>}/> {/** Exercise 3.1 */ }
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
