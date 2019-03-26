import React from 'react';
import './App.scss';
import { Counter } from './../../components/Counter/Counter';
import { WelcomeSection } from './../../components/WelcomeSection/WelcomeSection';
import { CreateAccount } from './../../components/CreacteAccount/CreateAccount';
import { AboutUs } from './../../components/AboutUs/AboutUs';
import { Organizations } from './../../components/Organizations/Organizations';
import { ContactUs } from '../ContactUs/ContactUs';
import { scroller } from 'react-scroll';

export class App extends React.Component {
    componentDidMount() {
        const pathName = this.props.location.pathname;
        const scrollElementId = pathName.replace('/', '');

        console.log(scrollElementId);

        scroller.scrollTo(scrollElementId, {
            duration: 1500,
            delay: 100,
            smooth: true,
            offset: 50,
        });
    }

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

