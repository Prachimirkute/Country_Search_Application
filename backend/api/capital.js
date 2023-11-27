const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/:country', async (req, res) => {
    const country = req.params.country;
    try {
      const response = await axios.get(`https://restcountries.com/v3.1/capital/${capital}`);
      debugger;
      const countryInfo = response.data[0];
       res.json(countryInfo);

    } catch (error) {
      console.error('Error fetching country information', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
    
  });
  module.exports = router;