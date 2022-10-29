import React from 'react'
import WeatherInfo from './WeatherInfo'

export default function CountryDetails({ country }) {
  return (
    <div className='px-4'>
        <h1 className='text-center w-full py-10'>{country.name}</h1>
        <div className='flex flex-row gap-3 justify-between'>
          <div className="left">
            <div className="col-sm left">
              <h1>Key Details</h1>
              <div><strong>Capital City: </strong> {country.capital}</div>
              <div><strong>Area:</strong> {country.area} sq. km</div>
            </div>
            <div><h3><strong>Languages:</strong> </h3>
                <ul className='list-disc list-inside'>
                {Object.values(country.languages).map(lang => <li key={lang}>{lang}</li>)}
                </ul> 
            </div>
            <br />
          </div>
          <div className="right ">
            <img className='border-2 border-white' src={country.flags.png} alt={'flag of '+ country.name} />
          </div>
        </div>
        
        <h1>Weather in {country.capital}, {country.name}</h1>
            <WeatherInfo country={country} />
        
    </div>
  )
}
