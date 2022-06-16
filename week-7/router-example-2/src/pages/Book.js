// Exercise 5 - Dynamic Routes
import { useParams } from 'react-router-dom';
function Book() {
  // const params = useParams(); // this method returns an object
  const { bookID } = useParams(); // this method returns an object
  /*
   localhost:3000/book/1a2bc 
           path="/book/:bookID"
    Here bookID => 112bc
  */

  return <div>You are about to access book: {bookID}</div>;
}

export default Book;
