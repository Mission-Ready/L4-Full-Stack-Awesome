import { useEffect, useState } from 'react';
function App() {
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
      'https://api.openweathermap.org/data/2.5/weather?id=2193733&appid=1d2bfc8b390e7da163843e07f08dc678&units=metric'
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
  // Call some function only once
  useEffect(() => getWeatherData(), []);
  return (
    <>
      <h1>OpenWeather Data for {cityName} </h1>
      <h3>Humidity : {humidity} %</h3>
      <h3>Current Temperature : {currentTemp} C</h3>
      <h3>Wind Speed : {windSpeed} km/h</h3>
    </>
  );
}
export default App;