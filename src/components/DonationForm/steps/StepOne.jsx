import React from 'react';
import './StepOne.scss';
import { BrowserRouter as Router, Route, Link as RouterLink } from "react-router-dom";
import { Button } from '../../Button/Button';


export class StepOne extends React.Component {

    render() {
        return (
            <div className="stepOne">
                <div>
                    zółty pasek
                 </div>

                <div>
                    Zaznacz co chcesz dodać:
                </div>
                <Button><RouterLink to="/loggedIn/stepTwo">Dalej</RouterLink>
                </Button>

            </div>
        )
    }
}

