import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from 'antd';
import axios from 'axios';

import CountryDetails from './CountryDetails';

export default function CountryPage() {
  const { id } = useParams();
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .get(`https://restcountries.com/v3.1/alpha/${id}`)
      .then(response => {
        const { name, capital, area, languages, flags, cca2 } = response.data[0];
        const countryData = { name: name.common, capital, area, languages, flags, cca2 };
        setCountry(countryData);
        setLoading(false);
      })
      .catch(error => {
        console.log('Error fetching country data:', error);
        setError(true);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div className='text-center py-10'>Loading...</div>;
  }

  if (error) {
    return <div>Error occurred while fetching country data.</div>;
  }

  return (
    <div className='pt-4 text-white md:w-[700px] w-[95%] mx-auto '>
      <Link to='/'>
        <Button type="primary" className='hover:underline bg-blue-700 mb-2'>Back to Search</Button>
      </Link>
      <div className="main-app mx-auto bg-[rgba(0,0,0,0.5)] backdrop-blur-lg rounded-md p-4">
        {country && <CountryDetails country={country} />}
      </div>
    </div>
  );
}
