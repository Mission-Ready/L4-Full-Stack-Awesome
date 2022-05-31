function fetchData() {
  fetch('example.json')
    .then((res) => res.json()) // converting to json
    .then((jsonData) => console.log(jsonData));
}

function fetchShowData() {
  fetch('example.json')
    .then((res) => res.json()) // converting to json
    .then((jsonData) => {
      const showDataDiv = document.getElementById('showData');
      showDataDiv.innerHTML = '';
      jsonData.forEach((person) => {
        showDataDiv.innerHTML += `<li> ${person.name}  </li>`;
      });
    });
}

function fetchAPIData() {
  fetch('https://reqres.in/api/users')
    .then((res) => res.json()) // converting to json
    .then((jsonData) => {
      const showDataDiv = document.getElementById('showData');
      showDataDiv.innerHTML = '';
      jsonData.data.forEach((person) => {
        showDataDiv.innerHTML += `
        <img src=${person.avatar}>
        <div> ${person.first_name} ${person.last_name} </div>
        `;
      });
    });
}
