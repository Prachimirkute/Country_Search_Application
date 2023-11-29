const express = require('express');
const countryList = require('./api/countryList');
const countries = require('./api/countries');
const app = express();
const axios = require('axios');
const cors = require('cors');
const PORT = 3001;

app.use(cors()); 
app.use("/api/countryList", countryList);
app.use("/api/countries", countries);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
