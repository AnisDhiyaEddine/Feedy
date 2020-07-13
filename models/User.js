const { model, Mongoose } = require("mongoose");

const Schema = require("mongoose").Schema;

const userSchema = Schema({ 
  credits: { type: Number, default: 0 },
  googleID: String,
});

module.exports = model("users", userSchema);
