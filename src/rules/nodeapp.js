module.exports = {
  "rules": {
    // Detecting Problems

    // There's no problem to use console in Node apps.
    "no-console": "off",

    "no-restricted-syntax": [
      "error",
      // Most of the time this is mistaken for for-of.
      // (especially after playing with Python)
      "ForInStatement",

      // You don't need to care about polyfill in Node apps.
      // "ForOfStatement",

      "LabeledStatement",
      "WithStatement",
    ],
  },
};
