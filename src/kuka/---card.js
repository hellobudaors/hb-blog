import React from 'react'
import PropTypes from 'prop-types'
import { Styles } from '../components/styles'
import { Link } from 'gatsby'
import Icon from '../components/icon';

class Card extends React.Component {
    render() {
        const node = this.props.children

        if (node) {
            var card

            if (this.props.cardtype === `first-on-index`) {
                // The very first post on index
                card = 
                    <Link to={ `/posts/${node.slugs[0]}` } className="col-12 db no-underline flex items-stretch white">
                        <div className={ Styles.gutter + `grid-12 w-100` }>
                            <div className="col-4-l col-6-m col-12 pa3 pa4-ns flex flex-column justify-between bg-dark-gray bt bw3 b--gold">
                                <h2 key={ node.id } className="pa0 ma0 lh-title barlow f3 f2-ns f1-l word-wrap">{ node.data.title.text }</h2>
                                <p className="pa0 ma0 mt4 lh-copy flex-auto f5 f4-ns word-wrap">{ node.data.excerpt.text }</p>
                                <p className="pa0 ma0 self-end mt4"><Icon name="arrow-right" class="white" /></p>
                            </div>
                            <div className="col-8-l col-6-m col-12 nl4-m nl4-l bt bw3 b--gold home-default-bg dn db-m db-l" style={{
                                background: (node.data.feature_image.url ? `url(${node.data.feature_image.url}) no-repeat` : null),
                                backgroundSize: `cover`,
                                backgroundPosition: `center`,
                            }} />
                        </div>
                    </Link>
            } else {

                var colSpan = this.props.colspan + ` `
                var cardStyle = {}

                if (node.data.post_type === `Kiemelt`) {

                    if (node.data.feature_image.url) {
                        cardStyle.background = `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.65)), url(${node.data.feature_image.url})`
                        cardStyle.backgroundPosition = `center`
                        cardStyle.backgroundSize = `cover`
                    }

                    card =
                        <Link to={ `/posts/${node.slugs[0]}` } className={ colSpan + `pa4 db no-underline grow flex flex-column white bg-dark-gray` } style={ cardStyle }>
                            <h2 key={ node.id } className="pa0 ma0 lh-title barlow f3 f2-ns word-wrap">{ node.data.title.text }</h2>
                            <p className="pa0 ma0 mt3 mb4 lh-copy flex-auto overflow-hidden sans-serif f5 f4-ns word-wrap white-80 measure" style={{
                                lineHeight: `1.65`
                            }}>{ node.data.excerpt.text }</p>
                            <p className="pa0 ma0 self-end"><Icon name="arrow-right" class="white" /></p>
                        </Link>
                } else if (node.data.post_type === `Háttérképes`) {                    
                    if (node.data.feature_image.url) {
                        cardStyle.background = `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5)), url(${node.data.feature_image.url})`
                        cardStyle.backgroundPosition = `center`
                        cardStyle.backgroundSize = `cover`
                    }
                    
                    card =
                        <Link to={ `/posts/${node.slugs[0]}` } className={ colSpan + `pa4 db no-underline grow flex flex-column white bg-dark-gray justify-between` } style={ cardStyle }>
                            <h2 key={ node.id } className="pa0 ma0 lh-title barlow-condensed f3 f2-ns word-wrap">{ node.data.title.text }</h2>
                            <p className="pa0 ma0 self-end"><Icon name="arrow-right" class="white" /></p>
                        </Link>
                } else if (node.data.post_type === `Piros` || node.data.post_type === `Sárga` || node.data.post_type === `Zöld`) {
                    
                    var cardClass, textColor, secondaryColor
                    switch (node.data.post_type) {
                        case `Piros`:
                            cardClass = `bt bw2 b--light-blue bg-light-red `
                            textColor = `white `
                            secondaryColor = `light-blue`
                            break;
                        case `Sárga`:
                            cardClass = `bt bw2 b--yellow bg-gold `
                            textColor = `near-black `
                            secondaryColor = `near-black`
                            break;
                        case `Zöld`:
                            cardClass = `bt bw2 b--light-green bg-green `
                            textColor = `white `
                            secondaryColor = `light-green`
                            break;
                        default:
                            break;
                    }

                    card =
                        <Link to={ `/posts/${node.slugs[0]}` } className={ cardClass + colSpan + `pa4 db no-underline grow flex flex-column white` }>
                        <h2 key={ node.id } className={ textColor + `pa0 ma0 lh-title barlow f4 f3-ns f2-l word-wrap` }>{ node.data.title.text }</h2>
                        <p className={ textColor + `pa0 ma0 mt3 mb4 lh-copy flex-auto overflow-hidden sans-serif f5 f4-ns word-wrap white-80 measure` } style={ {
                                lineHeight: `1.65`
                            } }>{ node.data.excerpt.text }</p>
                            <p className="pa0 ma0 self-end"><Icon name="arrow-right" class={ secondaryColor } /></p>
                        </Link>
                } else {

                    if (node.data.feature_image.url) {
                        card =
                            <Link to={ `/posts/${node.slugs[0]}` } className={ colSpan + `pa4 db no-underline grow flex flex-column bt b--dark-gray bw2 dark-gray bg-near-white` }>
                                <div className="h5 nl4 nt4 nr4" style={{
                                    background: `url(${node.data.feature_image.url})`,
                                    backgroundPosition: `center`,
                                    backgroundSize: `cover`,
                                }}></div>
                                <h2 key={ node.id } className="pa0 ma0 mt3 lh-title barlow-condensed f3 f2-l word-wrap measure">{ node.data.title.text }</h2>
                                <p className="pa0 ma0 mt3 lh-copy overflow-hidden sans-serif dark-gray f5 f4-ns word-wrap measure flex-auto">{ node.data.excerpt.text }</p>
                            </Link>
                    } else {
                        card =
                            <Link to={ `/posts/${node.slugs[0]}` } className={ colSpan + `pa4 db no-underline grow flex flex-column bt b--dark-gray bw2 dark-gray bg-near-white` }>
                                <h2 key={ node.id } className="pa0 ma0 lh-title barlow-condensed f3 f2-l word-wrap measure">{ node.data.title.text }</h2>
                                <p className="pa0 ma0 mt3 lh-copy overflow-hidden sans-serif dark-gray f4 f5-l word-wrap measure">{ node.data.excerpt.text }</p>
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