import React from 'react'
import PropTypes from 'prop-types'
import { Styles } from './styles'
import { Link } from 'gatsby'

class Card extends React.Component {
    render() {
        const node = this.props.children

        if (node) {
            var cardClass = `col-4 pa4 db link dim flex flex-column`
            if (node.data.post_type === `Kiemelt`) {
                cardClass += ` white bg-dark-gray`
            } else {
                cardClass += ` bt b--black black bg-near-white`
            }

            return (
                <Link key={ node.id } to={ `/posts/${node.slugs[0]}` } className={ cardClass }>
                    <h2 key={ node.id } className="pa0 ma0 lh-title">{ node.data.title.text }</h2>
                    <p className="pa0 ma0 mt3 lh-copy flex-auto  overflow-hidden">{ node.data.excerpt.text }</p>
                    <p className="pa0 ma0 self-end">Olvass</p>
                </Link>
            )
        } else {
            return (
                <></>
            )
        }
        
    }
}


export default Card