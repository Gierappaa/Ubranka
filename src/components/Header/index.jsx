import React from 'react';

const images = [
    require('./../../images/header_start_img.jpg'),
];

import './Header.scss';


class Header extends React.Component {
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
                        <li><a href="#"> Start</a></li>
                        <li><a href="#">O co chodzi</a></li>
                        <li><a href="#">O nas</a></li>
                        <li><a href="#">Fundacje i organizacje</a></li>
                        <li><a href="#">Kontakt</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}


export default Header;

