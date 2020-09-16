import React, { useEffect, useState } from 'react';
import { Header, Cards, Charts, CountryPicker, Precautions, Symptoms } from './Components';
import { fetchData } from './API';
import './App.css';


function App() {

  const [fetchedData, setFetchedData] = useState({ confirmed: { detail: '', value: 0 }, deaths: { detail: '', value: 0 }, lastUpdate: '', recovered: { detail: '', value: 0 } });
  const [country, setCountry] = useState('');

  useEffect(() => {
    const APIData = async () => {
      setFetchedData(await fetchData(country));
    }
    APIData();
  });

  const handleCountryChange = async (country) => {
    setFetchedData(await fetchData(country));
    setCountry(country)

  }

  return (
    <div className="App">
      <Header />
      <CountryPicker handleCountryChange={handleCountryChange} />
      <Cards data={fetchedData} />
      <Charts data={fetchedData} country={country} />
      <Precautions />
      <Symptoms />
    </div>
  );
}

export default App;