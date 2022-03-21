import { Link } from 'react-router-dom';
function Home(props) {
  return (
    <div style={{backgroundColor: "green"}}>
      <div>This is the Home page</div>
      <div>
        {/* Link helps us to use the routes defined in the react router */}
        <Link to="/about">About</Link>
      </div>
      <div>
        <Link to="/contact">Contact</Link>
      </div>
      <div>
        <Link to="/login">Login</Link>
      </div>
      <div>
        <Link to="/signup">Signup</Link>
      </div>
      <div>
        <Link to="/book">Book</Link>
      </div>
      <div>
        <Link to="/car/x">Model X</Link>
      </div>
      <div>
        <Link to="/car/s">Model S</Link>
      </div>
    </div>
  );
}

export default Home;
