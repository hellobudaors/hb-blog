const path = require('path')
const createPaginatedPages = require("gatsby-paginate")

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions

    const loadGhostPosts = new Promise((resolve, reject) => {
        graphql(`
        {
            allGhostPost(sort: { fields: [published_at], order: DESC}) {
                edges {
                    node {
                        id
                        slug
                        title
                        custom_excerpt
                        feature_image
                    }
                }
            }
        }
        `).then((result) => {
                createPaginatedPages({
                    edges: result.data.allGhostPost.edges,
                    createPage: createPage,
                    pageTemplate: "src/templates/index.js",
                    pageLength: 6, // This is optional and defaults to 10 if not used
                    pathPrefix: "", // This is optional and defaults to an empty string if not used
                    context: {} // This is optional and defaults to an empty object if not used
                });

                result.data.allGhostPost.edges.forEach(({ node }) => {

                    createPage({
                        path: `/posts/${node.slug}`,
                        component: path.resolve(`./src/templates/post.js`),
                        context: {
                            id: node.id,
                            slug: node.slug,
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
            allGhostTag {
                edges {
                    node {
                        id
                        slug
                        name
                    }
                }
            }
        }
        `).then((result) => {
            result.data.allGhostTag.edges.forEach(({ node }) => {
                createPage({
                    path: `/archives/${node.slug}`,
                    component: path.resolve(`./src/templates/archive.js`),
                    context: {
                        id: node.id,
                        slug: node.slug,
                        tag: node.name,
                    },
                })
            })
            resolve()
        }).catch(() => {
            resolve()
        })
    })

    return Promise.all([loadGhostPosts, generateArchives])
}
