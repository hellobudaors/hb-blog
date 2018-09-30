const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions

    const loadHomePosts = new Promise((resolve, reject) => {
        graphql(`
        {
            allPrismicBlogPost {
                edges {
                    node {
                        id
                        slugs
                    }
                }
            }
        }
        `).then((result) => {
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
