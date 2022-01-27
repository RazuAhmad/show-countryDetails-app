import React, { useEffect, useState } from "react";
import CountryComponent from "../CountryComponent/CountryComponent";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  //   console.log(countries);
  return (
    <div
      style={{
        textAlign: "center",
        margin: "auto",
        width: "460px",
      }}
    >
      {countries.map((pd) => (
        <CountryComponent countryInfo={pd} key={Math.random(3.4)} />
      ))}
    </div>
  );
};

export default Countries;
