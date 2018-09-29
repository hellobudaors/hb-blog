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
                        <li className="mh3">Mini interjúk</li>
                        <li className="mh3">Programok</li>
                        <li className="mh3">Mit eszünk ma?</li>
                        <li className="mh3">Kultúrált jó estét</li>
                    </ul>
                </header>
            </>
        )
    }
}

export default Header