// require("dotenv").config()
import React from "react"
import PropTypes from 'prop-types'
import { Styles } from "./styles"
import PostTitle from "./post-title"
import { FacebookProvider, Comments } from "react-facebook"
import { graphql } from "gatsby"

class Post extends React.Component {

    render() {
        const post = this.props.data
        const meta = this.props.meta.siteMetadata        

        var body, title, featureImageURL, featureImagePosition, tags, slug

        title = post.title
        tags = post.tags
        slug = post.slug
        featureImageURL = post.feature_image
        body = <section className="post-body" dangerouslySetInnerHTML={ {
            __html: post.html,
        } } />

        // Setting feature image position
        tags.forEach(tag => {
            if (tag.slug === `hash-kep-felul`) {
                featureImagePosition = `top`
            } 
            if (tag.slug === `hash-kep-alul`) {
                featureImagePosition = 'bottom'
            }
        })

        return (
            <div className="pt4">

                <PostTitle featureImageUrl={ featureImageURL } featureImagePosition={ featureImagePosition }>{ title }</PostTitle>
                <div className={ Styles.page.m + Styles.sideSpacing + `post-container mt4 pb4` }>
                    <div className="lh-copy serif f4">{ body }</div>
                </div>

                {(meta ? <div className={ Styles.page.m + Styles.sideSpacing + `post-container mt5 pb4` }>
                    <h2 className="f2 bw3 bt b--gold">Beszélgetés</h2>

                    <FacebookProvider appId={ meta.facebook.appId }>
                        <Comments href={ `https://hellobudaors.com/${slug}` } width="100%" colorscheme="light" />
                    </FacebookProvider>
                </div> : null)}
            </div>
        )
    }
}

Post.defaultProps = {
    html: true,
    meta: null,
}

Post.propTypes = {
    html: PropTypes.bool.isRequired,
    meta: PropTypes.object,
}

export default Post