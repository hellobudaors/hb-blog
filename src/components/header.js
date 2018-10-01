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
                <header className={ Styles.page.xl + Styles.sideSpacing + `flex flex-wrap justify-between items-center mt4` }>
                    <h4 className="ttu flex-auto flex justify-center w-100-l order-2 order-1-l">
                        <Link to="/"><img src={ Logo } /></Link>
                    </h4>

                    <h4 className="order-1 order-2-l"><Link to="/" className="link dim"><Icon name="home" class="dark-gray" /></Link></h4>
                    <ul className="flex list pa0 ma0 justify-center items-center f6 f5-ns order-4 order-3-l flex-auto">
                        <li className="mh3 tc"><Link to="/" className={ linkClass }>Hello</Link></li>
                        <li className="mh3 tc"><Link to="/archives/mini-interjuk/" className={ linkClass }>Mini interjúk</Link></li>
                        <li className="mh3 tc"><Link to="/archives/programok/" className={ linkClass }>Programok</Link></li>
                        <li className="mh3 tc"><Link to="/archives/gasztro/" className={ linkClass }>Gasztro</Link></li>
                        <li className="mh3 tc"><Link to="/archives/kultura/" className={ linkClass }>Kultúra</Link></li>
                        <li className="mh3 tc"><Link to="/archives/sport/" className={ linkClass }>Sport és szabadidő</Link></li>
                    </ul>
                    <h4 className="flex justify-end light-gray order-3 order-4-l"><a href="https://www.facebook.com/hellobudaors/" target="_blank" className="link dim"><Icon name="facebook" class="dark-gray" /></a></h4>

                    {/* <div className="flex items-center flex-auto justify-between">
                        
                    </div> */}
                </header>
            </>
        )
    }
}

export default Header