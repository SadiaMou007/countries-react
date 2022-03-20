import "./App.css";
import { useEffect, useState } from "react";
import Countries from "./components/Countries/Countries";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
    <Header></Header>
      <Countries></Countries>
      <GetCountries></GetCountries>
    </div>
  );
}
function GetCountries() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data.slice(0, 9)));
  }, []);
  console.log(countries);
  return (
    <div className="mm">
      <h2>Available Country :{countries.length}</h2>
      <div className="container">
        {countries.map((country) => (
          <GetCountry
            Name={country.name.common}
            capital={country.capital[0]}
            flag={country.flags.png}
          ></GetCountry>
        ))}
      </div>
      <button className="btn3">Load More</button>
    </div>
  );
}

function GetCountry(props) {
  return (
    <div className="country">
      <img src={props.flag} alt="" />
      <h3 className="cName">Name: {props.Name}</h3>
      <h4>Capital: {props.capital}</h4>
      <div className="btns">
        <button className="btn1">See More</button>
        <button className="btn2">Remove</button>
      </div>
    </div>
  );
}
export default App;
