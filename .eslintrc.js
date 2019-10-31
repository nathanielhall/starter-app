module.exports = {
  parser: 'babel-eslint',
  env: {
    es6: true,
    browser: true,
    node: true,
    jest: true
  },
  parserOptions: {
    plugins: ['typescript'],
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true // Allows for the parsing of JSX
    }
  },
  extends: [
    'eslint:recommended',
    'prettier',
    'prettier/react',
    'plugin:react/recommended'
  ],
  settings: {
    react: {
      version: 'detect'
    }
  },
  plugins: ['react', 'react-hooks', 'import', 'prettier'],
  rules: {
    'no-unexpected-multiline': 'error',
    'react/prop-types': 'off',
    'react/jsx-indent': [2, 2],
    'react/no-unused-prop-types': 2,
    'react-hooks/rules-of-hooks': 'error'
  }
}
