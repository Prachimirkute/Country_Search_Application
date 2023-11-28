import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import CountryListPopup from "../countryListPopup";
import axios from "axios";
import "./style.css";

const Search = () => {
  const [countryname, serachCountry] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [CountryInformation, setCountryInformation] = useState(null);
  const [isClicked, setIsClicked] = useState(false);
  const [loading, setloading] = useState(false);
  const [ErrorMessage, setErrorMessage] = useState(false);

  const handleSubmit = async () => {
    if (countryname) {
      try {
        setloading(true);
        setErrorMessage("");
        const response = await axios.get(
          "https://country-search-application-backend.vercel.app/api/countries/" +
            countryname
        );
        const foundCountry = response.data;

        if (foundCountry) {
          setSelectedCountry(foundCountry);
          setIsClicked(true);
          console.log(foundCountry);
        } else {
          console.log("Country not found. Please enter a valid country name.");
          setIsClicked(false);
          setErrorMessage(
            "Country not found. Please enter a valid country name."
          );
        }
      } catch (error) {
        setSelectedCountry(null);
        setIsClicked(false);
        serachCountry("");
        setErrorMessage(
          "Country not found. Please enter a valid country name."
        );
      } finally {
        setloading(false);
      }
    } else {
      setErrorMessage("Please enter country name ");
    }
  };

  const CountryMoreDetails = (selectedCountry) => {
    setCountryInformation(selectedCountry);
  };

  const closePopup = () => {
    setCountryInformation("");
  };
  return (
    <div>
      <div className="searchListInput">
        <div className="input-wrapper ">
          <input
            placeholder="Search Country Name"
            type="text"
            required
            value={countryname}
            onChange={(e) => {
              if (e.target.value) {
                serachCountry(e.target.value);
              } else {
                setSelectedCountry(null);
                setIsClicked(false);
                serachCountry("");
              }
            }}
          />
          <FaSearch id="search-icon" onClick={handleSubmit} />
        </div>
      </div>

      <div className="App">
        <div className="container">
          <div className="row">
            {loading && (
              <div className="loader-container">
                <img src="/loader.gif" alt="Loading..." />
              </div>
            )}
            {ErrorMessage && <p className="error">{ErrorMessage}</p>}

            {isClicked && (
              <div className="col cardM">
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
            )}
          </div>
        </div>
      </div>
      {/* open popup */}
      <CountryListPopup countryData={CountryInformation} onClose={closePopup} />
    </div>
  );
};
export default Search;
