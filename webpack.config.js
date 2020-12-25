const path = require('path');

module.exports = {
    mode: "production",
    entry: "./src/app.mjs",
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename : "app.bundle.js"
    }
};