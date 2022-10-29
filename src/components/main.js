import { Link } from 'react-router-dom';
import { useState } from 'react';
import CountryDetails from './CountryDetails';

function Main({countries, setCountries}) {
  
  const [query, setQuery] = useState('')

  

  const handleChange = e => {
    setQuery(e.target.value)
    console.log(filteredCountries);
    console.log(query);
  }

  const filteredCountries = countries.filter(country => 
    country.name.toLowerCase().includes(query)
  )


  return (
    <div className="App pt-4 text-white md:w-1/2 w-[80%] mx-auto">

      <div className="header text-center bg-[rgba(0,0,0,0.5)] rounded-md mb-4">
        <h1 className='text-3xl'>Know the Countries</h1>
        <h2 className='md:text-2xl text-xl'>Basic Information about all the countries</h2>
      </div>

      <div className="main-app mx-auto bg-[rgba(0,0,0,0.5)] backdrop-blur-lg rounded-md p-4">
        <p className='mx-auto block'>Find Country <input className="w-full border-2 text-black indent-4" value={query} onChange={handleChange}/></p>

        {
          filteredCountries.length > 10 && (<div>Too many Results</div>)
        }
        {
          filteredCountries.length <= 10 && filteredCountries.length > 1 && filteredCountries.map(country => 
            <div className='flex gap-5 justify-between my-2'>
              <p>
                {country.name}
              </p>
              <Link to={'/country/'+country.cca2}>
                    <button type='button' className='border-4 hover:text-black hover:bg-white'>Show</button>
                </Link>
            </div>
          )
        }
        {
          filteredCountries.length === 1 && ( 
            <CountryDetails country={filteredCountries[0]}/>
          )
        }
      </div>
    </div>
      
  );
}

export default Main;
