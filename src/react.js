/* eslint quotes: ["error", "double"] */

module.exports = {
  "extends": [
    "airbnb",
    "plugin:unicorn/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "./rules/base.js",
    "./rules/react.js",
  ],
};
