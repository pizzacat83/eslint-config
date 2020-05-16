module.exports = {
    "extends": [
        "airbnb-base",
    ],
    "settings": {
        "import/resolver": {
            "node": {
                "extensions": [".js", ".ts", ".jsx", ".tsx"],
            },
        },
    },
    "rules": {
        "indent": ["warn", 4, { "SwitchCase": 1 }],
        "max-len": ["warn", 100],
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
    },
};
