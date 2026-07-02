const mongoose = require('mongoose');

const attractionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: { type: String, required: true }, // UNESCO, Mughal, Fort, etc.
  description: { type: String, required: true },
  image: { type: String, required: true },
  openingHours: { type: String, required: true },
  entryFee: { type: String, required: true },
  mapsLink: { type: String, required: true },
  gallery: [{ type: String }]
}, { timestamps: true });

module.exports = mongoose.model('Attraction', attractionSchema);