import React from 'react'
import { Styles } from './styles'
import Card from './card';
import PropTypes from 'prop-types'

class PostList extends React.Component {
    render() {
        const data = this.props.children

        if (data.allPrismicBlogPost) {

            var cards = []
            var gridTemplateRows = `480px`

            for (let i = 0; i < data.allPrismicBlogPost.edges.length; i++) {
                const element = data.allPrismicBlogPost.edges[i].node
                var cardType = ``
                var colSpan = `col-4`
                
                if (this.props.page === `index`) {
                    if (i == 0) {
                        cardType = `first-on-index`
                        gridTemplateRows = `minmax(460px, auto)`
                    }
                    if (((i + 1) % 5 == 0 && (i + 1) % 10 != 0) || i % 10 == 0) {
                        colSpan = `col-8`
                    }
                } else {
                    if (i == 0 || (i % 5 == 1 && i % 10 != 1) || i % 10 == 0) {
                        colSpan = `col-8`
                    }
                }

                cards.push(
                    <Card key={ element.id } cardtype={ cardType } colspan={ colSpan }>{ element }</Card>
                )
            }

            // cards = data.allPrismicBlogPost.edges.map(({ node }) => (
            //     <Card key={ node.id } cardType={ node.data.featured }>{ node }</Card>
            // ))

            return (
                <div className={ Styles.page.xl + Styles.sideSpacing + Styles.gutter + `mt5 grid-12` } style={ {
                    gridTemplateRows: gridTemplateRows,
                    gridAutoRows: `480px`,
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