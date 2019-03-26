import React from 'react';
import ReactDOM from 'react-dom';
import './style/main.scss';

import { Routing } from './components/Routing/Routing';

document.addEventListener('DOMContentLoaded', function () {
  ReactDOM.render(
    <Routing />,
    document.getElementById('app')
  );
});
