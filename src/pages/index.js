import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import { Styles } from '../components/styles'

export default ({ data }) => (
    <Layout>
        <div className={ Styles.page.xl + Styles.sideSpacing + `mt5 grid-12 gutter-24` } style={{
          gridAutoRows: `minmax(180px, 320px)`,
        }}>
          {data.allPrismicBlogPost.edges.map(({node}) => (
            <Link key={ node.id } to={ `/posts/${node.slugs[0]}` } className="col-4 bt b--black bg-near-white pa4 db link black dim flex flex-column">
              {/* <div key={ node.id } className="black flex flex-column justify-between"> */}
                <h2 key={ node.id } className="pa0 ma0 lh-title">{ node.data.title.text }</h2>
                <p className="pa0 ma0 mt3 lh-copy flex-auto  overflow-hidden">{ node.data.excerpt.text }</p>
                <p className="pa0 ma0 self-end">Olvass</p>
              {/* </div> */}
            </Link>
          ))}
        </div>
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