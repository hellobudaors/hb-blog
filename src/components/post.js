import React from "react"
import PropTypes from 'prop-types'
import { RichText } from 'prismic-reactjs'
import { Styles } from "./styles";
import PostTitle from "./post-title";

class Post extends React.Component {

    render() {
        const post = this.props.data

        var body, title, excerpt, featureImageURL

        title = post.title
        featureImageURL = post.feature_image
        body = <section className="post-body" dangerouslySetInnerHTML={ {
            __html: post.html,
        } } />

        return (
            <div className="pt4">
                <PostTitle featureImageUrl={ featureImageURL }>{ title }</PostTitle>
                <div className={ Styles.page.m + Styles.sideSpacing + `post-container mt4 pb4` }>
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