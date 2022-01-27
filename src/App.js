import React from "react";
import { Route, Routes } from "react-router-dom";
import Countries from "./Components/Countries/Countries";
import CountryDetails from "./Components/CountryDetails/CountryDetails";
import NotFound from "./Components/NotFound/NotFound";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Countries />} />
        <Route path="/home" element={<Countries />} />
        <Route path="/home/details/:countryName" element={<CountryDetails />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
