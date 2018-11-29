import React from "react"
import PropTypes from 'prop-types'
import { RichText } from 'prismic-reactjs'
import { Styles } from "./styles";
import PostTitle from "./post-title";

class Post extends React.Component {

    render() {
        const post = this.props.data

        var body, title, excerpt, featureImageURL, featureImagePosition, tags

        title = post.title
        tags = post.tags
        featureImageURL = post.feature_image
        body = <section className="post-body" dangerouslySetInnerHTML={ {
            __html: post.html,
        } } />

        // Setting feature image position
        tags.forEach(tag => {
            if (tag.slug === `hash-kep-felul`) {
                featureImagePosition = `top`
            } else if (tag.slug === `hash-kep-alul`) {
                featureImagePosition = 'bottom'
            }
        })

        return (
            <div className="pt4">
                <PostTitle featureImageUrl={ featureImageURL } featureImagePosition={ featureImagePosition }>{ title }</PostTitle>
                <div className={ Styles.page.m + Styles.sideSpacing + `post-container mt4 pb4` }>
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