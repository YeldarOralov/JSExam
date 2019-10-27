const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  name: {
    type: String,
    unique: true
  },
  price: {
    type: Number
  }
});

const ProductModel = mongoose.model('products', ProductSchema);
module.exports = ProductModel;