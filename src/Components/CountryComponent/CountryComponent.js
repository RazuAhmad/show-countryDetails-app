import React from "react";
import { Link } from "react-router-dom";
const CountryComponent = (props) => {
  // console.log(props.countryInfo);
  const { name, continents, population, flags } = props.countryInfo;
  return (
    <div
      style={{
        border: "3px solid red",
        boxShadow: "3px 4px 5px gray",
        marginBottom: "20px",
        borderRadius: "7px",
        height: "300px",
      }}
    >
      <h2 style={{ color: "#003366" }}>Country Name: {name.common}</h2>
      <h3>Population: {population}</h3>
      <h4>Continent: {continents}</h4>
      <img style={{ width: "100px" }} src={flags.png} alt="" />
      <br />
      <br />
      <Link to={"/home/details/" + name.common}>
        <button
          style={{
            color: "white",
            background: "black",
            padding: "5px",
            borderRadius: "6px",
          }}
        >
          Show Details
        </button>
      </Link>
    </div>
  );
};

export default CountryComponent;
