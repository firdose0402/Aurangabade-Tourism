const express = require('express');
const router = express.Router();
const Food = require('../models/Food');

router.get('/', async (req, res) => {
  try {
    const food = await Food.find({});
    res.json(food);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;