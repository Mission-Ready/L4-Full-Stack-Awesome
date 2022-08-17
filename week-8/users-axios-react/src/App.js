import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [users, setUsers] = useState([]);

  // Run this when you load the component for the first time
  // API need to be called only once
  useEffect(() => {
    console.log('This is from UseEffect');
    axios.get('https://reqres.in/api/users').then((axiosResult) => {
      const apiResponse = axiosResult.data; // API response from Axios => JSON
      // apiResponse.data is the array
      setUsers(apiResponse.data);
    }); // state users updated after getting the data from the API
  }, []);

  return (
    <>
      <h1>Learning the axios library</h1>
      {users.map((user, index) => (
        <div key={index}>
          <img src={user.avatar} alt={user.first_name} />
          <h3>
            {user.first_name} {user.last_name}
          </h3>
        </div>
      ))}
    </>
  );
}

export default App;
