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
// app.get('/',  (req, res) => {
// res.send("server start");
// });

// app.get('/countries/:country', async (req, res) => {
//   const country = req.params.country;
//   try {
//     const response = await axios.get(`https://restcountries.com/v3.1/name/${country}?fullText=true`);
//     debugger;
//     const countryInfo = response.data[0];
//     const result = res.json(countryInfo);
//     res.send(result);
//   } catch (error) {
//     console.error('Error fetching country information', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
  
// });
// app.get('/api/countryList', async (req, res) => {
//   try {
//     const response = await axios.get('https://restcountries.com/v3.1/all');
//     const result = res.json(response.data);
//     res.send(result);
//   } catch (error) {
//     console.error('Error fetching country information', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
