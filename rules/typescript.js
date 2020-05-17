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
    },
};
