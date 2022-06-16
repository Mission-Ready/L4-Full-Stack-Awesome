import { Link } from 'react-router-dom';
function Home(props) {
  return (
    <div>
      <div>This is the Home page</div>
      <div>
        <Link to="/about">About</Link>
      </div>
      <div>
        <Link to="/contact">Contact</Link>
      </div>
      <div>
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
}

export default Home;
