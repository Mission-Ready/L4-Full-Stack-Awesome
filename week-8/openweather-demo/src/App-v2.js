// import { useEffect, useState } from 'react';
import { useState } from 'react';

function App() {
  const [cityNameInputfromUser, setCityNameInputfromUser] = useState('Auckland');
  const [currentTemp, setCurrentTemp] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [cityName, setCityName] = useState('');
  const [windSpeed, setWindSpeed] = useState(0);

  // Fetches the data from the OpenWeather Server using their API
  const getWeatherData = () => {
    console.log('getWeatherData is run now');
    /*
        id=2193733 is the id for Auckland City || appid=1d2bfc8b390e7da163843e07f08dc678
     */
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityNameInputfromUser}&appid=1d2bfc8b390e7da163843e07f08dc678&units=metric`
    )
      .then((res) => res.json())
      .then((weatherData) => {
        const temperature = weatherData.main.temp;
        const humidity = weatherData.main.humidity;
        const name = weatherData.name;
        const windSpeed = weatherData.wind.speed;

        // Update the state of the app using the values from the API
        setCityName(name);
        setCurrentTemp(temperature);
        setHumidity(humidity);
        setWindSpeed(windSpeed);
      });
  };

  /*
  // Call some function only once, when the app is launched.
  useEffect(() => getWeatherData(), []);
*/

  return (
    <div style={{margin: '5vh',display: 'flex',flexDirection: 'column',justifyContent: 'center',alignItems: 'center'}}>
      <div style={{ margin: '5vh',width: '50%',display: 'flex',flexDirection: 'row',justifyContent: 'space-evenly',alignItems: 'center' }} >
        <input placeholder='City Name' type="text" onChange={(e) => setCityNameInputfromUser(e.target.value)} />
        <button onClick={getWeatherData}>Find the weather</button>
      </div>
      <div>
        <h1>OpenWeather Data for {cityName} </h1>
        <h3>Humidity : {humidity} %</h3>
        <h3>Current Temperature : {currentTemp} C</h3>
        <h3>Wind Speed : {windSpeed} km/h</h3>
      </div>
    </div>
  );
}

export default App;
