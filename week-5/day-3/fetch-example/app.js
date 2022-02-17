// Fetch method - gets a resource from some location into our webpage

// const mainDivElement = document.getElementById('mainDiv');
// const userName = 'Sebin Benjamin';
// mainDivElement.innerHTML = 'Hello, ' + userName + ' welcome to the page';
// mainDivElement.innerHTML = `Hello, ${userName} welcome to the page`;

function fetchData() {
  console.log('fetchData() function called');
  fetch('example.json')
    // converting info to json
    .then((res) => res.json())
    .then((jsonData) => console.log(jsonData));
}

function showData() {
  console.log('showData button clicked');
  fetch('example.json')
    // converting info to json
    .then((res) => res.json())
    .then((jsonData) => {
      console.log(jsonData);
      const showDataDivElement = document.getElementById('showData');
      // clear out the div content
      showDataDivElement.innerHTML = '';

      jsonData.forEach((person) => {
        showDataDivElement.innerHTML =
          showDataDivElement.innerHTML + `<li> ${person.name} </li>`;
      });
      console.log(showDataDivElement.innerHTML);
    });
}
