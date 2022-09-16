function fetchData() {
  // Inbuilt browser fetch method to get data
  fetch('example.json')
    .then((result) => result.json())
    .then((jsonResult) => console.log(jsonResult));
}

function fetchDataToShow() {
  fetch('example.json')
  .then((result) => result.json())
  .then((jsonResult) => {
    const divElement = document.getElementById('showData');
    divElement.innerHTML = ''; // clear the existing data
    jsonResult.forEach(person => {
      divElement.innerHTML += `<li> ${person.name} </li>` 
    });
  });
}
