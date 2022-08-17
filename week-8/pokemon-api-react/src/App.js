import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    axios
      .get('https://pokeapi.co/api/v3/pokemon?limit=20')
      .then((axiosResult) => {
        const apiResponse = axiosResult.data; // .data is just the data (api response) from axios.
        const pokemons = apiResponse.results;
        setPokemons(pokemons);
      })
      .catch((error) => {
        console.log('error', error.response.status);
        if(error.response.status === 404)
          alert('Invalid request made');
      });

    // fetch('https://pokeapi.co/api/v2/pokemon?limit=20')
    //   .then(data => data.json())
    //   .then((apiResponse) => {
    //     const pokemons = apiResponse.results;
    //     setPokemons(pokemons);
    //   });
  }, []);

  return (
    <>
      <h1>List of Pokemons</h1>
      <ol>
        {pokemons.map((pokemon, index) => (
          <li key={index}>{pokemon.name}</li>
        ))}
      </ol>
    </>
  );
}

export default App;
