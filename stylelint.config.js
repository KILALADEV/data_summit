/** @type {import('stylelint').Config} */
export default {
  extends: [
    "stylelint-config-standard-scss",
    "stylelint-config-tailwindcss",
    "stylelint-config-recess-order",
  ],
  plugins: ["stylelint-scss"],
  ignoreFiles: ["dist/**/*", "node_modules/**/*"],
  rules: {
    "at-rule-no-unknown": null,

    "scss/at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: [
          "tailwind",
          "layer",
          "apply",
          "config",
          "theme",
          "use",
          "forward",
          "import",
          "include",
          "mixin",
          "function",
        ],
      },
    ],

    // ✅ FIX LỖI px2rem
    "function-no-unknown": [
      true,
      {
        ignoreFunctions: ["px2rem", "type-of", "str-index", "str-replace", "div"],
      },
    ],

    "scss/selector-no-redundant-nesting-selector": true,
    "at-rule-no-deprecated": null,
    "font-family-name-quotes": "always-unless-keyword",
    "keyframes-name-pattern": null,
    "alpha-value-notation": "number",

    "selector-class-pattern": [
      "^([a-z][a-z0-9]*)(-[a-z0-9]+)*(__[a-z0-9]+(-[a-z0-9]+)*)?(--[a-z0-9]+(-[a-z0-9]+)*)?$",
      {
        message:
          "Expected class selector to be kebab-case or BEM pattern (block__element--modifier)",
      },
    ],
  },
};
