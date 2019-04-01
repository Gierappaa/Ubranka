import React from 'react';
import './LoggedIn.scss';
import { Header } from './../Header/Header';
import { ContactUs } from '../../layouts/ContactUs/ContactUs';
import { TitleDecoration } from './../TitleDecoration/TitleDecoration';
import { DonationForm } from "../DonationForm/DonationForm";

export class LoggedIn extends React.Component {
    render() {
        return (
            <div>
                <div className="loggedIn-section">
                <div className="loggedIn-section__start">
                        <Header />
                        <TitleDecoration
                            title="Oddaj rzeczy, których nie chcesz POTRZEBUJĄCYM">
                            Wystarcza 4 proste kroki</TitleDecoration>


                        <div className="loggedIn-section__squares">

                            <div className="loggedIn-section__square">
                                <div className="loggedIn-section__square__text">
                                    <p>1</p>
                                    <p className="loggedIn-section__square__text__position">Wybierz rzeczy</p>
                                </div>
                            </div>

                            <div className="loggedIn-section__square">
                                <div className="loggedIn-section__square__text">
                                    <p>2</p>
                                    <p className="loggedIn-section__square__text__position">Spakuj je w worki</p>
                                </div>
                            </div>
                            <div className="loggedIn-section__square">
                                <div className="loggedIn-section__square__text">
                                    <p>3</p>
                                    <p className="loggedIn-section__square__text__position">Wybierz fundacje</p>
                                </div>
                            </div>
                            <div className="loggedIn-section__square">
                                <div className="loggedIn-section__square__text">
                                    <p>4</p>
                                    <p className="loggedIn-section__square__text__position">Zamów kuriera</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <DonationForm />
                <ContactUs />
            </div>

        );
    }
}

