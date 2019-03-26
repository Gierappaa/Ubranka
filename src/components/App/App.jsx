import React from 'react';
import './App.scss';
import { Counter } from './../Counter/Counter';
import { WelcomeSection } from './../WelcomeSection/WelcomeSection';
import { CreateAccount } from './../CreacteAccount/CreateAccount';
import { AboutUs } from './../AboutUs/AboutUs';
import { Organizations } from './../Organizations/Organizations';
import { ContactUs } from './../ContactUs/ContactUs';

export class App extends React.Component {
    render() {
        return (
            <div>
                <WelcomeSection />
                <Counter />
                <CreateAccount />
                <AboutUs />
                <Organizations />
                <ContactUs />
            </div>
        );
    }
}

