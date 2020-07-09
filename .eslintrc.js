module.exports = {
    "env": {
        "commonjs": true,
        "es2020": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 11
    },
    "rules": {
        "indent": ["error", 4],
        "linebreak-style": ["error", "windows"],
        "quotes": ["error", "double"],
        "semi": ["error", "always"],
        "space-infix-ops": ["error", { "int32Hint": false }],
        "key-spacing": ["error", { "beforeColon": false }],
        "curly": "error",
        "object-curly-spacing": ["error", "always"],
        "comma-spacing": ["error", { "before": false, "after": true }]
    }
};
