require('dotenv').config()

const cssNano = require(`cssnano`)
const autoprefixer = require(`autoprefixer`)
const easyImport = require(`postcss-easy-import`)
const postcssCustomMedia = require('postcss-custom-media')
const postcssColorMod = require('postcss-color-mod-function')
const cssVariables = require('postcss-css-variables')

module.exports = {
    siteMetadata: {
        title: 'Hello Budaörs',
    },
    plugins: [

        {
            resolve: `gatsby-source-ghost`,
            options: {
                apiUrl: `https://hellobudaors.ghost.io`,
                clientId: `ghost-frontend`,
                clientSecret: `e84b6bd2f7e3`
            }
        },

        'gatsby-plugin-react-helmet',
        {
            resolve: `gatsby-plugin-postcss`,
            options: {
                postCssPlugins: [
                    autoprefixer({ browsers: [`last 2 versions`] }),
                    easyImport(),
                    cssVariables(),
                    postcssColorMod(),
                    postcssCustomMedia(),
                    cssNano({zindex: false}),
                ],
            },
        },
    ]
}