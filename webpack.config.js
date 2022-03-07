const path = require('path');

module.exports = {
    mode: 'development',
    entry: './public/js/src/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    watch: true
}