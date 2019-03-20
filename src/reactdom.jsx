import React from 'react';
import ReactDOM from 'react-dom';

import './style/main.scss';
import { Counter } from './components/Counter/Counter';
import { WelcomeSection } from './components/WelcomeSection/WelcomeSection.jsx';
import { CreateAccount } from './components/CreacteAccount/CreateAccount';

document.addEventListener('DOMContentLoaded', function () {
  ReactDOM.render(<div>
    <WelcomeSection />
    <Counter />
    <CreateAccount />
  </div>,
    document.getElementById('app')
  );
});
