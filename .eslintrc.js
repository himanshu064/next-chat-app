module.exports = {
  extends: ["next", "prettier", "next/core-web-vitals"],
  plugins: ["react", "react-hooks", "prettier"],
  rules: {
    quotes: ["error", "double"],
    semi: ["error", "always"],
    "no-unused-vars": [
      "error",
      {
        args: "after-used",
        caughtErrors: "none",
        ignoreRestSiblings: true,
        vars: "all",
      },
    ],
    "prefer-const": "error",
    "react-hooks/exhaustive-deps": "error",
    "react-hooks/rules-of-hooks": "error",
    "react/prop-types": "error",
    "react/jsx-no-undef": "error",
    "react/jsx-fragments": "error",
    "react/jsx-uses-react": "error",
    "prefer-const": "error",
    "no-unused-vars": [
      "error",
      {
        args: "after-used",
        caughtErrors: "none",
        ignoreRestSiblings: true,
        vars: "all",
      },
    ],
    "react/self-closing-comp": "error",
    "no-console": "error",
  },
  ignorePatterns: ["node_modules/", ".next/"],
  settings: {
    react: {
      version: "detect",
    },
  },
};
