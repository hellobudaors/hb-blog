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
                <div className="ma0 pa0 pt4 mt4 bw3 bt b--gold flex items-start flex-row-ns flex-column-m flex-column">
                    <div className="w-50-ns w-100-m mr5-ns">
                        <h2 className="f1 ma0 pa0">Rólunk</h2>
                        <p className={ Styles.p }>
                            <span className="f3 lh-solid">Helló Budaörs!<br />Ismerjük meg városunkat együtt!</span>
                        </p>

                        <p className={ Styles.p }>
                        Célunk, hogy a helyi kulturális, gasztronómiai vagy ismeretterjesztő lehetőségeket, látnivalókat, felnőtt- és gyermekprogramokat egy felületre gyűjtsük. Olyan közösséget kívánunk alkotni, ahol minden lehetőségről időben értesülünk, illetve kulturáltan megfogalmazott véleményekkel segítjük a választást, tájékozódást.
                        </p>
    
                        <p className={ Styles.p }>
                            <a href="https://www.facebook.com/hellobudaors" className="link blue dim">Facebook oldalunk</a><br />
                            <a href="mailto:hellobudaors.blog@gmail.com" className="link blue dim">Írj nekünk</a>
                        </p>
                    </div>
                    <div className="w-100 w-auto-ns w-auto-m">
                        <h2 className="f1 ma0 pa0">A csapat</h2>
                        <div className="flex items-center justify-start-ns justify-start-m justify-center mt4 flex-column flex-row-ns">
                            <div className="mh3 mb5">
                                <img src={ DomanyKati } className="bg-gold br-100 avatar flex items-center justify-center" />
                                <h4 className="tc f4 ma0 pa0 mt3">Domány Kati</h4>
                            </div>
                            <div className="mh3 mb5">
                                <img src={ GerzsenyiJudit } className="bg-gold br-100 avatar flex items-center justify-center" />
                                <h4 className="tc f4 ma0 pa0 mt3">Gerzsenyi Judit</h4>
                            </div>
                            <div className="mh3 mb5">
                                <img src={ VirtAgnes } className="bg-gold br-100 avatar flex items-center justify-center" />
                                <h4 className="tc f4 ma0 pa0 mt3">Virt Ágnes</h4>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </Layout>
    )
}
