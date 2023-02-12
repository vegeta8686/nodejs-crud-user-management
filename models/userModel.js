const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "please enter a name"],
    },
    age: {
      type: Number,
      default: 25,
    },
  },
  { timestamps: true }
);

const USER = mongoose.model("USER", userSchema);

module.exports = USER;
