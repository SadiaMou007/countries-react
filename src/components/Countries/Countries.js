import React from "react";
import { useEffect, useState } from "react";
import Country from "../Country/Country";
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data.slice(0, 9)));
  }, []);
  return (
    <div className="mm">
      <h2 className="availableC">Available Country: {countries.length}</h2>
      <div className="container">
        {countries.map((country) => ( <Country country={country}></Country>))}
      </div>
      <button className="btn3">Load More</button>
    </div>
  );
};

export default Countries;
