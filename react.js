/* eslint quotes: ["error", "double"] */

module.exports = {
  "extends": [
    "airbnb",
    "./index.js",
  ],
  "rules": {
    "react/jsx-filename-extension": ["error", { "extensions": ["jsx", "tsx"] }],
    "react/jsx-props-no-spreading": "off",
  },
};
