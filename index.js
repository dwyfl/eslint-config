module.exports = {
  "parser": require.resolve("babel-eslint"),
  "extends": ["eslint-config-airbnb", "prettier","./prettier-airbnb-compat"].map(require.resolve),
  "plugins": [
    "prettier"
  ],
  "rules": {
    "prettier/prettier": ["error", {"trailingComma": "es5", "singleQuote": true}],
    "react/sort-comp": 0,
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "react/no-unused-prop-types": 0,
    "no-undef": 0,
  }
}
