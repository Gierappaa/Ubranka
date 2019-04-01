import React from 'react';
import './ThankYou.scss';
import { BrowserRouter as Router, Route, Link as RouterLink } from "react-router-dom";
import { Button } from "../../Button/Button";

export class ThankYou extends React.Component {

    render() {
        return (
            <div className="ThankYou">
                <div>
                    Dziekujemy za wyslanie zgloszenia
                </div>
            </div>
        )
    }
}

