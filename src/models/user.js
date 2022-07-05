const mongoose = require("mongoose");
const validator = require('validator');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: [true, "Email is already taken"],
    validate(value) {
      if (validator.isEmail(value)) {
        throw new error("Invalid Email")
    }
    },
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  role: {
    type: String,
    required: true,
    trim: true,
  },
});

module.exports = mongoose.model("User", UserSchema);
