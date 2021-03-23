module.exports = {
  "extends": [
    "airbnb-base",
    "plugin:unicorn/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "./rules/base.js",
    "./rules/nodeapp.js",
  ],
};
