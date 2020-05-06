const withSass = require('@zeit/next-sass');
module.exports = withSass({
    cssModules: true,
    publicRuntimeConfig: {
        API_URL: process.env.API_URL
    }
});
const env = require("/env-var.env");
module.exports = env();
const WebFontConfig = require('webfont-loader');
module.exports = WebFontConfig({
    google: {
        families: ['Open Sans']
    },
    timeout: 2000
});
