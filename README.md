# Javascript Module ECMAScript 6 (ECMA 2015)
Starter project with webpack without babel for generate automatic bundles for older browser compatibilities.

### Requirements
1. NodeJS 
2. Webpack
3. Babel

## Instructions
Those are quit straight forwards.
If you want to bundle your app just name it as following
* .mjs = ES6, 
* .cjs = CommonJS, 
* .js = NodeJS.

 ### Manual Bundle Process 
 ```js
//  I am unable to find if there is setting to give filename in manual cli
 // command at global webpack webpack-cli installed
 > $ webpack --entry ./app.js -o ./dist

 // command at local
 > $ npx webpack --entry ./app.js -o ./dist
 ```
You can also create ./webpack.config.js , ./.webpack/webpack.config.js file to automatic configuration, minimal example below
```js
const path = require('path');

module.exports = {
    mode: "production",
    entry: "./src/app.mjs",
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename : "app.bundle.js"
    }
};
```