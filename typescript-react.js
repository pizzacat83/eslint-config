module.exports = {
  "extends": [
    "airbnb",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "./rules/base.js",
    "./rules/react.js",
    "./rules/typescript.js",
    "./rules/typescript-react.js",
  ],
};
