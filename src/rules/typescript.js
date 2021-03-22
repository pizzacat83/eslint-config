module.exports = {
  "plugins": [
    "@typescript-eslint",
  ],
  "parser": "@typescript-eslint/parser",
  "rules": {
    // adjust rules for TypeScript
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": "error",

    "indent": "off",
    "@typescript-eslint/indent": ["warn", 2, { "SwitchCase": 1 }],

    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": "error",

    // Style

    // allow prefix __ for exhaustive check
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["error", { "varsIgnorePattern": "^__" }],

    "camelcase": "off",
    "@typescript-eslint/naming-convention": ["warn",
      {
        "selector": "default",
        "format": ["camelCase"],
        "leadingUnderscore": "allow",
        "trailingUnderscore": "allow",
      },
      {
        "selector": "typeLike",
        "format": ["PascalCase"],
      },
    ],

    "@typescript-eslint/no-namespace": ["error", { "allowDeclarations": true }],

    "@typescript-eslint/member-delimiter-style": ["warn"],

    // Use const x: T = { hoge: 'fuga' }; instead of const x = { hoge: 'fuga' } as T;
    // tsc won't raise errors to the latter code, so eslint checks it.
    // I prefer obj as T to <T>obj because the latter looks like generics.
    "@typescript-eslint/consistent-type-assertions": ["error", {
      "assertionStyle": "as",
      "objectLiteralTypeAssertions": "never",
    }],

    "@typescript-eslint/type-annotation-spacing": "warn",

    "prefer-const": "error",


    // Detecting Problems

    "no-var": "error",

    "prefer-spread": "error",

    "prefer-rest-params": "error",

    "@typescript-eslint/restrict-template-expressions": ["error", { "allowNumber": true }],

    "@typescript-eslint/no-floating-promises": ["error"],
  },
};
