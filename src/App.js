import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Main from './components/main';
import CountryPage from './components/CountryPage';
import { useEffect, useState } from 'react';
import axios from 'axios'

import React from 'react'

export default function App() {

  const [countries, setCountries] = useState([])



  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data.map(({name, capital, area, languages, flags, cca2})=>({
          name: name.common,
          capital,
          area,
          languages,
          flags,
          cca2
        })))
      })
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Main countries={countries} setCountries={setCountries} />} />
        <Route path='/country/:id' element={<CountryPage countries={countries} />} />
      </Routes>
    </BrowserRouter>
  )
}
