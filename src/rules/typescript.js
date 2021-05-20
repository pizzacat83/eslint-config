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

    "quotes": "off",
    "@typescript-eslint/quotes": [
      "warn",
      "single",
      { "avoidEscape": true },
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

    // TypeScript itself can detect unused vars,
    // which seems more accurate than ESLint.
    // https://github.com/typescript-eslint/typescript-eslint/issues/122
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "off",

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

    "@typescript-eslint/consistent-type-imports": "warn",

    "@typescript-eslint/consistent-type-definitions": ["warn", "type"],

    "@typescript-eslint/no-require-imports": "warn",

    "@typescript-eslint/non-nullable-type-assertion-style": "warn",

    // Some check conflicts with TypeScript
    "unicorn/no-useless-undefined": "off",

    "@typescript-eslint/array-type": "warn",

    // node:* prefixed modules are not available in @types/node currently.
    // https://github.com/DefinitelyTyped/DefinitelyTyped/pull/52595
    "unicorn/prefer-node-protocol": "off",

    // TODO: remove this rule when it is enabled in base rule
    // this rule is disabled in base but there's no problem to enable this in TypeScript projects
    "unicorn/prefer-module": "warn",

    // Detecting Problems

    // I don't use `var` which causes confusing behavior.
    // TypeScript can detect usages of block scoped variables before declaration.
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": "off",

    "@typescript-eslint/restrict-template-expressions": ["error", { "allowNumber": true }],
    "@typescript-eslint/restrict-plus-operands": [
      "error",
      { "checkCompoundAssignments": true },
    ],
    "@typescript-eslint/no-base-to-string": "error",

    "@typescript-eslint/no-floating-promises": ["error"],

    "@typescript-eslint/no-confusing-non-null-assertion": ["error"],

    "@typescript-eslint/no-confusing-void-expression": ["error"],

    "@typescript-eslint/no-dynamic-delete": ["error"],

    // This rule seems nice, but it does not work well with exhaustive check.
    "@typescript-eslint/no-unnecessary-condition": "off",
  },
};
