const withSass = require('@zeit/next-sass');
const withWebfonts = require('webfont-loader');
module.exports = withSass({
    cssModules: true
});
