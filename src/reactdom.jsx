import React from 'react';
import ReactDOM from 'react-dom';
import './style/main.scss';
import { Counter } from './components/Counter/Counter';
import { WelcomeSection } from './components/WelcomeSection/WelcomeSection';
import { CreateAccount } from './components/CreacteAccount/CreateAccount';
import { AboutUs } from './components/AboutUs/AboutUs'

document.addEventListener('DOMContentLoaded', function () {
  ReactDOM.render(<div>
    <WelcomeSection />
    <Counter />
    <CreateAccount />
    <AboutUs />
  </div>,
    document.getElementById('app')
  );
});
