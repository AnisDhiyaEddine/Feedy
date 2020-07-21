const mongoose = require("mongoose");
const { Schema } = mongoose;

let recipientSchema = new Schema({
  email: { type: String, tolowercase: true },
  clicked: {
    type: Boolean,
    default: false,
  },
});

module.exports = recipientSchema;
