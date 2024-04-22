const path = require('path')

module.exports = {
    mode: 'development',
    entry: {
        AdminPanel: ['./src/javaScript/index.js'],
        SignUp: ['./src/javaScript/signup.js'],
        Settings: ['./src/javaScript/settingsChange.js', './src/javaScript/script.js', './src/javaScript/logout.js'],
        Login: ['./src/javaScript/login.js']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    watch: true,
    devtool: false
}
