module.exports = {
    siteMetadata: {
        title: 'Gatsby Starter Blog',
        author: 'Kyle Mathews',
        description: 'A starter blog demonstrating what Gatsby can do.',
        siteUrl: 'https://gatsbyjs.github.io/gatsby-starter-blog/',
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
                repositoryName: "hb-test-blog",

                // An API access token to your prismic.io repository. This is required.
                // You can generate an access token in the "API & Security" section of
                // your repository settings. Setting a "Callback URL" is not necessary.
                // The token will be listed under "Permanent access tokens".
                accessToken: "MC5XNjR1NWhFQUFDWUFVRERM.Qe-_ve-_vWlqau-_ve-_vUVzNmTvv73vv71577-977-9RO-_vXBq77-9a--_vQU3Xe-_vVw-77-9XQ",

                // Set a link resolver function used to process links in your content.
                // Fields with rich text formatting or links to internal content use this
                // function to generate the correct link URL.
                // The document node, field key (i.e. API ID), and field value are
                // provided to the function, as seen below. This allows you to use
                // different link resolver logic for each field if necessary.
                // See: https://prismic.io/docs/javascript/query-the-api/link-resolving
                linkResolver: ({ node, key, value }) => doc => {
                    // Your link resolver
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
        }
    ]
}