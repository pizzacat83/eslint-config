module.exports = {
  "extends": [
    "airbnb-base",
  ],
  "settings": {
    "import/resolver": {
      "node": {
        "extensions": [".js", ".ts", ".jsx", ".tsx"],
      },
      "typescript": {},
    },
  },
  "rules": {
    // Style

    "indent": ["warn", 2, { "SwitchCase": 1 }],
    "max-len": ["warn", 120],
    "import/extensions": "off",
    "quotes": ["warn", "single"],
    "operator-linebreak": ["warn", "none", {
      "overrides": {
        "=": "after",
        "?": "after",
        ":": "after",
      },
    }],
    "implicit-arrow-linebreak": "off",
    "arrow-parens": "off",
    "function-paren-newline": ["warn", "multiline-arguments"],
    "no-underscore-dangle": "off",
    "object-curly-spacing": ["warn", "always"],
    "import/no-default-export": ["warn"],
    "import/prefer-default-export": "off",
    "lines-between-class-members": ["warn", "always", { "exceptAfterSingleLine": true }],
    "keyword-spacing": ["warn", {
      "before": true,
      "after": true,
    }],
    "comma-dangle": ["warn", {
      "arrays": "always-multiline",
      "objects": "always-multiline",
      "imports": "always-multiline",
      "exports": "always-multiline",
      "functions": "always-multiline",
    }],
    "object-shorthand": "warn",
    "no-else-return": "off", // readability depends on the context
    "max-classes-per-file": "off",
    "no-multiple-empty-lines": ["warn", { "max": 2 }],

    // Detecting Problems

    // The await in the code below should not be removed, or the error won't be catched.
    // try {
    //     return await Promise.reject('fail');
    // } catch (e) {}
    // ESLint won't report this return-await as an issue :)
    // but won't report the code without await either :(
    // Having a habit of awaiting most of the promises prevents these cases,
    // and I give priority to preventing errors over improving performance.
    "no-return-await": "off",

    // I prefer explicitly initializing variables.
    "no-undef-init": "off",
  },
};
