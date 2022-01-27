import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CountryDetails = (props) => {
  const { countryName } = useParams();
  const [details, setDetails] = useState([]);
  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${countryName}
    `)
      .then((res) => res.json())
      .then((data) => setDetails(data[0]));
  }, []);
  //   console.log(details);
  const { status, continents, independent, landlocked, timezones } = details;

  return (
    <div
      style={{
        textAlign: "center",
        margin: "auto",
        width: "700px",
        border: "3px solid blue",
        boxShadow: "3px 4px 5px gray",

        borderRadius: "7px",
        height: "300px",
      }}
    >
      <h1>
        Let's learn in details about{" "}
        <span style={{ color: "red" }}>{countryName}</span>{" "}
      </h1>
      <p>Continents: {continents}</p>
      <p>Independent? : {independent}</p>
      <p>Landlocked?: {landlocked}</p>
      <p>Timezones: {timezones}</p>
      <p>Status: {status}</p>
    </div>
  );
};

export default CountryDetails;
