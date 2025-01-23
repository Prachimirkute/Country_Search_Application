## Search Country Information Application

A simple application to fetch and display information about a country.[Run Project](https://country-search-application-frontend-varcelgit.vercel.app/)

## Technologies Used

- Frontend : React
- Backend : Node.js , Express.js
- Deployment : vercel

## Discription

```
This project consists of a React frontend interface that allows users to input a country's name. The frontend makes requests to a NodeJS backend server, which is Fetch all Country Information and the specified Country Information from the countries API. The retrieved information is then rendered back to the user in an easily understandable format.

1. Fetch All Country Information from the Backend:
   When the frontend application loads, you can make an initial request to the backend endpoint that fetches information for all countries. This information can be stored on the frontend and used to quickly display details when users search for a specific country.
 - Create a backend endpoint (api/countryList) that fetches information for all countries.
 - On the frontend, make an initial API request to this endpoint when the application loads and display all   frontend data.

2. User-Friendly Interface to Input a Country Name:
   Provide a simple and user-friendly input field in the frontend where users can type the name of the country they want to search.
   - Use a text input field in the frontend for users to enter the country name.

3. Quickly Display Specific Country Information:
   When a user enters a country name, the frontend should quickly display relevant information about that.
   - Use asynchronous requests to the backend (api/countries) when the user enters a country name.
     Dynamically update the frontend interface to display relevant information.

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

The React development server will be running on https://country-search-application-frontend.vercel.app
Open your browser and navigate to https://country-search-application-frontend.vercel.app to use the application.

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

## Component Structure

### Application Structure

The App component is the main entry point of your application. It organizes the structure of your app by incorporating various components.

### ApiData Component

The ApiData component fetches a list of countries from an external API and displays basic information about each country. It provides functionality to view more details about a selected country in a popup.

#### State Variables

- `CountryInformation`: Holds additional information about the selected country for popup display.
- `countries`: Stores an array of country data retrieved from the API.
- `ErrorMessage`: Stores error messages, if any.

#### Functions

- `CountryMoreDetails`: Sets the CountryInformation state with details of the selected country, triggering the display of additional information in a popup.
- `closePopup`: Closes the popup by resetting the CountryInformation state.

### CountryListPopup Component

The CountryListPopup component displays detailed information about a selected country in a popup. It covers various aspects such as official name, capital, currency, region, subregion, population, languages, native names, alternate spellings, and translations.

- `countryData`: The detailed information about the selected country.
- `onClose`: A function to close the popup.

### Search Component

The `Search` component is responsible for allowing users to search for country information. It integrates with a backend API to fetch details about the entered country name and displays relevant information. Additionally, it provides a popup feature to view more details about a selected country.

#### State Variables

- `countryname`: Holds the user-entered country name for searching.
- `selectedCountry`: Stores the details of the selected country.
- `CountryInformation`: Keeps additional information about the selected country for popup display.
- `isClicked`: Represents whether the user has clicked on a country.
- `loading`: Indicates whether data is currently being fetched.
- `ErrorMessage`: Stores error messages, if any.

#### Functions

- **`handleSubmit`**: Triggers the country search when the user submits the form. It makes an API call to retrieve information based on the entered country name and updates the state accordingly.

- **`CountryMoreDetails`**: Sets the `CountryInformation` state with details of the selected country, triggering the display of additional information in a popup.

- **`closePopup`**: Closes the popup by resetting the `CountryInformation` state.

### Header Component

The Header component represents the header section of your application. It includes a logo,

### Footer Component

The Footer component represents the footer section of your application, including copyright information and social media links.

## Deployment

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
- Once the deployment is complete, Vercel will provide you with a live URL. Access your deployed application using this [https://country-search-application-azure.vercel.app].

## Project photos

![Project photo](https://github.com/Prachimirkute/vercel-development/blob/main/frontend/public/photo1.png)
![Project photo](https://github.com/Prachimirkute/vercel-development/blob/main/frontend/public/photo2.png)
![Project photo](https://github.com/Prachimirkute/vercel-development/blob/main/frontend/public/photo3.png)
![Project photo](https://github.com/Prachimirkute/vercel-development/blob/main/frontend/public/photo4.png)
![Project photo](https://github.com/Prachimirkute/vercel-development/blob/main/frontend/public/photo5.png)
