const express = require("express");
const mongoose = require("mongoose");
const keys = require("./config/keys");
const passport = require("passport");
const cookieSession = require("cookie-session");
const bodyParser = require("body-parser");

require("./models/User");
require("./services/passport");

mongoose.connect(keys.mongoURI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const app = express();

app.use(bodyParser.json());

app.use(
  cookieSession({
    maxAge: 10 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
  })
);
app.use(passport.initialize());
app.use(passport.session());

require("./routes/auth-routes")(app);
require("./routes/billing-routes")(app);

app.get("/", (req, res) => {
  res.send({ env: process.env.NODE_ENV });
});

if (process.env.NODE_ENV != "development") {
  app.use(express.static(path.join(__dirname, "client/build")));
  let path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(__dirname, path.resolve("client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 3000;
app.listen(PORT);
