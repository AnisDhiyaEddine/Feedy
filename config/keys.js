if (process.env.NODE_ENV === "prod") {
  module.exports = require("./prod");
} else if (process.env.NODE_ENV === "dev") {
  module.exports = require("./dev");
}
