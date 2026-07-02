const express = require('express');
const router = express.Router();
const Attraction = require('../models/Attraction');

router.get('/', async (req, res) => {
  try {
    const attractions = await Attraction.find({});
    res.json(attractions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;