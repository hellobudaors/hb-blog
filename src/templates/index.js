import React from 'react'
import Layout from '../components/layout'
import PostList from '../components/post-list'
import { Link, graphql } from 'gatsby'
import { format } from 'path';
import { Styles } from '../components/styles';
import Icon from '../components/icon';

const NavLink = props => {
    if (!props.test) {

        var textClass = `dn dib-l fw5`, iconClass = ``

        if (props.icon === `arrow-left`) {
            textClass += ` order-2`
            iconClass += ` order-1 nl2-l`
        } else {
            textClass += ` order-1`
            iconClass += ` order-2 nr2-l`
        }

        return <Link to={ props.url } className="flex items-center pa4 bg-gold link dark-gray"><span className={ textClass }>{ props.text }</span> <Icon name={ props.icon } width="32px" height="32px" containerClass={ iconClass } class="dark-gray" /></Link>;

    } else {
        return <></>;
    }
};

const IndexPage = ({ data, pageContext }) => {
    const { group, index, first, last, pageCount } = pageContext
    
    const previousUrl = index - 1 == 1 ? "" : (index - 1).toString()
    const nextUrl = (index + 1).toString()

    const formattedData = {
        allGhostPost: {
            edges: group
        }
    }

    return (
        <Layout>
            <PostList page="index">{ formattedData }</PostList>

            <div className={ Styles.page.xl + Styles.sideSpacing + `flex justify-between mt5` }>
                <div className="previousLink">
                    <NavLink test={ first } url={ previousUrl } text="Frissebb bejegyzések" icon="arrow-left" />
                </div>
                <div className="nextLink">
                    <NavLink test={ last } url={ nextUrl } text="Korábbi bejegyzések" icon="arrow-right" />
                </div>
            </div>
        </Layout>
    );
};

export default IndexPage;