const mongoose = require('mongoose');

const itemCategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String, 
    required: true,
  },
  items: {
    name: [String],
    default: []
  }
});

const ItemCategory = mongoose.model('ItemCategory', itemCategorySchema);

module.exports = ItemCategory;
