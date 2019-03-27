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

                        <li><RouterLink to="/start">Start</RouterLink></li>
                        <li><RouterLink to="/whatsabout">O co chodzi</RouterLink></li>
                        <li><RouterLink to="/aboutus">O nas</RouterLink></li>
                        <li><RouterLink to="/organizations">Fundacje i organizacje</RouterLink></li>
                        <li><RouterLink to="/contactus">Kontakt</RouterLink></li>

                    </ul>
                </div>
            </div>
        )
    }
}

