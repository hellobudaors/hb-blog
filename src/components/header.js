import React from 'react'
import Logo from '../assets/images/hb-logo.svg'
import { Link } from 'gatsby'
import { Styles } from './styles'
import feather from 'feather-icons'
import Icon from './icon';

class Header extends React.Component {
    render() {
        const linkClass = `barlow ttu link dark-gray dim tracked`

        return (
            <>
                <div dangerouslySetInnerHTML={ {
                    __html: `
                        <div id="fb-root"></div>
                        <script>(function(d, s, id) {
                        var js, fjs = d.getElementsByTagName(s)[0];
                        if (d.getElementById(id)) return;
                        js = d.createElement(s); js.id = id;
                        js.src = 'https://connect.facebook.net/hu_HU/sdk.js#xfbml=1&version=v3.2';
                        fjs.parentNode.insertBefore(js, fjs);
                        }(document, 'script', 'facebook-jssdk'));</script>
                    `
                } } />
                <header className={ Styles.page.xl + Styles.sideSpacing + `flex flex-wrap-ns justify-between items-center mt4` }>

                    <Link to="/" className="dn db-ns link dim order-1 order-2-l mb4 mb0-l"><Icon name="home" class="dark-gray" /></Link>

                    <Link to="/" className="ttu item-stretch flex justify-center order-2 w-90 order-1-l w-100-l mb4 ph3-ns pr4"><img src={ Logo } /></Link>

                    <a href="https://www.facebook.com/hellobudaors/" target="_blank" className="db light-gray order-3 order-4-l link dim mb4 mb0-l item-end"><Icon name="facebook" class="dark-gray" /></a>

                    <ul className="flex-ns list pa0 ma0 justify-center items-center f6 f5-l order-4 order-3-l flex-auto w-100 w-90-l dn">
                        <li className="mh3 tc"><Link to="/" className={ linkClass }>Hello</Link></li>
                        <li className="mh3 tc"><Link to="/archives/mini-interjuk/" className={ linkClass }>Mini interjúk</Link></li>
                        <li className="mh3 tc"><Link to="/archives/programok/" className={ linkClass }>Programok</Link></li>
                        <li className="mh3 tc"><Link to="/archives/gasztro/" className={ linkClass }>Gasztro</Link></li>
                        <li className="mh3 tc"><Link to="/archives/kultura/" className={ linkClass }>Kultúra</Link></li>
                        {/* <li className="mh3 tc"><Link to="/archives/budaors-kepekben/" className={ linkClass }>Budaörs képekben</Link></li> */}
                    </ul>
                </header>
            </>
        )
    }
}

export default Header