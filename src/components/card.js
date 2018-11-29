import React from 'react'
import PropTypes from 'prop-types'
import { Styles } from './styles'
import { Link } from 'gatsby'
import Icon from './icon';

class Card extends React.Component {
    render() {
        const node = this.props.children

        if (node) {
            var card

            if (this.props.cardtype === `first-on-index`) {
                // The very first post on index
                card = 
                    <Link to={ `/posts/${node.slug}` } className="col-12 db no-underline flex items-stretch white">
                        <div className={ Styles.gutter + `grid-12 w-100` }>
                            <div className="col-4-l col-6-m col-12 pa3 pa4-ns flex flex-column justify-between bg-dark-gray bt bw3 b--gold">
                                <h2 key={ node.id } className="pa0 ma0 lh-title barlow f3 f2-ns f1-l word-wrap">{ node.title }</h2>
                                <p className="pa0 ma0 mt4 lh-copy flex-auto f5 f4-ns word-wrap">{ node.custom_excerpt }</p>
                                <p className="pa0 ma0 self-end mt4"><Icon name="arrow-right" class="white" /></p>
                            </div>
                            <div className="col-8-l col-6-m col-12 nl4-m nl4-l bt bw3 b--gold home-default-bg dn db-m db-l" style={ {
                                background: (node.feature_image ? `url(${node.feature_image}) no-repeat` : null),
                                backgroundSize: `cover`,
                                backgroundPosition: `center`,
                            } } />
                        </div>
                    </Link>
            } else {

                var colSpan = this.props.colspan + ` `

                if (node.feature_image) {
                    card =
                        <Link to={ `/posts/${node.slug}` } className={ colSpan + `pa4 db no-underline grow flex flex-column bt b--dark-gray bw2 dark-gray bg-near-white` }>
                            <div className="h5 nl4 nt4 nr4" style={ {
                                background: `url(${node.feature_image})`,
                                backgroundPosition: `center`,
                                backgroundSize: `cover`,
                            } }></div>
                            <h2 key={ node.id } className="pa0 ma0 mt3 lh-title barlow-condensed f3 f2-l word-wrap measure">{ node.title }</h2>
                            <p className="pa0 ma0 mt3 lh-copy overflow-hidden sans-serif dark-gray f5 f4-ns word-wrap measure flex-auto">{ node.custom_excerpt }</p>
                        </Link>
                } else {

                card =
                    <Link to={ `/posts/${node.slugs}` } className={ colSpan + `pa4 db no-underline grow flex flex-column bt b--dark-gray bw2 dark-gray bg-near-white` }>
                        <h2 key={ node.id } className="pa0 ma0 lh-title barlow-condensed f3 f2-l word-wrap measure">{ node.title }</h2>
                        <p className="pa0 ma0 mt3 lh-copy overflow-hidden sans-serif dark-gray f4 f5-l word-wrap measure">{ node.custom_excerpt }</p>
                        <p className="pa0 ma0 self-end mt3"><Icon name="arrow-right" class="dark-gray" /></p>
                    </Link>
                }
            }

            return card
        } else {
            return (
                <></>
            )
        }

    }
}

Card.defaultProps = {
    cardtype: ``,
    colspan: `col-4`,
}

Card.propTypes = {
    cardtype: PropTypes.string,
    colspan: PropTypes.string,
}

export default Card