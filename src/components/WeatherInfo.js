import React, { useState, useEffect } from 'react'
import axios from 'axios';
import WeatherData from '../assets/weather.json'


export default function WeatherInfo({country}) {
    const api_key = process.env.REACT_APP_API_KEY;

    const [weather, setWeather] = useState(WeatherData)
    useEffect(() => {
    axios
        .get(`https://api.openweathermap.org/data/2.5/weather?q=${country.capital},${country.name}&appid=api_key`)
        .then(response => {
        setWeather(response.data)
    })
    })

    // console.log(weather.temp);
  return (
    <div>
        <div><strong>Temperature</strong> {(weather.main.temp-273).toFixed(1)} Celcius</div>
        <img 
        src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} 
        alt="weather state"
        className='drop-shadow-3xl' />
        <div><strong>wind</strong> {weather.wind.speed} m/s</div>
    </div>
  )
}
