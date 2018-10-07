const path = require('path')
const createPaginatedPages = require("gatsby-paginate")

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions

    const loadHomePosts = new Promise((resolve, reject) => {
        graphql(`
        {
            allPrismicBlogPost(sort: { fields: [first_publication_date], order: DESC}) {
                edges {
                node {
                    id
                    slugs
                    data {
                        title {
                            text
                        }
                        post_type
                        excerpt {
                            text
                        }
                        feature_image {
                            alt
                            copyright
                            url
                        }
                    }
                }
                }
            }
        }
        `).then((result) => {
            createPaginatedPages({
                edges: result.data.allPrismicBlogPost.edges,
                createPage: createPage,
                pageTemplate: "src/templates/index.js",
                pageLength: 6, // This is optional and defaults to 10 if not used
                pathPrefix: "", // This is optional and defaults to an empty string if not used
                context: {} // This is optional and defaults to an empty object if not used
            });

            result.data.allPrismicBlogPost.edges.forEach(({ node }) => {
                const slug = node.slugs[0]
                

                createPage({
                    path: `/posts/${slug}`,
                    component: path.resolve(`./src/templates/post.js`),
                    context: {
                        id: node.id,
                        slug: slug,
                    },
                })
            })
            resolve()
        }).catch(() => {
            resolve()
        })
    })

    const generateArchives = new Promise((resolve, reject) => {
        graphql(`
        {
            allPrismicTag {
                edges {
                    node {
                        id
                        prismicId
                        slugs
                        data {
                            tag
                        }
                    }
                }
            }
        }
        `).then((result) => {
                result.data.allPrismicTag.edges.forEach(({ node }) => {
                    const slug = node.slugs[0]
                    
                    createPage({
                        path: `/archives/${slug}`,
                        component: path.resolve(`./src/templates/archive.js`),
                        context: {
                            id: node.prismicId,
                            slug: slug,
                            tag: node.data.tag,
                        },
                    })
                })
                resolve()
            }).catch(() => {
                resolve()
            })
    })

    return Promise.all([loadHomePosts, generateArchives])
}
