import React from 'react'
import Logo from '../assets/images/hb-logo.svg'
import { Link } from 'gatsby'
import { Styles } from './styles'
import feather from 'feather-icons'
import Icon from './icon';

class Header extends React.Component {
    render() {
        const linkClass = `barlow ttu link dark-gray dim tracked db pa3`

        return (
            <>
                <header className={ Styles.page.xl + Styles.sideSpacing + `flex flex-wrap justify-between items-center mt4` }>

                    <Link to="/" className="dn db-ns link dim order-1 order-2-l mb4 mb0-l"><Icon name="home" class="dark-gray" /></Link>

                    <Link to="/" className="ttu item-stretch flex justify-start justify-center-ns justify-center-m order-2 w-90 order-1-l w-100-l mb3 ph3-ns pr4"><img src={ Logo } /></Link>

                    <a href="https://www.facebook.com/hellobudaors/" target="_blank" className="db light-gray order-3 order-4-l link dim mb4 mb0-l item-end"><Icon name="facebook" class="dark-gray" /></a>

                    <ul className="flex list pa0 ma0 justify-center-m justify-center-l items-center f6 f5-l order-4 order-3-l flex-auto w-100 w-90-l overflow-x-auto">
                        <li className="tc"><Link to="/" className={ linkClass + ` nl3 nl0-ns`}>Helló!</Link></li>
                        <li className="tc nowrap"><Link to="/archives/mini-interjuk/" className={ linkClass }>Mini interjúk</Link></li>
                        <li className="tc"><Link to="/archives/programok/" className={ linkClass }>Programok</Link></li>
                        <li className="tc"><Link to="/archives/gasztro/" className={ linkClass }>Gasztro</Link></li>
                        <li className="tc"><Link to="/archives/kultura/" className={ linkClass }>Kultúra</Link></li>
                        {/* <li className="mh3 tc"><Link to="/archives/budaors-kepekben/" className={ linkClass }>Budaörs képekben</Link></li> */}
                    </ul>
                </header>
            </>
        )
    }
}

export default Header