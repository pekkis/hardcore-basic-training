module.exports = {
  env: {
    es6: true,
    browser: false,
    node: true
  },
  extends: [
    "esnext",
    "esnext/style-guide",
    "node",
    "node/style-guide",
    "plugin:prettier/recommended"
  ],
  parser: "babel-eslint"
};
