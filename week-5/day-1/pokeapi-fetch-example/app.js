function fetchPokemon() {
  fetch('https://pokeapi.co/api/v2/pokemon?limit=150')
    .then((res) => res.json()) // converting to json
    .then((jsonData) => {
      const showDataDiv = document.getElementById('showData');
      showDataDiv.innerHTML = '';
      jsonData.results.forEach((pokemon) => {
        showDataDiv.innerHTML += `${pokemon.name} <br>`;
      });
    });
}
