import React from 'react'
import './Country.css'
const Country = (props) => {
  return ( <div className="country">
          <img src={props.flag} alt="" />
          <h3 className="cName">Name: {props.Name}</h3>
          <h4>Capital: {props.capital}</h4>
          <div>
            <button className="btn1">See More</button>
            <button className="btn2">Remove</button>
          </div>
        </div>
  )
}

export default Country