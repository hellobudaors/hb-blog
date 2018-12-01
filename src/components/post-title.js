import React from 'react'
import PropTypes from 'prop-types'
import { Styles } from './styles';

class PostTitle extends React.Component {
    render() {

        const title = this.props.children

        if (this.props.featureImageUrl) {
            return(
                <div style={{
                    backgroundImage: `url(${this.props.featureImageUrl})`,
                    backgroundSize: `cover`,
                    backgroundPositionX: `50%`,
                    backgroundPositionY: this.props.featureImagePosition,
                    height: `800px`,
                } } className="flex flex-column justify-end">
                    <div className={ Styles.page.m + Styles.sideSpacing + `w-100`}>
                        <h1 className={(title.length <= 50 ? `f-subheadline-ns ` : `f-subheadline-shrink-ns `) + `f1 white ma0 pa4 bg-black-70 nl4 pr3 pr4-ns dib lh-title barlow-condensed`}>{ title }</h1>
                    </div>
                </div>
            )
        } else {
            return (
                <div className={ Styles.page.m + Styles.sideSpacing }>
                    <h1 className="f1 f-subheadline-ns lh-title barlow-condensed">{ title }</h1>
                </div>
            )
        }
    }
}

PostTitle.defaultProps = {
    featureImageUrl: ``,
    featureImageAlt: ``,
    featureImagePosition: `center`,
}

PostTitle.propTypes = {
    featureImageUrl: PropTypes.string,
    featureImageAlt: PropTypes.string,
    featureImagePosition: PropTypes.string,
}

export default PostTitle