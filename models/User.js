const { model, Mongoose } = require("mongoose");

const Schema = require("mongoose").Schema;

const userSchema = Schema({
  googleID: String,
});

module.exports = model("users", userSchema);
