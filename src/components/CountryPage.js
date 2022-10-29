import React from 'react'
import { useParams, Link } from 'react-router-dom'
import CountryDetails from './CountryDetails';


export default function CountryPage({countries}) {
    const {id} = useParams();

    console.log(id);
    console.log(countries.filter(country => country.cca2 === id));
    console.log(countries);

    const theCountry = countries.filter(country => country.cca2 === id)[0]
    console.log(theCountry);

  return (
    <div className='pt-4 text-white md:w-1/2 w-[80%] mx-auto'>
        <Link to='/' className=''>
            <button className='hover:underline'>Back to Search</button> 
        </Link>
        <div className="main-app mx-auto bg-[rgba(0,0,0,0.5)] backdrop-blur-lg rounded-md p-4">
          <CountryDetails country={theCountry} className=""/>
        </div>

        

    </div>
  )
}
