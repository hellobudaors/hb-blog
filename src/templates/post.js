import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Post from "../components/post"

export default ({ data }) => {
    const post = data.ghostPost    

    return (
        <Layout>
            <Post data={ post } html={ true } />
        </Layout>
    )
}

export const query = graphql`
query($id: String!) {
    ghostPost(id: {eq: $id}) {
        id
        title
        html
        feature_image
        tags {
            slug
        }
    }
}
`