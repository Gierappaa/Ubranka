import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, NavLink } from "react-router-dom";
import { WelcomeSection } from '../WelcomeSection/WelcomeSection';
import { ContactUs } from '../ContactUs/ContactUs';
import { LogIn } from '../LogIn/LogIn';
import { Register } from '../Register/Register';
import { App} from '../App/App';
import {LoggedIn} from '../LoggedIn/LoggedIn';


export class Routing extends React.Component {

    render() {

        return (
            <Router>
                <div>
                    <Route exact path='/' component={App} />
                    <Route path='/contact' component={ContactUs} />
                    <Route path='/logIn' component={LogIn} />
                    <Route path='/register' component={Register} />
                    <Route path='/loggedIn' component={LoggedIn} />

                    </div>
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