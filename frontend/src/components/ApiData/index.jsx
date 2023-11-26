import { useState, useEffect } from "react";
import CountryListPopup from "../countryListPopup";
import "./style.css";
import axios from "axios";
import React from "react";

const ApiData = () => {
  const [CountryInformation, setCountryInformation] = useState(null);
  const [countries, setCountriesAllData] = useState([]);
  const [ErrorMessage, setErrorMessage] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://vercel-development-backend-6ugc.vercel.app/api/countryList"
        );
        setCountriesAllData(response.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);
  console.log(countries);

  const CountryMoreDetails = (selectedCountry) => {
    setCountryInformation(selectedCountry);
  };

  const closePopup = () => {
    setCountryInformation("");
  };

  return (
    <div>
      <div className="App">
        <div className="container">
          <div className="row">
            {/* <h6 className="headerList">List for all Countrys</h6> */}
            {countries.map((selectedCountry, id) => (
              <div key={selectedCountry.id} className="col cardM">
                <div className="card cardShadow searchList">
                  <img
                    className="card-img-top cardImage"
                    src={selectedCountry.flags.png}
                    height="200px"
                    alt=""
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      Name: {selectedCountry.name.common}
                    </h5>
                    <p className="card-text">
                      Capital : {selectedCountry.capital}
                    </p>
                    <div
                      className="btn cardBtn"
                      onClick={() => CountryMoreDetails(selectedCountry)}
                    >
                      Read more country data
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Display the popup */}
      <CountryListPopup countryData={CountryInformation} onClose={closePopup} />
    </div>
  );
};
export default ApiData;
