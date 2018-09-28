const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions

    const loadPosts = new Promise((resolve, reject) => {
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
                createPage({
                    path: `/posts/${node.slugs}`,
                    component: path.resolve(`./src/templates/post.js`),
                    context: {
                        id: node.id,
                        slug: `${node.slugs}`,
                    },
                })
            })
            resolve()
        }).catch(() => {
            resolve()
        })
    })

    return Promise.all([loadPosts])

//     const pages = await graphql(`
//     {
//       allPrismicPage {
//         edges {
//           node {
//             id
//             slugs
//           }
//         }
//       }
//     }
//   `)

//     pages.data.allPrismicPage.edges.forEach(edge => {
//         createPage({
//             path: `/${edge.node.uid}`,
//             component: path.resolve('./src/templates/post.js'),
//             context: {
//                 id: edge.node.id,
//             },
//         })
//     })
}