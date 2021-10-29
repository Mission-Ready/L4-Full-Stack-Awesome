function getList() {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=150')
    .then(res => res.json())
    .then(json => {
        let listWrapper = document.getElementById('listOfPokemon')
        listWrapper.innerHTML = ''

        document.getElementById('noOfPokemon').textContent = json.results.length
        
        json.results.forEach(pokemon => {
            listWrapper.innerHTML += `<li>${pokemon.name}</li>`
        })
    })
}