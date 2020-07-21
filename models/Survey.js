const mongoose = require("mongoose");
const recipientSchema = require("./Recipient");
const Schema = mongoose.Schema;

const surveySchema = new Schema({
  title: String,
  body: String,
  subject: String,
  yes: {
    Type: Number,
    default: 0,
  },
  no: {
    Type: Number,
    default: 0,
  },
  recipients: [recipientSchema],
  _user: { type: Schema.Types.ObjectId, ref: "User" },
  dateSent: Date,
  lastResponded: Date,   
});

mongoose.model("surveys", surveySchema);
