import React from 'react'
import PropTypes from 'prop-types'
import { Styles } from './styles'
import { Link } from 'gatsby'
import Icon from './icon';

class Card extends React.Component {
    render() {
        const node = this.props.children

        if (node) {
            
            var card, 
                featureImagePosition = `center`, 
                tags = node.tags, 
                featuredStyle, 
                link = `/posts/` + node.slug + `?no-cache=1`

            // Setting feature image position
            tags.forEach(tag => {
                if (tag.slug === `hash-kep-felul`) {
                    featureImagePosition = `top`
                } else if (tag.slug === `hash-kep-alul`) {
                    featureImagePosition = 'bottom'
                }

                if (tag.slug === `hash-piros`) {
                    featuredStyle = `red`
                } else if (tag.slug === `hash-sarga`) {
                    featuredStyle = `yellow`
                } else if (tag.slug === `hash-zold`) {
                    featuredStyle = `yellow`
                } else if (tag.slug === `hash-sotet`) {
                    featuredStyle = `dark`
                }
            })

            if (this.props.cardtype === `first-on-index`) {
                // The very first post on index
                card = 
                    <Link to={ link } className="col-12 db no-underline flex items-stretch white">
                        <div className={ Styles.gutter + `grid-12 w-100` }>
                            <div className="col-4-l col-6-m col-12 pa3 pa4-ns flex flex-column justify-between bg-dark-gray bt bw3 b--gold">
                                <h2 key={ node.id } className="pa0 ma0 lh-title barlow f3 f2-ns f1-l word-wrap">{ node.title }</h2>
                                <p className="pa0 ma0 mt4 lh-copy flex-auto f5 f4-ns word-wrap">{ node.custom_excerpt }</p>
                                <p className="pa0 ma0 self-end mt4"><Icon name="arrow-right" class="white" /></p>
                            </div>
                            <div className="col-8-l col-6-m col-12 nl4-m nl4-l bt bw3 b--gold home-default-bg dn db-m db-l" style={ {
                                background: (node.feature_image ? `url(${node.feature_image}) no-repeat` : null),
                                backgroundSize: `cover`,
                                backgroundPosition: `center ${featureImagePosition}`,
                            } } />
                        </div>
                    </Link>
            } else {

                var colSpan = this.props.colspan + ` `
                var cardStyle = {}

                if (featuredStyle === `dark`) {

                    if (node.feature_image) {
                        cardStyle.background = `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.65)), url(${node.feature_image})`
                        cardStyle.backgroundPosition = `center`
                        cardStyle.backgroundSize = `cover`
                    }

                    card =
                        <Link to={ link } className={ colSpan + `pa4 db no-underline grow flex flex-column white bg-dark-gray` } style={ cardStyle }>
                            <h2 key={ node.id } className="pa0 ma0 lh-title barlow f3 f2-ns word-wrap">{ node.title }</h2>
                            <p className="pa0 ma0 mt3 mb4 lh-copy flex-auto overflow-hidden sans-serif f5 f4-ns word-wrap white-80 measure" style={ {
                                lineHeight: `1.65`
                            } }>{ node.custom_excerpt }</p>
                            <p className="pa0 ma0 self-end"><Icon name="arrow-right" class="white" /></p>
                        </Link>
                } else if (featuredStyle === `red` || featuredStyle === `yellow` || featuredStyle === `green`) {

                    var cardClass, textColor, secondaryColor
                    switch (featuredStyle) {
                        case `red`:
                            cardClass = `bt bw2 b--light-blue bg-light-red `
                            textColor = `white `
                            secondaryColor = `light-blue`
                            break;
                        case `yellow`:
                            cardClass = `bt bw2 b--yellow bg-gold `
                            textColor = `near-black `
                            secondaryColor = `near-black`
                            break;
                        case `green`:
                            cardClass = `bt bw2 b--light-green bg-green `
                            textColor = `white `
                            secondaryColor = `light-green`
                            break;
                        default:
                            break;
                    }

                    card =
                        <Link to={ link } className={ cardClass + colSpan + `pa4 db no-underline grow flex flex-column white` }>
                            <h2 key={ node.id } className={ textColor + `pa0 ma0 lh-title barlow f4 f3-ns f2-l word-wrap` }>{ node.title }</h2>
                            <p className={ textColor + `pa0 ma0 mt3 mb4 lh-copy flex-auto overflow-hidden sans-serif f5 f4-ns word-wrap white-80 measure` } style={ {
                                lineHeight: `1.65`
                            } }>{ node.custom_excerpt }</p>
                            <p className="pa0 ma0 self-end"><Icon name="arrow-right" class={ secondaryColor } /></p>
                        </Link>
                } else {

                    if (node.feature_image) {
                        card =
                            <Link to={ link } className={ colSpan + `pa4 db no-underline grow flex flex-column bt b--dark-gray bw2 dark-gray bg-near-white` }>
                                <div className="h5 nl4 nt4 nr4" style={ {
                                    background: `url(${node.feature_image})`,
                                    backgroundPosition: `center ${featureImagePosition}`,
                                    backgroundSize: `cover`,
                                } }></div>
                                <h2 key={ node.id } className="pa0 ma0 mt3 lh-title barlow-condensed f3 f2-l word-wrap measure">{ node.title }</h2>
                                <p className="pa0 ma0 mt3 lh-copy overflow-hidden sans-serif dark-gray f5 f4-ns word-wrap measure flex-auto">{ node.custom_excerpt }</p>
                            </Link>
                    } else {
                        card =
                            <Link to={ link } className={ colSpan + `pa4 db no-underline grow flex flex-column bt b--dark-gray bw2 dark-gray bg-near-white` }>
                                <h2 key={ node.id } className="pa0 ma0 lh-title barlow-condensed f3 f2-l word-wrap measure">{ node.title }</h2>
                                <p className="pa0 ma0 mt3 lh-copy overflow-hidden sans-serif dark-gray f4 f5-l word-wrap measure">{ node.custom_excerpt }</p>
                                <p className="pa0 ma0 self-end mt3"><Icon name="arrow-right" class="dark-gray" /></p>
                            </Link>
                    }
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