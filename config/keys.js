if (process.env.node_env === "production") {
  module.exports = require("./prod");
} else {
  module.exports = require("./dev");
}
