import React from 'react'
import { Styles } from './styles'
import { Link } from 'gatsby'
import Card from './card';

class PostList extends React.Component {
    render() {
        const data = this.props.children

        if (data.allPrismicBlogPost) {
            return (
                <div className={ Styles.page.xl + Styles.sideSpacing + `mt5 grid-12 gutter-24` } style={ {
                    gridAutoRows: `minmax(180px, 320px)`,
                } }>
                    { data.allPrismicBlogPost.edges.map(({ node }) => (
                        <Card key={ node.id } cardType={ node.data.featured }>{ node }</Card>
                    )) }
                </div>
            )
        } else {
            return (
                <div className={ Styles.page.xl + Styles.sideSpacing + `mt5` }>
                    <p className="tc">Nincs bejegyzés.</p>
                </div>
            )
        }
    }
}

export default PostList