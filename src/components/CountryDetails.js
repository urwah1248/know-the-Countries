import React from 'react'
import WeatherInfo from './WeatherInfo'

export default function CountryDetails({ country }) {
  return (
    <div className=''>
        <h1 className='bg-[rgba(0,0,0,0.5)] text-center w-full mb-3 mt-0 py-4 border-2 border-blue-400 rounded-lg'>{country.name}</h1>
        <div className='flex flex-col sm:flex-row gap-3 justify-between mb-4'>
          <div className="bg-[rgba(0,0,0,0.5)] left border-2 border-blue-400 rounded-lg p-4 flex-grow ">
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
          </div>
          <div className="right">
            <img className=' bg-[rgba(0,0,0,0.5)] border-2 border-blue-400 rounded-lg w-full md:w-auto mx-auto border-white' src={country.flags.png} alt={'flag of '+ country.name} />
          </div>
        </div>
        
        <div className="border-2 border-blue-400 p-4 rounded-lg bg-[rgba(0,0,0,0.5)]">
          <h1>Weather in {country.capital}, {country.name}</h1>
          <WeatherInfo country={country} />
        </div>
    </div>
  )
}
