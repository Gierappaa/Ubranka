import React from 'react';
import './Summary.scss';
import { BrowserRouter as Router, Route, Link as RouterLink } from "react-router-dom";
import { Button } from "../../Button/Button";

export class Summary extends React.Component {

    render() {
        return (
            <div className="summary">

                <div>
                    Tutaj będzie napisane podsumowanie całości formularza.
                </div>
                <Button><RouterLink to='/loggedIn/stepFour'>Wstecz</RouterLink></Button>
                <Button><RouterLink to='/loggedIn/thankYou'>Dalej</RouterLink></Button>

            </div>
        )
    }
}

