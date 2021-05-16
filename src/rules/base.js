module.exports = {
  "settings": {
    "import/extensions": [".js", ".ts", ".jsx", ".tsx"],
  },
  "rules": {
    // Style

    "indent": ["warn", 2, { "SwitchCase": 1 }],
    "max-len": [
      "warn",
      {
        "code": 120,

        // I think it's better to have template literals look like the result string
        "ignoreTemplateLiterals": true,
      },
    ],
    "object-curly-newline": "off",
    "import/extensions": "off",
    "quotes": [
      "warn",
      "single",
      { "avoidEscape": true },
    ],
    "operator-linebreak": ["warn", "none", {
      "overrides": {
        "=": "after",
        "?": "after",
        ":": "after",
      },
    }],
    "implicit-arrow-linebreak": "off",
    "arrow-parens": "off",
    "arrow-body-style": "warn",
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

    "no-var": "error",
    "prefer-const": "error",

    "unicorn/better-regex": "warn",
    "unicorn/prefer-array-flat": "warn",
    "unicorn/prefer-array-flat-map": "warn",
    "unicorn/prefer-switch": "warn",
    "unicorn/prevent-abbreviations": "off", // a little verbose for me
    "unicorn/no-null": "off",

    // TODO: enable
    // temporarily disabled because this will introduce large change
    "unicorn/prefer-module": "off",

    // it is clear that spread operator does not mutate the original array
    "prefer-spread": "error",

    "prefer-rest-params": "error",

    "yoda": [
      "warn",
      "never",
      {
        // sometimes `if (/* small literal */ < /* large expression */)` is more comprehensible
        "onlyEquality": true,
      },
    ],
    "import/order": "warn",

    "no-irregular-whitespace": [
      "error",
      {
        // use escape sequences \u0000 in strings instead of raw irregular whitespaces
        // to make them not looking like normal whitespaces
        "skipStrings": false,
      },
    ],

    // Performance

    "unicorn/prefer-regexp-test": "warn",

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
