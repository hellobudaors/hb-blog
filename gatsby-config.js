require('dotenv').config()

module.exports = {
    siteMetadata: {
        title: 'Gatsby Starter Blog',
    },
    plugins: [
        /*
        * Gatsby's data processing layer begins with “source”
        * plugins. Here the site sources its data from prismic.io.
        */
        {
            resolve: "gatsby-source-prismic",
            options: {
                // The name of your prismic.io repository. This is required.
                // Example: 'gatsby-source-prismic-test-site' if your prismic.io address
                // is 'gatsby-source-prismic-test-site.prismic.io'.
                repositoryName: "hello-budaors",

                // An API access token to your prismic.io repository. This is required.
                // You can generate an access token in the "API & Security" section of
                // your repository settings. Setting a "Callback URL" is not necessary.
                // The token will be listed under "Permanent access tokens".
                accessToken: process.env.ACCESS_TOKEN,

                // Set a link resolver function used to process links in your content.
                // Fields with rich text formatting or links to internal content use this
                // function to generate the correct link URL.
                // The document node, field key (i.e. API ID), and field value are
                // provided to the function, as seen below. This allows you to use
                // different link resolver logic for each field if necessary.
                // See: https://prismic.io/docs/javascript/query-the-api/link-resolving
                linkResolver: ({ node, key, value }) => doc => {

                    // Resolves blog post links in content
                    if (doc.type === `blog_post`) return `/posts/` + doc.slug

                    // Fallback for other types, in case new custom types get created
                    return `/`
                },

                // Set an HTML serializer function used to process formatted content.
                // Fields with rich text formatting use this function to generate the
                // correct HTML.
                // The document node, field key (i.e. API ID), and field value are
                // provided to the function, as seen below. This allows you to use
                // different HTML serializer logic for each field if necessary.
                // See: https://prismic.io/docs/nodejs/beyond-the-api/html-serializer
                htmlSerializer: ({ node, key, value }) => (
                    (type, element, content, children) => {
                        // Your HTML serializer
                    }
                )
            }
        },
        'gatsby-plugin-react-helmet',
    ]
}