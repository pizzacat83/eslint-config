module.exports = {
  "plugins": [
    "@typescript-eslint",
  ],
  "parser": "@typescript-eslint/parser",
  "settings": {
    "import/resolver": {
      "typescript": {},
    },
  },
  "rules": {
    // adjust rules for TypeScript
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": "error",

    "indent": "off",
    "@typescript-eslint/indent": ["warn", 2, { "SwitchCase": 1 }],

    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": "error",

    "quotes": "off",
    "@typescript-eslint/quotes": [
      "warn",
      "single",
    ],

    "object-curly-spacing": "off",
    "@typescript-eslint/object-curly-spacing": [
      "warn",
      "always",
    ],

    "lines-between-class-members": "off",
    "@typescript-eslint/lines-between-class-members": [
      "warn",
      "always",
      {
        "exceptAfterSingleLine": true,
      },
    ],

    "keyword-spacing": "off",
    "@typescript-eslint/keyword-spacing": [
      "warn",
      {
        "before": true,
        "after": true,
      },
    ],

    "comma-dangle": "off",
    "@typescript-eslint/comma-dangle": [
      "warn",
      {
        "arrays": "always-multiline",
        "objects": "always-multiline",
        "imports": "always-multiline",
        "exports": "always-multiline",
        "functions": "always-multiline",
      },
    ],

    "no-useless-constructor": "off",
    "@typescript-eslint/no-useless-constructor": [
      "error",
    ],

    "brace-style": "off",
    "@typescript-eslint/brace-style": [
      "error",
      "1tbs",
      {
        "allowSingleLine": true,
      },
    ],

    "comma-spacing": "off",
    "@typescript-eslint/comma-spacing": [
      "error",
      {
        "before": false,
        "after": true,
      },
    ],

    "func-call-spacing": "off",
    "@typescript-eslint/func-call-spacing": [
      "error",
      "never",
    ],

    "semi": "off",
    "@typescript-eslint/semi": "warn",

    "space-before-function-paren": "off",
    "@typescript-eslint/space-before-function-paren": [
      "error",
      {
        "anonymous": "always",
        "named": "never",
        "asyncArrow": "always",
      },
    ],

    "space-infix-ops": "off",
    "@typescript-eslint/space-infix-ops": [
      "error",
    ],

    "dot-notation": "off",
    "@typescript-eslint/dot-notation": [
      "error",
      {
        "allowKeywords": true,
        "allowPattern": "",
      },
    ],

    "no-loop-func": "off",
    "@typescript-eslint/no-loop-func": [
      "error",
    ],

    "no-throw-literal": "off",
    "@typescript-eslint/no-throw-literal": [
      "error",
    ],

    "no-unused-expressions": "off",
    "@typescript-eslint/no-unused-expressions": [
      "error",
      {
        "allowShortCircuit": false,
        "allowTernary": false,
        "allowTaggedTemplates": false,
        "enforceForJSX": false,
      },
    ],

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

    "@typescript-eslint/consistent-type-imports": "warn",

    // Detecting Problems

    "no-var": "error",

    "prefer-spread": "error",

    "prefer-rest-params": "error",

    "@typescript-eslint/restrict-template-expressions": ["error", { "allowNumber": true }],

    "@typescript-eslint/no-floating-promises": ["error"],
  },
};
