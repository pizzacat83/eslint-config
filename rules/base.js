module.exports = {
  "extends": [
    "airbnb-base",
  ],
  "settings": {
    "import/resolver": {
      "node": {
        "extensions": [".js", ".ts", ".jsx", ".tsx"],
      },
    },
  },
  "rules": {
    "import/extensions": "off",
    "quotes": ["warn", "single"],
    "operator-linebreak": ["warn", "none", { "overrides": { "=": "after" } }],
  },
};
