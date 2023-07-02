import { Link } from 'react-router-dom';
import { useState } from 'react';
import CountryDetails from './CountryDetails';
import { Input, Button } from 'antd';

function Main({countries, setCountries}) {
  
  const [query, setQuery] = useState('')

  const handleChange = e => {
    setQuery(e.target.value)
  }

  const filteredCountries = countries.filter(country => 
    country.name.toLowerCase().includes(query)
  )


  return (
    <div className="App py-4 text-white md:w-[700px] w-[95%] mx-auto">

      <div className="header text-center bg-[rgba(0,0,0,0.5)] rounded-md mb-4 py-4">
        <h1 className='text-3xl'>Know the Countries</h1>
        <h2 className='md:text-2xl text-xl'>Basic Information about all the countries</h2>
      </div>

      <div className="main-app mx-auto bg-[rgba(0,0,0,0.5)] backdrop-blur-lg rounded-lg p-4">
        <p className='mx-auto block'>Find Country
        <Input placeholder='e.g Pakistan' className="w-full border-2 text-black indent-4" value={query} onChange={handleChange}/></p>
        {
          query && filteredCountries.length > 10 && (<div>Too many Results</div>)
        }
        {
          filteredCountries.length <= 10 && filteredCountries.length > 1 && filteredCountries.map(country => 
            <div key={country.cca2} className='flex gap-5 justify-between my-2'>
              <p>
                {country.name}
              </p>
              <Link to={'/country/'+country.cca2}>
                <Button type="primary" className='bg-blue-600'>Show</Button>
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
