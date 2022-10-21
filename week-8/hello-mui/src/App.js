import { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [userInput, setUserInput] = useState('');
  const initialWeather = {
    cityName: '',
    temp: 0,
    humidity: 0,
  };
  const [currentWeather, setCurrentWeather] = useState(initialWeather);

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
    console.log(event.target.value);
  };

  const getCityWeather = () => {
    const cityName = userInput.trim();
    // Axios does the same thing as the fetch method, but a bit easier.
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=1d2bfc8b390e7da163843e07f08dc678&units=metric`
      )
      .then((weatherInfo) => {
        const temp = weatherInfo.data.main.temp;
        const humidity = weatherInfo.data.main.humidity;
        setCurrentWeather({ temp, humidity, cityName });
      });
    // fetch(
    //   `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=1d2bfc8b390e7da163843e07f08dc678&units=metric`
    // )
    //   .then((res) => res.json()) // converting to json - parsing JSON
    //   .then((weatherInfo) => {
    //     console.log(weatherInfo);
    //     const temp = weatherInfo.main.temp;
    //     const humidity = weatherInfo.main.humidity;
    //     setCurrentWeather({ temp, humidity, cityName });
    //   });
  };

  return (
    <>
      <label>
        City Name
        <input type="text" value={userInput} onChange={handleInputChange} />
      </label>
      <button onClick={getCityWeather}>Get weather info</button>
      {currentWeather.cityName !== '' && (
        <div>
          <h1> Weather for {currentWeather.cityName}</h1>
          <h4> Temperature : {currentWeather.temp} </h4>
          <h4> Humidity : {currentWeather.humidity} </h4>
        </div>
      )}
    </>
  );
}

export default App;
