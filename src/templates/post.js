import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Post from "../components/post"

export default ({ data }) => {
    const post = data.prismicBlogPost.data    

    return (
        <Layout>
            <Post data={ post } html={ true } />
        </Layout>
    )
}

export const query = graphql`
query($id: String!) {
    prismicBlogPost(id: {eq: $id}) {
        data {
            title {
                text
            }
            feature_image {
                alt
                copyright
                url
            }
            excerpt {
                html
                text
            }
            post_body {
                html
            }      
        }
    }
}
`