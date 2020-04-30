const withSass = require('@zeit/next-sass');
module.exports = {
    publicRuntimeConfig: {
        API_URL: process.env.API_URL,
    }
};

module.exports = withSass({
    cssModules: true
});

WebFontConfig = {
    google: {
        families: ['Open Sans']
    },
    timeout: 2000
};

