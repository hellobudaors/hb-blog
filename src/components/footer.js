import React from 'react'
import Logo from '../assets/images/logo.svg'
import { Styles } from './styles'
// import { Link } from 'gatsby'

class Footer extends React.Component {
    render() {
        const linkClass = `barlow ttu link dark-gray dim tracked f7`

        return (
            <>
                <footer className={ Styles.page.xl + Styles.sideSpacing + `mt5` }>
                    <div className={Styles.gutter + `pt4 pb5 bt b--dark-gray grid-12`}>
                        <div className="col-12 flex justify-between">
                            <img src={ Logo } style={ {
                                height: `36px`,
                            } } />
                            <ul className="flex list pa0 ma0 justify-center mt1">
                                <li className="mh3"><a href="https://www.facebook.com/hellobudaors/" target="_blank" className={ linkClass }>FaceBook</a></li>
                                <li className="ml3"><a href="mailto:hellobudaors.blog@gmail.com" className={ linkClass }>Írj nekünk</a></li>
                            </ul>
                        </div>
                        <div className="col-6">
                            <p className="pa0 ma0 lh-copy f6 f5-ns">
                                Helló Budaörs! Ismerjük meg városunkat együtt! <br /> Célunk, hogy a helyi kulturális, gasztronómiai vagy ismeretterjesztő lehetőségeket, látnivalókat, felnőtt- és gyermekprogramokat egy felületre gyűjtsük, közösséget teremtsünk.
                            </p>
                        </div>
                    </div>
                </footer>
            </>
        )
    }
}

export default Footer