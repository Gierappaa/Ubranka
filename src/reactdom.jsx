import React from 'react';
import ReactDOM from 'react-dom';
import './style/main.scss';
import { Counter } from './components/Counter/Counter';
import { WelcomeSection } from './components/WelcomeSection/WelcomeSection';
import { CreateAccount } from './components/CreacteAccount/CreateAccount';
import { AboutUs } from './components/AboutUs/AboutUs'
import { Organizations } from './components/Organizations/Organizations'
import { ContactUs } from './components/ContactUs/ContactUs'

document.addEventListener('DOMContentLoaded', function () {
  ReactDOM.render(<div>
    <WelcomeSection />
    <Counter />
    <CreateAccount />
    <AboutUs />
    <Organizations />
    <ContactUs />
  </div>,
    document.getElementById('app')
  );
});
