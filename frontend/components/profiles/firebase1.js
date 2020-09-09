if (process.env.NODE_ENV === "production") {
  module.exports = require("./firebase3");
} else {
  module.exports = require("./firebase2");
}
