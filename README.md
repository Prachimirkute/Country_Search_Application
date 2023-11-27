## Search Country Information Application

A simple application to fetch and display information about a country.

## Technologies Used

- Frontend : React
- Backend : Node.js , express.js
- Axios (for making HTTP requests)
- Deployment : vercel

## Discription

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

## Deployment

This project is deployed using Vercel with GitHub integration.

Follow these steps to deploy the application using Vercel and GitHub:

1. **Create a Vercel Account:**
   sign up at [https://vercel.com].

2. **Install Vercel CLI:**
   npm install -g vercel
   Login to Vercel:
   login to your Vercel account

GitHub repository contains a vercel.json configuration file for custom configuration settings.

when changes are pushed to GitHub repository, follow these steps:

- Go to the Vercel Dashboard.
- Scroll down to the "GitHub" section and click "Install" to link your Vercel project with your GitHub repository.
- import the project and select root directory of the project and deploy project
- Once the deployment is complete, Vercel will provide you with a live URL. Access your deployed application using this [https://vercel-development-frontend.vercel.app/].

```

```
