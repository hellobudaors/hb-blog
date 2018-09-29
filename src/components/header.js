import React from 'react'
import Logo from '../assets/images/hb-logo.svg'
import { Link } from 'gatsby';
import { Styles } from './styles';

class Header extends React.Component {
    render() {
        return (
            <>
                <header className={ Styles.page.xl + Styles.sideSpacing + `flex flex-column mt4` }>
                    <div className="flex items-center">
                        <h4 className="w3 light-gray">MENU</h4>
                        <h4 className="col-10 ttu flex-auto flex justify-center">
                            <Link to="/"><img src={ Logo } /></Link>
                        </h4>
                        <h4 className="w3 flex justify-end light-gray">SOCIAL SOCIAL</h4>
                    </div>
                    <ul className="flex list pa0 ma0 justify-center">
                        <li className="mh3"><Link to="/" className="link black dim">Hello</Link></li>
                        <li className="mh3"><Link to="/archives/mini-interjuk/" className="link black dim">Mini interjúk</Link></li>
                        <li className="mh3"><Link to="/archives/programok/" className="link black dim">Programok</Link></li>
                        <li className="mh3"><Link to="/archives/gasztro/" className="link black dim">Gasztro</Link></li>
                        <li className="mh3"><Link to="/archives/kultura/" className="link black dim">Kultúra</Link></li>
                        <li className="mh3"><Link to="/archives/sport/" className="link black dim">Sport és szabadidő</Link></li>
                    </ul>
                </header>
            </>
        )
    }
}

export default Header