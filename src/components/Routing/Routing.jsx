import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ContactUs } from '../../layouts/ContactUs/ContactUs';
import { LogIn } from '../LogIn/LogIn';
import { Register } from '../Register/Register';
import { App } from '../../layouts/App/App';
import { LoggedIn } from '../LoggedIn/LoggedIn';


export class Routing extends React.Component {

    render() {
        return (
            <Router>
                <Route exact path='/' component={App}/>

                {/* Tutaj dodaj resztę ścieżek */}
                <Route path='/aboutus' component={App}/>

                <Route path='/contact' component={ContactUs}/>
                <Route path='/logIn' component={LogIn}/>
                <Route path='/register' component={Register}/>
                <Route path='/loggedIn' component={LoggedIn}/>
            </Router>
        );
    }
}

// export const routes = [
//     {
//         route: 'main',
//         title: 'Witaj',
// component: </>
// },
// {
//   route: 'login',
//   title: 'Zaloguj się',
// //   component: KomponentKtoryObsluzySciezke
// },

// {
//     route: 'register',
//     title: 'Zarejestruj się',
//     // component: KomponentKtoryObsluzySciezke
//   },
//   {
//     route: 'loggedIn',
//     title: 'Jesteś zalogowany',
//     // component: KomponentKtoryObsluzySciezke
//   },
// ];
