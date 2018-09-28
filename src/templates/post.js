import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => {
    const post = data.prismicBlogPost.data    

    return (
        <Layout>
            <h1>{ post.title.text }</h1>
            <section className="post-content" dangerouslySetInnerHTML={ {
                __html: post.post_body.html,
            } } />
        </Layout>
    )
}

export const query = graphql`
  query($id: String!) {
    prismicBlogPost(id: {eq: $id}) {
        data {
            title {
                html
                text
            }
            post_body {
                html
                text
            }
        }
    }
    }
`