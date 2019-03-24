import React from 'react';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


const images = [
    require('./../../images/header_start_img.jpg'),
];

import './Header.scss';


export class Header extends React.Component {
    // handleNavChange: () => {
    //     // Kod do nawigacji
    // };

    render() {
        return (
            <div className="header">
                <div>
                    <ul className="header__list--logg">
                        <li><a href="#"> Zaloguj</a></li>
                        <li><a href="#"> O nas</a></li>
                    </ul>

                    <ul className="header__list">
                        <li><Link activeClass="active" className="" to="Start" spy={true} smooth={true} duration={2500} >Start</Link></li>
                        <li><Link activeClass="active" className="" to="WhatsAbout" spy={true} smooth={true} duration={2500} >O co chodzi</Link></li>
                        <li><Link activeClass="active" className="" to="AboutUs" spy={true} smooth={true} duration={2500} >O nas</Link></li>
                        <li><Link activeClass="active" className="" to="Organizations" spy={true} smooth={true} duration={2500} >Fundacje i organizacje</Link></li>
                        <li><Link activeClass="active" className="" to="ContactUs" spy={true} smooth={true} duration={2500} >Kontakt</Link></li>
                    </ul>
                </div>
            </div>
        )
    }
}

