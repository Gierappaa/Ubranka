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
                <div className="header__image">

                </div>
                {/* <img className="header__image" src={images[0]} alt="Tutaj jest obrazek" /> */}
                <div>
                    <ul className="header__list--logg">
                        <li><a href="#"> Zaloguj</a></li>
                        <li><a href="#"> O nas</a></li>
                    </ul>

                    <ul className="header__list">
                        <li><Link activeClass="active" className="" to="Start" spy={true} smooth={true} duration={500} >Start</Link></li>
                        <li><Link activeClass="active" className="" to="WhatsAbout" spy={true} smooth={true} duration={500} >O co chodzi</Link></li>
                        <li><Link activeClass="active" className="" to="AboutUs" spy={true} smooth={true} duration={500} >O nas</Link></li>
                        <li><Link activeClass="active" className="" to="" spy={true} smooth={true} duration={500} >Fundacje i organizacje</Link></li>
                        <li><Link activeClass="active" className="" to="" spy={true} smooth={true} duration={500} >Kontakt</Link></li>
                     
                        <li><a href="#">Kontakt</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

