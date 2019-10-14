# React Starter App

I'm in the process of creating my own recipe for starter apps. This is a work in
progress! I hope to finish it up soon.

Recipe

- React
- Babel(transpiler)
- TypeScript (Type-Checker)
- ESLint
- Webpack
- Jest & React Testing Library (coming soon)

-D, --save-dev: Package will appear in your devDependencies -P, --save-prod:
Package will appear in your dependencies

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

```

{
  "compilerOptions": {
    /* Basic Options */
    "target": "esnext" /* Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017','ES2018' or 'ESNEXT'. */,
    "module": "commonjs" /* Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', or 'ESNext'. */,
    "jsx": "react" /* Specify JSX code generation: 'preserve', 'react-native', or 'react'. */,
    "declaration": true /* Generates corresponding '.d.ts' file. */,
    "outDir": "lib" /* Redirect output structure to the directory. */,

    /* Strict Type-Checking Options */
    "strict": true /* Enable all strict type-checking options. */,
    "noImplicitAny": true /* Raise error on expressions and declarations with an implied 'any' type. */,

    /* Additional Checks */
    "noUnusedLocals": true /* Report errors on unused locals. */,
    "noUnusedParameters": true /* Report errors on unused parameters. */,
    "noImplicitReturns": true /* Report error when not all code paths in function return a value. */,
    "noFallthroughCasesInSwitch": true /* Report errors for fallthrough cases in switch statement. */,

    /* Module Resolution Options */
    "moduleResolution": "node" /* Specify module resolution strategy: 'node' (Node.js) or 'classic' (TypeScript pre-1.6). */,
    "allowSyntheticDefaultImports": true /* Allow default imports from modules with no default export. This does not affect code emit, just typechecking. */,
    "esModuleInterop": true /* Enables emit interoperability between CommonJS and ES Modules via creation of namespace objects for all imports. Implies 'allowSyntheticDefaultImports'. */
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

```
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

```
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

```
module.exports = {
  parser: "babel-eslint",
  parserOptions: {
    plugins: ["typescript"],
    ecmaVersion: 2018,
    sourceType: "module"
  },
  rules: {
    "no-unexpected-multiline": "error"
  }
};

```

### Resources:

[TypeScript With Babel: A Beautiful Marriage](https://iamturns.com/typescript-babel/)

[TypeScript and Babel 7 \| TypeScript](https://devblogs.microsoft.com/typescript/typescript-and-babel-7/)

[GitHub - microsoft/TypeScript-Babel-Starter: A sample setup using Babel CLI to build TypeScript code, and using TypeScript for type-checking.](https://github.com/microsoft/TypeScript-Babel-Starter/)

[GitHub - manuelbieh/experimenting-with-babel-7-typescript-and-eslint: I want to use Babel features but with TypeScript for type checking. This seems to be an issue.](https://github.com/manuelbieh/experimenting-with-babel-7-typescript-and-eslint)

[GitHub - a-tarasyuk/react-webpack-typescript-babel: A sample setup using React, Webpack and Babel to build TypeScript code, and using TypeScript for type-checking.](https://github.com/a-tarasyuk/react-webpack-typescript-babel)
