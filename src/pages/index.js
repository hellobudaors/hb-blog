import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => (
    <Layout>
        <h1>Test Prismic Blog</h1>
        {data.allPrismicBlogPost.edges.map(({node}) => (
            <div>
                <Link to={ `/posts/${node.slugs}` }>{ node.data.title.text }</Link>
            </div>
        ))}
    </Layout>
)

export const query = graphql`
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
        }
      }
    }
  }
}
`