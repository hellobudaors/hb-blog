import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Post from "../components/post"

export default ({ data }) => {
    const post = data.ghostPost,
            meta = data.site

    return (
        <Layout>
            <Post data={ post } meta={ meta } html={ true } />
        </Layout>
    )
}

export const query = graphql`
query($id: String!) {
    ghostPost(id: {eq: $id}) {
        id
        title
        html
        slug
        feature_image
        tags {
            slug
        }
    }
    site {
        siteMetadata {
            facebook {
                appId
            }
        }
    }
}
`