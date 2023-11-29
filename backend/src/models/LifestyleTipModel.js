const mongoose = require('mongoose');

const lifestyleTipSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    enum: [
        'Kitchen',
        'Travel',
        'Shopping',
        'Water Consumption',
        'Energy Consumption',
        'Food and Drinks',
        'Other'
    ],
    required: true,
  },
  image: {
    type: String, 
    required: true,
  },
  environmentalImpactScore: {
    type: Number,
    required: true,
  }
});

const LifestyleTip = mongoose.model('LifestyleTip', lifestyleTipSchema);

module.exports = LifestyleTip;
