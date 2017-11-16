var devConfig = require('./config.dev.js');
var productConfig = require('./config.product.js');
var isDev = process.env.NODE_ENV !== 'production';
console.log('process.env.NODE_ENV',process.env.NODE_ENV);
var config = isDev ? devConfig : productConfig;
module.exports = config;
