import React from 'react';
import './LoggedIn.scss';
import { Header } from './../Header/Header';
import { ContactUs } from './../ContactUs/ContactUs';
import { TitleDecoration } from './../TitleDecoration/TitleDecoration';

export class LoggedIn extends React.Component {
    render() {
        return (
            <div className="loggedIn-section">
                Witaj młody padawanie!
                <div className="loggedIn-section__start">
                    <Header />
                    <TitleDecoration
                        title="Oddaj rzeczy, których nie chcesz POTRZEBUJĄCYM">
                        Wystarcza 4 proste kroki</TitleDecoration>


                    <div className="loggedIn-section__squares">
                        <div className="loggedIn-section__square">
                            <div className="loggedIn-section__square__text">
                                <p>1</p>
                                <p>Wybierz rzeczy</p>
                            </div>
                        </div>

                        <div className="loggedIn-section__square">
                            <div className="loggedIn-section__square__text">
                                <p>2</p>
                                <p>Spakuj je w worki</p>
                            </div>
                        </div>
                        <div className="loggedIn-section__square">
                            <div className="loggedIn-section__square__text">
                                <p>3</p>
                                <p>Wybierz fundacje</p>
                            </div>
                        </div>
                        <div className="loggedIn-section__square">
                            <div className="loggedIn-section__square__text">
                                <p>4</p>
                                <p>Zamów kuriera</p>
                            </div>
                        </div>
                    </div>

                </div>
                <ContactUs />
            </div>
        );
    }
}

