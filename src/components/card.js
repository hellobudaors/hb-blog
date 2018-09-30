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

            console.log(node)
            

            if (this.props.cardtype === `first-on-index`) {
                // The very first post on index
                card = 
                <Link to={ `/posts/${node.slugs[0]}` } className="col-12 db link flex items-stretch white">
                    <div className={ Styles.gutter + `grid-12` }>
                        <div className="col-4 pa4 flex flex-column justify-between bg-dark-gray bt bw4 b--yellow">
                            <h2 key={ node.id } className="pa0 ma0 lh-solid barlow f-subheadline word-wrap">{ node.data.title.text }</h2>
                            <p className="pa0 ma0 mt3 lh-copy flex-auto f4 serif word-wrap">{ node.data.excerpt.text }</p>
                            <p className="pa0 ma0 self-end mt4"><Icon name="arrow-right" class="white" /></p>
                        </div>
                        <div className="col-8 nl4 bt bw4 b--yellow home-default-bg" style={{
                            background: (node.data.feature_image.url ? `url(${node.data.feature_image.url}) no-repeat` : null),
                            backgroundSize: `cover`,
                            backgroundPosition: `center`,
                        }}>
                            
                        </div>
                    </div>
                </Link>
            } else {

                if (node.data.post_type === `Kiemelt`) {
                    card =
                        <Link to={ `/posts/${node.slugs[0]}` } className="col-4 pa4 db link dim flex flex-column white bg-dark-gray">
                            <h2 key={ node.id } className="pa0 ma0 lh-title barlow f2 word-wrap">{ node.data.title.text }</h2>
                            <p className="pa0 ma0 mt3 mb4 lh-copy flex-auto overflow-hidden serif f4 word-wrap white-80" style={{
                                lineHeight: `1.65`
                            }}>{ node.data.excerpt.text }</p>
                            <p className="pa0 ma0 self-end"><Icon name="arrow-right" class="white" /></p>
                        </Link>
                } else {
                    card =
                        <Link to={ `/posts/${node.slugs[0]}` } className="col-4 pa4 db link dim flex flex-column bt b--black black bg-near-white">
                            <h2 key={ node.id } className="pa0 ma0 lh-title barlow-condensed f2 word-wrap">{ node.data.title.text }</h2>
                            <p className="pa0 ma0 mt3 mb4 lh-copy flex-auto overflow-hidden serif dark-gray f5 word-wrap">{ node.data.excerpt.text }</p>
                            <p className="pa0 ma0 self-end"><Icon name="arrow-right" class="dark-gray" /></p>
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
    cardtype: ``
}

Card.propTypes = {
    cardtype: PropTypes.string
}

export default Card