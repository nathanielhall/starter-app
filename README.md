# React Starter App

## Purpose

> The purpose of this repo is to create a starter app for future projects. In
> doing so, I plan to research the various options, and note my findings.

### Linting

Options

- TSLint (will be deprecated soon)
- typescript-eslint (transpile using TypeScript)
- [babel-eslint](https://www.npmjs.com/package/babel-eslint) (transpile using
  Babel)

Since TSLint is being deprecated soon and using ESLint provides many benefits
such as a large community, TSLint can be ruled out as an option for me.

- [TSLint in 2019](https://medium.com/palantir/tslint-in-2019-1a144c2317a9)
- [The future of TypeScript on ESLint](https://eslint.org/blog/2019/01/future-typescript-eslint)

So, lets compare typescript-eslint and babel-eslint. The big difference here is
the transpiler used.

### Articles comparing Babel & TypeScript

- [TypeScript and Babel 7 \| TypeScript](https://devblogs.microsoft.com/typescript/typescript-and-babel-7/)
- [TypeScript With Babel: A Beautiful Marriage](https://iamturns.com/typescript-babel/)

- [Choosing between babel and typescript](https://blog.logrocket.com/choosing-between-babel-and-typescript-4ed1ad563e41/)
- [Github - Experimenting with babel..](https://github.com/manuelbieh/experimenting-with-babel-7-typescript-and-eslint)

### Testing

[How to setup Jest with Babel](https://www.wisdomgeek.com/development/web-developmenthow-to-setup-jest-typescript-babel-webpack-project/)

## Steps

### Packages

- React
- Babel(transpiler)
- TypeScript (Type-Checker)
- ESLint
- Webpack
- Jest & React Testing Library (coming soon)

-D, --save-dev: Package will appear in your devDependencies <br> -P,
--save-prod: Package will appear in your dependencies

### Step 1: Install React and TypeScript

Install React

```
npm i -P react react-dom
npm i -D @types/react @types/react-dom
```

Install TypeScript

```
npm i -D typescript
```

Create new file, _tsconfig.json_, and add configuration

```js

{
  "compilerOptions": {
    /* Basic Options */
    "target": "esnext"                  /* Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017','ES2018' or 'ESNEXT'. */,
    "module": "commonjs"                /* Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', or 'ESNext'. */,
    "jsx": "react"                      /* Specify JSX code generation: 'preserve', 'react-native', or 'react'. */,
    "declaration": true                 /* Generates corresponding '.d.ts' file. */,
    "outDir": "lib"                     /* Redirect output structure to the directory. */,

    /* Strict Type-Checking Options */
    "strict": true                      /* Enable all strict type-checking options. */,
    "noImplicitAny": true               /* Raise error on expressions and declarations with an implied 'any' type. */,

    /* Additional Checks */
    "noUnusedLocals": true              /* Report errors on unused locals. */,
    "noUnusedParameters": true          /* Report errors on unused parameters. */,
    "noImplicitReturns": true           /* Report error when not all code paths in function return a value. */,
    "noFallthroughCasesInSwitch": true  /* Report errors for fallthrough cases in switch statement. */,

    /* Module Resolution Options */
    "moduleResolution": "node"            /* Specify module resolution strategy: 'node' (Node.js) or 'classic' (TypeScript pre-1.6). */,
    "allowSyntheticDefaultImports": true  /* Allow default imports from modules with no default export. This does not affect code emit, just typechecking. */,
    "esModuleInterop": true               /* Enables emit interoperability between CommonJS and ES Modules via creation of namespace objects for all imports. Implies 'allowSyntheticDefaultImports'. */
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}


```

### Step 2: Install & Configure Babel

Install

```
npm i -D @babel/core  @babel/preset-env babel-loader  @babel/preset-react  @babel/preset-typescript
npm i -D @babel/plugin-proposal-class-properties @babel/plugin-proposal-object-rest-spread @babel/plugin-proposal-numeric-separator
```

Create a new file, _.babelrc_, and add configuration

```js
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "modules": false,
        "targets": {
          "browsers": ["last 2 versions", "ie >= 9"]
        }
      }
    ],
    "@babel/preset-react",
    "@babel/preset-typescript"
  ],
  "plugins": [
    "@babel/proposal-class-properties",
    "@babel/proposal-object-rest-spread"
  ]
}
```

To test it...

```
npx babel ./src --out-dir lib --extensions ".ts,.tsx"
```

### Step 3: Install & Configure Webpack

Install webpack and the dev server

```
npm i -D webpack webpack-cli webpack-dev-server
```

Install a webpack plugin used to simplify creating HTML files.
[html-webpack-plugin - npm](https://www.npmjs.com/package/html-webpack-plugin)

```
npm i -D html-webpack-plugin
```

Create new file, webpack.config.js

Configure

```js
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const APP_PATH = path.resolve(__dirname, 'src')

module.exports = {
  entry: APP_PATH,

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },

  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: path.join(APP_PATH, 'index.html'),
    }),
  ],
}
```

### Step 5: Install ESLint

Install eslint & babel-eslint (TypeScript Support!)

```
npm i -D eslint babel-eslint
```

install plugins

```
npm i -D eslint-plugin-prettier eslint-config-prettier eslint-plugin-import eslint-plugin-react eslint-plugin-react-hooks
```

Create file, _.eslintrc.js_, and add configuration

```js
module.exports = {
  parser: 'babel-eslint',
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  parserOptions: {
    plugins: ['typescript'],
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },
  extends: [
    'eslint:recommended',
    'prettier',
    'prettier/react',
    'plugin:react/recommended',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: ['react', 'react-hooks', 'import', 'prettier'],
  rules: {
    'no-unexpected-multiline': 'error',
    'react/prop-types': 'off',
    'react/jsx-indent': [2, 2],
    'react/no-unused-prop-types': 2,
    'react-hooks/rules-of-hooks': 'error',
  },
}
```

### Resources:
