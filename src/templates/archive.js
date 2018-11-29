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

// export const query = graphql`
// query($id: String!) {
//     allPrismicBlogPost(sort: { fields: [first_publication_date], order: DESC}, 
//         filter: { data: { custom_tags: { elemMatch: { tag: { raw: { id: { eq: $id } } } } } } }) {
//         edges {
//             node {
//                 id
//                 slugs
//                 data {
//                     title {
//                         text
//                     }
//                     post_type
//                     excerpt {
//                         text
//                     }
//                     feature_image {
//                         alt
//                         copyright
//                         url
//                     }
//                     custom_tags {
//                         tag {
//                             document {
//                                 data {
//                                     tag
//                                 }
//                             }
//                         }
//                     }
//                 }
//             }
//         }
//     }
// }
// `