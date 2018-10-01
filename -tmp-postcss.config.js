// in postcss.config.js
const cssNano = require(`cssnano`)
const postcssCustomMedia = require('postcss-custom-media');
const postcssColorMod = require('postcss-color-mod-function')

module.exports = () => ({
    plugins: [
        postcssCustomMedia(),
        postcssColorMod(),
        cssNano({ preset: `default`, }),
    ],
})