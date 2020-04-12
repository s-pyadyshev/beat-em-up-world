module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
      'max-len': 0,
      'react/jsx-filename-extension': 0,
      'react/prop-types': 0,
      'jsx-a11y/label-has-associated-control': 0,
      'react/jsx-props-no-spreading': 0,
      'no-underscore-dangle': 0,
      'linebreak-style': 0,
  },
};
