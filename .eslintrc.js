module.exports = {
  root: true,
  parserOptions: {
    parser: "babel-eslint"
  },
  env: {
    browser: true,
    node: true,
    mocha: true
  },
  globals: {
    expect: true
  },
  extends: ["plugin:vue/essential", "prettier"],
  plugins: ["vue", "prettier"],
  rules: {
    "generator-star-spacing": "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    quotes: [2, "double"],
    "prettier/prettier": ["error"]
  }
};
