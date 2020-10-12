// next.config.js
const withPlugins = require("next-compose-plugins")
const withOptimizedImages = require("next-optimized-images")
//const withSass = require("@zeit/next-sass")
//const withCss = require('@zeit/next-css')
//const withPurgeCss = require("next-purgecss")

module.exports = withPlugins([[withOptimizedImages, {}]])
