import React from "react"
import Helmet from 'react-helmet'
// import CustomJS from '../assets/js/custom.js'

class DefaultLayout extends React.Component {
    render() {
        const children = this.props.children

        return(
            <>
                <Helmet>
                    <title>Hello Budaörs</title>
                </Helmet>

                <main>
                    { children }
                </main>
            </>
        )
    }
}

export default DefaultLayout