import React from "react"
import Layout from "../components/layout"
import { Styles } from "../components/styles"
import DomanyKati from "../assets/images/domany-kati.jpg"
import VirtAgnes from "../assets/images/virt-agnes.jpg"
import GerzsenyiJudit from "../assets/images/gerzsenyi-judit.jpg"


export default () => {
    return (
        <Layout>
            <div className="mw9 center ph3 ph5-ns pb5">
                <h1 className="ma0 pa0 pt4 mt4 pb3 barlow f-subheadline lh-solid bw3 bt b--gold">A csapat</h1>

                <div className="flex items-center justify-center mt5">
                    <div className="mh3">
                        <img src={ DomanyKati } className="bg-gold br-100 avatar flex items-center justify-center" />
                        <h4 className="tc f4 ma0 pa0 mt3">Domány Kati</h4>
                    </div>
                    <div className="mh3">
                        <img src={ VirtAgnes } className="bg-gold br-100 avatar flex items-center justify-center" />
                        <h4 className="tc f4 ma0 pa0 mt3">Virt Ágnes</h4>
                    </div>
                    <div className="mh3">
                        <img src={ GerzsenyiJudit } className="bg-gold br-100 avatar flex items-center justify-center" />
                        <h4 className="tc f4 ma0 pa0 mt3">Gerzsenyi Judit</h4>
                    </div>
                </div>

            </div>
        </Layout>
    )
}
