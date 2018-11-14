import React from "react"
import Helmet from 'react-helmet'
// import CustomJS from '../assets/js/custom.js'
import '../assets/css/custom.css'
import Header from "./header";
import Footer from "./footer";

class DefaultLayout extends React.Component {
    render() {
        const children = this.props.children

        return(
            <>
                <Helmet>
                    <title>Hello Budaörs</title>
                    <link href="https://fonts.googleapis.com/css?family=Barlow+Condensed:500|Barlow:700" rel="stylesheet"></link>
                    <script type="text/javascript" src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
                    <body className="sans-serif dark-gray bg-white" />
                </Helmet>

                <Header />

                <main>
                    { children }
                </main>

                <Footer />
            </>
        )
    }
}

export default DefaultLayout