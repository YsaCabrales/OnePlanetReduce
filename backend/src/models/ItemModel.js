const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true 
  },
  description: { 
    type: String, 
    required: true 
  },
  category: {
    type: String,
    enum: [
        'Fashion', 
        'Bathroom', 
        'Kitchen',
        'Bedroom',
        'Office',
        'Children',
        'Food and Drinks',
        'Gifts',
        'Hobbies',
        'Cleaning',
        'Beauty and Self Care',
        'Pets',
        'Other'
    ],
    required: true,
  },
  image: {
    type: String, 
    required: true,
  },
  ecoFriendlyAlternatives: {
    name: [String], 
    default: [],
  },
  environmentalImpactScore: {
    type: Number,
    required: true,
  }
});

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;