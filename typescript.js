module.exports = {
  "extends": [
    "plugin:@typescript-eslint/recommended",
    "./index.js",
  ],
  "plugins": [
    "@typescript-eslint",
  ],
  "parser": "@typescript-eslint/parser",
  "rules": {
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/restrict-template-expressions": ["error", { "allowNumber": true }],
  },
};
