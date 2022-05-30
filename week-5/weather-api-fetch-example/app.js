function getCityWeather() {
  const cityName = document.getElementById('cityNameInput').value.trim();
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=1d2bfc8b390e7da163843e07f08dc678&units=metric`
  )
    .then((res) => res.json())
    .then((weatherInfo) => {
      const temp = weatherInfo.main.temp;
      const humidity = weatherInfo.main.humidity;
      displayWeatherInfo(temp, humidity, cityName);
    });
}

function displayWeatherInfo(temp, humidity, cityName) {
  const displayElement = document.getElementById('weatherDisplay');
  displayElement.innerHTML = '';
  displayElement.innerHTML = `
    <h1> Weather for ${cityName}</h1>
    <h4> Temperature : ${temp} </h4>
    <h4> Humidity : ${humidity} </h4>
  `; 
}