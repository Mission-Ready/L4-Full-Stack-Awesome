import axios from 'axios';
import { useState, useEffect } from 'react';

import Home from './Home';

function App() {
  const [users, setUsers] = useState([]);

  // Call the API once, when the page is loaded for the first time.
  useEffect(() => {
    getTheUsers();
  }, []);
  //  [] - run just once
  // [state_var or a props] - Run whenever the state or props change
  // empty, ie missing second param - Run whenever something changes (not recommended)

  // calls the API to get the list of users
  const getTheUsers = () => {
    axios.get('https://reqres.in/api/users').then((result) => {
      setUsers(result.data.data); // updating the state with an array of users
      console.log(result.data.data);
    });
  };

  return (
    <>
      <Home></Home>
      {/* <button onClick={getTheUsers}>Get me the users now ! </button> */}
      <div>
        {users.map((user, index) => (
          <>
            <img src={user.avatar} alt="user profile pic" />
            <h3 key={index}>
              {user.first_name} {user.last_name}
            </h3>
          </>
        ))}
      </div>
    </>
  );
}

export default App;
