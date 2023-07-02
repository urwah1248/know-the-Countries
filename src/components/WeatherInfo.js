import React, { useState, useEffect } from 'react';
import axios from 'axios';


const api_key = process.env.REACT_APP_API_KEY;

export default function WeatherInfo({ country }) {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .get(`https://api.openweathermap.org/data/2.5/weather?q=${country.capital},${country.name}&appid=${api_key}`)
      .then(response => {
        setWeather(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.log('Error fetching weather data:', error);
        setError(true);
        setLoading(false);
      });
  }, [country]);

  if (loading) {
    return <div>Loading weather data...</div>;
  }

  if (error) {
    return <div>Error occurred while fetching weather data.</div>;
  }

  return (
    <div className='flex mt-3 items-center'>
      <div className='flex-grow'>
        <div>
          <strong>Temperature</strong> {(weather.main.temp - 273).toFixed(1)} C
        </div>
        <div>
          <strong>Wind</strong> {weather.wind.speed} m/s
        </div>
      </div>
      <img
        src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        alt="weather state"
        className="drop-shadow-3xl"
      />
    </div>
  );
}
