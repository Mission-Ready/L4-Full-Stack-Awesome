// gets data from local json file
function fetchData() {
    fetch('example.json')
    .then(res => res.json())
    .then(json => console.log(json))
}

// gets data from local json file and appends it to the DOM
function fetchDataToShow() {
    fetch('example.json')
    .then(res => res.json())
    .then(json => {
        const showDataDiv = document.getElementById('showdata')
        showDataDiv.innerHTML = ''
        json.forEach((user) => (
            showDataDiv.innerHTML += `
            <li>${user.name}</li>
            `
        ))
    })
}

// gets data from some api
function fetchAPIData() {
    fetch('https://reqres.in/api/users')
    .then(res => res.json())
    .then(json => {
        const showDataDiv = document.getElementById('showdata')
        showDataDiv.innerHTML = ''
        json.data.forEach((user) => (
            showDataDiv.innerHTML += `
            <img src=${user.avatar} />
            <div>${user.first_name} ${user.last_name}</div>
            `
        ))
    })
}

