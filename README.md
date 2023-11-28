## Search Country Information Application

A simple application to fetch and display information about a country.[Run Project](https://vercel-development-frontend.vercel.app/)

## Technologies Used

- Frontend : React
- Backend : Node.js , Express.js
- Deployment : vercel

## Discription

```
This project consists of a React frontend interface that allows users to input a country's name. The frontend makes requests to a NodeJS backend server, which in turn fetches information about the specified country from the [countries API](https://restcountries.com/v3.1/all). The retrieved information is then rendered back to the user in an easily understandable format.

1. Fetch All Country Information from the Backend:
   When the frontend application loads, you can make an initial request to the backend endpoint that fetches information for all countries. This information can be stored on the frontend and used to quickly display details when users search for a specific country.

- Implementation:
  Create a backend endpoint (api/countryList) that fetches information for all countries.
  On the frontend, make an initial API request to this endpoint when the application loads.

2. User-Friendly Interface to Input a Country Name:
   Provide a simple and user-friendly input field in the frontend where users can type the name of the country they want to search.

- Implementation:
  Use a text input field in the frontend for users to enter the country name.

3. Quickly Display Specific Country Information:
   When a user enters a country name, the frontend should quickly display relevant information about that country without requiring a page refresh.

- Implementation:
  Use asynchronous requests to the backend (api/countries) when the user enters a country name.
  Dynamically update the frontend interface to display relevant information.

Display the relevant information received from the backend on the frontend interface.
Show basic information about the country, such as its name, flag, capital.

4. Read More Button for Additional Information:
   Provided a "Read More" button that users can click to access additional detailed information about the country.

Error Handling: Implement proper error handling on both the frontend and backend to manage cases where the country name is not found or there are network issues.

Loading State: Show a loading indicator while waiting for the backend response.

Responsive Design: Ensure that the frontend application is responsive and works well on different devices and screen sizes.
```

## Installation:

### Frontend :

installation React project

```sh
$ npm install
$ npx create-react-app frontend
$ cd frontend
$ npm start
```

### Backend :

installation Node.js project

```sh
$ npm init -y
```

It is designed to simplify the process of building robust and scalable web applications and APIs.

```sh
$ npm install express
```

Run server

```sh
$ node index.js
```

Axios is a popular library for making HTTP requests.

```sh
$ npm install axios
```

The React development server will be running on https://vercel-development-frontend.vercel.app
Open your browser and navigate to https://vercel-development-frontend.vercel.app to use the application.

## Folder Structure

```
├── backend/ # NodeJS backend server
│ ├── api/ # API-related files
│ │ ├── countries.js # Handling API routes for countries
│ │ ├── countryList.js # Handling API routes for country lists
│ ├── node_modules/ # Node modules and dependencies
│ ├── index.js # Express server configuration
│ ├── package-lock.json # Dependency control file for ensuring consistent package versions
│ ├── package.json # NodeJS project configuration
│ └── vercel.json # Vercel deployments configuration

├── frontend/ # React frontend application
│ ├── node_modules/ # Node modules and dependencies
│ ├── public/ # Public assets
│ ├── src/ # Source code
│ │ ├── components/ # React components
│ │ │     ├── ApiData / # ApiData components
│ │ │     │      ├── index.jsx / # ApiData jsx file
│ │ │     │      ├── style.css / # ApiData css file
│ │ │     ├── countryListPopup/ # countryListPopup components
│ │ │     │      ├── index.jsx / # countryListPopup jsx file
│ │ │     │      ├── style.css / # countryListPopup css file
│ │ │     ├── Footer / # Footer components
│ │ │     │      ├── index.jsx / # Footer jsx file
│ │ │     │      ├── style.css / # Footer css file
│ │ │     ├── header/ # header components
│ │ │     │      ├── index.jsx / # header jsx file
│ │ │     │      ├── style.css / # header css file
│ │ │     ├── search/ # search components
│ │ │     │      ├── index.jsx / # search jsx file
│ │ │     │      ├── style.css / # search css file
│ │ ├── App.css
│ │ ├── App.js  # Main React application component
│ │ ├── App.test.js
│ │ ├── index.css
│ │ ├── index.js
│ │ ├── logo.svg
│ │ ├── reportWebVitals.js
│ │ ├── setupTests.js
│ ├── .gitignore # Git ignore file
│ ├── package-lock.json # Dependency control file for ensuring consistent package versions
│ ├── package.json # React project configuration

├── README.md # For Project documentation

```

# Component Structure

## Search Component

The `Search` component is responsible for allowing users to search for country information. It integrates with a backend API to fetch details about the entered country name and displays relevant information. Additionally, it provides a popup feature to view more details about a selected country.

```jsx
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
          "https://vercel-development-backend.vercel.app/api/countries/" +
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
```

### State Variables

- `countryname`: Holds the user-entered country name for searching.
- `selectedCountry`: Stores the details of the selected country.
- `CountryInformation`: Keeps additional information about the selected country for popup display.
- `isClicked`: Represents whether the user has clicked on a country.
- `loading`: Indicates whether data is currently being fetched.
- `ErrorMessage`: Stores error messages, if any.

### Functions

- **`handleSubmit`**: Triggers the country search when the user submits the form. It makes an API call to retrieve information based on the entered country name and updates the state accordingly.

- **`CountryMoreDetails`**: Sets the `CountryInformation` state with details of the selected country, triggering the display of additional information in a popup.

- **`closePopup`**: Closes the popup by resetting the `CountryInformation` state.

## Usage

```jsx
import Search from './Search';

const App = () => {
  return (
    <div>
      <Search />
    </div>
  );
};

export default App;



## Deployment

```

This project is deployed using Vercel with GitHub integration.

Follow these steps to deploy the application using Vercel and GitHub:

1. Vercel Account:
   sign up at [https://vercel.com].

2. Install Vercel:

```sh
   npm install -g vercel
   Login to Vercel:
   login to your Vercel account
```

GitHub repository contains a vercel.json configuration file for custom configuration settings.

when changes are pushed to GitHub repository, follow these steps:

- Go to the Vercel Dashboard.
- Scroll down to the "GitHub" section and click "Install" to link your Vercel project with your GitHub repository.
- import the project and select root directory of the project and deploy project
- Once the deployment is complete, Vercel will provide you with a live URL. Access your deployed application using this [https://vercel-development-frontend.vercel.app/].

```

## Project photos

```

![Project photo](https://github.com/Prachimirkute/vercel-development/blob/main/frontend/public/photo1.png)
![Project photo](https://github.com/Prachimirkute/vercel-development/blob/main/frontend/public/photo2.png)
![Project photo](https://github.com/Prachimirkute/vercel-development/blob/main/frontend/public/photo3.png)
![Project photo](https://github.com/Prachimirkute/vercel-development/blob/main/frontend/public/photo4.png)
![Project photo](https://github.com/Prachimirkute/vercel-development/blob/main/frontend/public/photo5.png)

```

```
