import React from "react"
import Helmet from 'react-helmet'
// import CustomJS from '../assets/js/custom.js'

class DefaultLayout extends React.Component {
    render() {
        const children = this.props.children

        return(
            <>
                <Helmet>
                    <script type="text/javascript">{ `
                        window.prismic = {
                            endpoint: 'https://hb-test-blog.prismic.io/api/v2'
                        };
                    `}</script>
                    <script type="text/javascript" src="//static.cdn.prismic.io/prismic.min.js"></script>
                </Helmet>

                <main>
                    { children }
                </main>
            </>
        )
    }
}

export default DefaultLayout