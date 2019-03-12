import React from 'react';
import ReactDOM from 'react-dom';
import './style/main.scss';
import Header from './components/Header/index.jsx';
import Counter from './components/FirstComponent/index.jsx';
import SecondComponent from './components/SecondComponent/index.jsx';

document.addEventListener('DOMContentLoaded', function () {
  ReactDOM.render(<div>
    <Header />
    <Counter />
    <SecondComponent/>
  </div>,
    document.getElementById('app')
  );
});
