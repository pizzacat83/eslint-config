module.exports = {
  "extends": [
    "airbnb-base",
    "plugin:unicorn/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "./rules/base.js",
    "./rules/nodeapp.js",
    "./rules/typescript.js",
  ],
};
