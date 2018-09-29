import React from "react"
import PropTypes from 'prop-types'
import { RichText } from 'prismic-reactjs'

class Post extends React.Component {

    render() {
        // const children = this.props.children
        const post = this.props.data

        // console.log(`post: ` + JSON.stringify(RichText.asText(post.title)))

        const richTextLinkResolver = function (doc) {
            // To be implemented
        }

        var body, title, excerpt, featureImageURL
        if (this.props.html) {
            
            // Live post rendering
            title = post.title.text
            excerpt = post.excerpt.text
            // console.log(`feature image: ` + JSON.stringify(post.feature_image))
            featureImageURL = post.feature_image.url
            
            body = <section className="post-content" dangerouslySetInnerHTML={ {
                __html: post.post_body.html,
            } } />
        } else {

            // Preview rendering
            title = RichText.asText(post.title)
            excerpt = RichText.asText(post.excerpt)
            body = <section className="post-content">{ RichText.render(post.post_body, richTextLinkResolver) }</section>
        }

        return (
            <div>
                <h1>{ title }</h1>
                { featureImageURL ? <img src={ featureImageURL } /> : null }
                { excerpt ? <div>{ excerpt }</div> : null }
                { body }
            </div>
        )
    }
}

Post.defaultProps = {
    html: true,
}

Post.propTypes = {
    html: PropTypes.bool.isRequired,
}

export default Post