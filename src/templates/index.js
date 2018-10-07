import React from 'react'
import Layout from '../components/layout'
import PostList from '../components/post-list'
import { Link, graphql } from 'gatsby'
import { format } from 'path';
import { Styles } from '../components/styles';
import Icon from '../components/icon';

const NavLink = props => {
    if (!props.test) {

        if (props.icon === `chevron-left`) {
            return <Link to={ props.url } className="flex items-center pa4 bg-gold link dark-gray"><Icon name={ props.icon } width="40px" height="40px" class="dark-gray nl2" /> <span className="dib">{ props.text }</span></Link>;
        } else {
            return <Link to={ props.url } className="flex items-center pa4 bg-gold link dark-gray"><span className="dib">{ props.text }</span> <Icon name={ props.icon } width="40px" height="40px" class="dark-gray nr2" /></Link>;
        }

    } else {
        return <></>;
    }
};

const IndexPage = ({ data, pathContext }) => {
    const { group, index, first, last, pageCount } = pathContext;
    const previousUrl = index - 1 == 1 ? "" : (index - 1).toString();
    const nextUrl = (index + 1).toString();

    // console.log(JSON.stringify(group))
    // console.log(JSON.stringify(data))

    const formattedData = {
        allPrismicBlogPost: {
            edges: group
        }
    }

    // console.log(JSON.stringify(formattedData))

    return (
        <Layout>
            <PostList page="index">{ formattedData }</PostList>

            <div className={ Styles.page.xl + Styles.sideSpacing + `flex justify-between mt5`}>
                <div className="previousLink">
                    <NavLink test={ first } url={ previousUrl } text="Frissebb bejegyzések" icon="chevron-left" />
                </div>
                <div className="nextLink">
                    <NavLink test={ last } url={ nextUrl } text="Korábbi bejegyzések" icon="chevron-right" />
                </div>
            </div>
        </Layout>
    );
};

export default IndexPage;

// export default ({ data, pathContext }) => (
//     <Layout>
//         <PostList page="index">{ data }</PostList>
//     </Layout>
// )

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