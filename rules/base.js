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
        // Style

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
    },
};
