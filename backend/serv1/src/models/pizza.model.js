const mongoose = require("mongoose");

//pizza schema
const pizzaSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "You must provide a pizza name"],
  },
  ingredients: {
    type: String,
    required: [true, "Pizza ingredient must be provided"],
  },
  price: {
    type: Number,
    min: 0,
    default: 0,
  },
  soldOut: {
    type: Boolean,
    default: false,
  },
  photoUrl: {
    type: String,
    required: [true, "Pizza photo must be provided"],
  },
});

//pizza model
const pizzaModel = mongoose.model("Pizza", pizzaSchema);

module.exports = pizzaModel;
