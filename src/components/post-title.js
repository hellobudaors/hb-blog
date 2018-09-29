import React from 'react'
import PropTypes from 'prop-types'
import { Styles } from './styles';

class PostTitle extends React.Component {
    render() {

        const title = this.props.children

        if (this.props.featureImageUrl) {
            return(
                <div style={{
                    background: `url(${this.props.featureImageUrl})`,
                    backgroundSize: `cover`,
                    minHeight: `500px`,
                } } className="flex flex-column justify-end">
                    {/* <div className="bg-red">Hello</div> */}
                    <div className={ Styles.page.m + Styles.sideSpacing + `w-100`}>
                        <h1 className="f1 white ma0 pa4 bg-black-70 nl4 pr6 dib lh-title barlow-condensed">{ title }</h1>
                    </div>
                </div>
            )
        } else {
            return (
                <div className={ Styles.page.m + Styles.sideSpacing }>
                    <h1 className="f1 lh-title barlow-condensed">{ title }</h1>
                </div>
            )
        }
    }
}

PostTitle.defaultProps = {
    featureImageUrl: ``,
    featureImageAlt: ``,
}

PostTitle.propTypes = {
    featureImageUrl: PropTypes.string,
    featureImageAlt: PropTypes.string,
}

export default PostTitle