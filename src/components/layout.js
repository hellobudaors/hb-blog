import React from "react"
import Helmet from 'react-helmet'
import '../assets/css/custom.css'
import Header from "./header";
import Footer from "./footer";
import { graphql } from "gatsby"
import PropTypes from "prop-types"

class DefaultLayout extends React.Component {
    render() {

        const children = this.props.children

        return(
            <>
                <Helmet>
                    <title>Hello Budaörs</title>
                    <link href="https://fonts.googleapis.com/css?family=Barlow+Condensed:500|Barlow:700" rel="stylesheet"></link>
                    <meta name="description" content="Hello Budaörs! Ismerjük meg városunkat együtt!" />
                    <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
                    <link rel="canonical" href="https://hellobudaors.ghost.io/" />
                    <meta name="referrer" content="no-referrer-when-downgrade" />
                    <link rel="next" href="https://hellobudaors.ghost.io/page/2/" />

                    <meta property="og:site_name" content="Hello Budaörs" />
                    <meta property="og:type" content="website" />
                    <meta property="og:title" content="Hello Budaörs" />
                    <meta property="og:description" content="Hello Budaörs! Ismerjük meg városunkat együtt!" />
                    <meta property="og:url" content="https://hellobudaors.com/" />
                    <meta name="twitter:card" content="summary" />
                    <meta name="twitter:title" content="Hello Budaörs" />
                    <meta name="twitter:description" content="Hello Budaörs! Ismerjük meg városunkat együtt!" />
                    <meta name="twitter:url" content="https://hellobudaors.com/" />
                    
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