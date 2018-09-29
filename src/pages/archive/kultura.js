import React from 'react'
import Layout from '../../components/layout'
import PostList from '../../components/post-list'
import { graphql } from 'gatsby'

export default ({ data }) => (
    <Layout>
        <PostList>{ data }</PostList>
    </Layout>
)

export const query = graphql`
{
    allPrismicBlogPost(filter: { tags: {in: "Kultúra"}},
                        sort: { fields: [first_publication_date], order: DESC}) {
    edges {
        node {
        id
        slugs
        data {
            title {
                text
            }
            post_type
            excerpt {
                text
            }
            feature_image {
                alt
                copyright
                url
            }
        }
        }
    }
    }
}
`