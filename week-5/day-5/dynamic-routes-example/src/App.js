import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Post from './Post';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
     {/* localhost:3000/post/45 */}
          <Route path="/post/:postID/:category" element={<Post />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
