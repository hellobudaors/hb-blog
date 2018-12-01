import React from 'react'
import Layout from '../components/layout'
import PostList from '../components/post-list'
import { graphql } from 'gatsby'
import { Styles } from '../components/styles';

class Archive extends React.Component {
    render() {
        const data = this.props.data

        return (
            <Layout>
                <div className={ Styles.page.xl + Styles.sideSpacing}>
                    <h1 className={ `ma0 pa0 pt4 mt4 pb3 barlow f-subheadline lh-solid bw3 bt b--gold` }>{ this.props.pageContext.tag }</h1>
                </div>
                <PostList>{ data }</PostList>
            </Layout>
        )
    }
}

export default Archive

export const query = graphql`
query($slug: String!) {
    allGhostPost(sort: {fields: [published_at], order: DESC},
    			filter: {tags: {elemMatch: {slug: {eq: $slug}}}}) {
        edges {
            node {
                id
                title
                slug
                custom_excerpt
                feature_image
                tags {
                    slug
                }
            }
        }
    }
}
`