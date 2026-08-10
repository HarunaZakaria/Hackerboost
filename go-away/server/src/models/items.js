const mongoose = require("mongoose");

//items schema
const itemSchema = new mongoose.Schema({
  description: {
    type: String,
    require: [true, "an item must have a description"],
  },
  quantity: {
    type: Number,
    require: [true, "an item must have a quantity"],
    min: [1, "quantity mmust be minimum of one"],
  },
  packed: {
    type: Boolean,
    default: false,
  },
});

//items model
const itemModel = mongoose.model("Item", itemSchema);

module.exports = itemModel;
