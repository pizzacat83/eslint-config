module.exports = {
    "plugins": [
        "@typescript-eslint",
    ],
    "parser": "@typescript-eslint/parser",
    "rules": {
        // allow prefix __ for exhaustive check
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": ["error", { "varsIgnorePattern": "^__" }],

        "camelcase": "off",
        "@typescript-eslint/camelcase": "off",
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

        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/restrict-template-expressions": ["error", { "allowNumber": true }],

        "@typescript-eslint/no-floating-promises": ["error"],

        // Use const x: T = { hoge: 'fuga' }; instead of const x = { hoge: 'fuga' } as T;
        // tsc won't raise errors to the latter code, so eslint checks it.
        // I prefer obj as T to <T>obj because the latter looks like generics.
        "@typescript-eslint/consistent-type-assertions": ["error", {
            "assertionStyle": "as",
            "objectLiteralTypeAssertions": "never",
        }],
    },
};
