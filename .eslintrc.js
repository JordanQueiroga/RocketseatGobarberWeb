module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true
  },
  extends: [
    'plugin:react/recommended',
    "airbnb",
    "prettier",
    "prettier/react"
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
    __DEV__: true
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: [
    'react',
    'prettier',
  ],
  rules: {
    "prettier/prettier": "error",
    "react/jsx-filename-extension": ["error", { extensions: [".js", ".jsx"] }],
    "import/prefer-default-export": "off",
    "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    "react/jsx-props-no-spreading": "off",
    "react/jsx-one-expression-per-line": "off",
    "global-require": "off",
    "react-native/no-raw-text": "off",
    "no-param-reassign": "off",
    "no-underscore-dangle": "off",
    camelcase: "off",
    "no-console": ["error", { allow: ["tron"] }],
    "react/state-in-constructor": "off",
    "react/static-property-placement": "off",
  },
  settings: {
    "import/resolver": {
      "babel-plugin-root-import": {
        rootPathSuffix: 'src',
      }
    }
  }

};
