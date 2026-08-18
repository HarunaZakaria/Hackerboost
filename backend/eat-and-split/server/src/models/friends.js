// models/Friend.js
import mongoose from "mongoose";

//schema
const friendSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A friend must have a name"],
  },
  image: {
    type: String,
    default: "https://i.pravatar.cc/100", // Default avatar
  },
  balance: {
    type: Number,
    default: 0,
    min: 0,
  },
});

// model
const friendModel = mongoose.model("Friend", friendSchema);

module.exports = friendModel;
