import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="Home">
      <h3>This is the home page</h3>
      <Link to="/about">About</Link> <br />
      {/* <a href="/about">About</a> */}
      <Link to="/contact">Contact</Link> <br />
      <Link to="/login">Login</Link> <br />
      <Link to="/signup">Signup</Link> <br />
    </div>
  );
}

export default Home;
