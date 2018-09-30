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
                <header className={ Styles.page.xl + Styles.sideSpacing + `flex flex-column mt4` }>
                    <div className="flex items-center">
                        <h4 className="w3"><Link to="/" className="link dim"><Icon name="home" class="dark-gray" /></Link></h4>
                        <h4 className="col-10 ttu flex-auto flex justify-center">
                            <Link to="/"><img src={ Logo } /></Link>
                        </h4>
                        <h4 className="w3 flex justify-end light-gray"><Link to="/" className="link dim"><Icon name="facebook" class="dark-gray" /></Link></h4>
                    </div>
                    <ul className="flex list pa0 ma0 justify-center">
                        <li className="mh3"><Link to="/" className={ linkClass }>Hello</Link></li>
                        <li className="mh3"><Link to="/archives/mini-interjuk/" className={ linkClass }>Mini interjúk</Link></li>
                        <li className="mh3"><Link to="/archives/programok/" className={ linkClass }>Programok</Link></li>
                        <li className="mh3"><Link to="/archives/gasztro/" className={ linkClass }>Gasztro</Link></li>
                        <li className="mh3"><Link to="/archives/kultura/" className={ linkClass }>Kultúra</Link></li>
                        <li className="mh3"><Link to="/archives/sport/" className={ linkClass }>Sport és szabadidő</Link></li>
                    </ul>
                </header>
            </>
        )
    }
}

export default Header