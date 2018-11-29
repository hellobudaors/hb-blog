import React from "react"
import Layout from '../components/layout'
import {graphql} from "gatsby"

const netlifyIdentity = require(`netlify-identity-widget`)

class GhostPosts extends React.Component {

    constructor(data) {
        super(data)

        this.state = {
            posts: [],
        }
    }

    getPosts() {
        return netlifyIdentity.currentUser() != null
            ? this.props.data.allGhostPost.edges
            : this.props.data.allGhostPost.edges
                .filter(x => !x.node.featured)
        // return this.props.data.allGhostPost.edges
    }

    
    updatePosts() {
        this.setState({ posts: this.getPosts() })
    }
    
    componentDidMount() {
        netlifyIdentity.on(`login`, user => this.updatePosts())
        netlifyIdentity.on(`logout`, () => this.updatePosts())
        this.updatePosts()
    }

    render() {
        return (
            <Layout>
                <main className="site-main outer">
                    <div className="inner">
                        <div className="post-feed">
                            { this.state.posts.map(({ node }) =>
                                <div key={node.id}>{ node.title }</div>
                            ) }
                        </div>
                    </div>
                </main>
            </Layout>
        )
    }

}

export default GhostPosts

// export const pageQuery = graphql`
//     query MemberPostsQuery {
//         allGhostPost(
//             sort: { order: DESC, fields: [published_at] }
//             limit: 10
//         ) {
//             edges {
//                 node {
//                     id
//                     slug
//                     title
//                     featured
//                     feature_image
//                     custom_excerpt
//                     plaintext
//                     publishedAt: published_at(formatString: "DD MMMM, YYYY")
//                     tags {
//                         name
//                         slug
//                     }
//                     authors {
//                         name
//                         slug
//                     }
//                 }
//             }
//         }
//     }
// `