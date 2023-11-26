const express = require('express');
const axios = require('axios');
const router = express.Router();
router.get("/", async (req, res) => {
    try {
      const response = await axios.get('https://restcountries.com/v3.1/all');
     res.json(response.data);
    } catch (error) {
      console.error('Error fetching country information', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  module.exports = router;