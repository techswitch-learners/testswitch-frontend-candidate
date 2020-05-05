const withSass = require('@zeit/next-sass');
module.exports = withSass({
    cssModules: true,
    publicRuntimeConfig: {
        API_URL: process.env.API_URL
    }
});

WebFontConfig = {
    google: {
        families: ['Open Sans']
    },
    timeout: 2000
};
