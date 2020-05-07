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
        "import/extensions": "off",
        "quotes": ["warn", "single"],
        "operator-linebreak": ["warn", "none", { "overrides": { "=": "after" } }],
        "implicit-arrow-linebreak": "off",
        "arrow-parens": "off",
        "no-underscore-dangle": "off",
    },
};
