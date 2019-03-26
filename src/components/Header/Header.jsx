import React from 'react';
import { Link as ScrollLink, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import './Header.scss';
import { BrowserRouter as Router, Route, Link as RouterLink } from "react-router-dom";

export class Header extends React.Component {

    render() {
        return (
            <div className="header">
                <div>
                    <ul className="header__list--logg">
                        <li><RouterLink to="/logIn">Zaloguj</RouterLink></li>
                        <li><RouterLink to="/register">Załóż konto</RouterLink></li>
                    </ul>

                    <ul className="header__list">

                        <li><ScrollLink activeClass="active" className="" to="Start"
                            spy={true} smooth={true} duration={2500} >Start</ScrollLink></li>

                        <li><ScrollLink activeClass="active" className="" to="WhatsAbout"
                            spy={true} smooth={true} duration={2500} >O co chodzi</ScrollLink></li>

                        <li><ScrollLink activeClass="active" className="" to="AboutUs"
                            spy={true} smooth={true} duration={2500} >O nas</ScrollLink></li>

                        <li><ScrollLink activeClass="active" className="" to="Organizations"
                            spy={true} smooth={true} duration={2500} >Fundacje i organizacje</ScrollLink></li>

                        <li><ScrollLink activeClass="active" className="" to="ContactUs"
                            spy={true} smooth={true} duration={2500} >Kontakt</ScrollLink></li>
                    </ul>
                </div>
            </div>
        )
    }
}

