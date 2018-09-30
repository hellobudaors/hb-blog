import React from 'react'
import { Styles } from './styles'
import Card from './card';
import PropTypes from 'prop-types'

class PostList extends React.Component {
    render() {
        const data = this.props.children

        if (data.allPrismicBlogPost) {

            var cards = []
            var gridTemplateRows = `350px`

            for (let i = 0; i < data.allPrismicBlogPost.edges.length; i++) {
                const element = data.allPrismicBlogPost.edges[i].node
                var cardType = ``
                
                if (this.props.page === `index` && i == 0) {
                    cardType = `first-on-index`
                    gridTemplateRows = `minmax(460px, auto)`
                }

                cards.push(
                    <Card key={ element.id } cardtype={ cardType }>{ element }</Card>
                )
            }

            // cards = data.allPrismicBlogPost.edges.map(({ node }) => (
            //     <Card key={ node.id } cardType={ node.data.featured }>{ node }</Card>
            // ))

            return (
                <div className={ Styles.page.xl + Styles.sideSpacing + Styles.gutter + `mt5 grid-12` } style={ {
                    gridTemplateRows: gridTemplateRows,
                    gridAutoRows: `350px`,
                } }>
                    { cards }
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

PostList.defaultProps = {
    page: `archives`
}

PostList.propTypes = {
    page: PropTypes.string
}

export default PostList