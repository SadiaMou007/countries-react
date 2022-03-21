import React from "react";
import "./Country.css";
const Country = (props) => {
  // console.log(props.country)
  const { name, flags, capital } = props.country;
  return (
    <div className="country">
      <img src={flags.png} alt="" />
      <h3 className="cName">Name: {name.common}</h3>
      <h4>Capital: {capital}</h4>
      <div>
        <button className="btn1">See More</button>
        <button className="btn2">Remove</button>
      </div>
    </div>
  );
};

export default Country;
