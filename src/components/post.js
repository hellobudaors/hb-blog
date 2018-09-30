import React from "react"
import PropTypes from 'prop-types'
import { RichText } from 'prismic-reactjs'
import { Styles } from "./styles";
import PostTitle from "./post-title";

class Post extends React.Component {

    render() {
        // const children = this.props.children
        const post = this.props.data

        // console.log(`post: ` + JSON.stringify(RichText.asText(post.title)))

        const richTextLinkResolver = function (doc) {
            // To be implemented
        }

        var body, title, excerpt, featureImageURL, featureImageAlt
        if (this.props.html) {
            // Live post rendering
            title = post.title.text
            excerpt = post.excerpt.text
            featureImageURL = post.feature_image.url
            featureImageAlt = post.feature_image.alt
            body = <section className="post-body" dangerouslySetInnerHTML={ {
                __html: post.post_body.html,
            } } />
        } else {
            // Preview rendering
            title = RichText.asText(post.title)
            excerpt = RichText.asText(post.excerpt)
            featureImageURL = post.feature_image.url
            featureImageAlt = post.feature_image.alt
            body = <section className="post-body">{ RichText.render(post.post_body, richTextLinkResolver) }</section>
        }

        return (
            <div className="pt5">
                <PostTitle featureImageUrl={ featureImageURL } featureImageAlt={ featureImageAlt }>{ title }</PostTitle>
                <div className={ Styles.page.m + Styles.sideSpacing + `post-container mt4` }>
                    { excerpt ? <div className="excerpt f3 lh-copy serif">{ excerpt }</div> : null }
                    <div className="lh-copy serif f4">{ body }</div>
                </div>
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