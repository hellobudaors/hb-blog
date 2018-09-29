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

    return Promise.all([loadHomePosts])
}


// {
//     allPrismicBlogPost(filter: { tags: { in: "Mini interjúk" } }) {
//         edges {
//             node {
//                 id
//                 slugs
//             }
//         }
//     }
// }