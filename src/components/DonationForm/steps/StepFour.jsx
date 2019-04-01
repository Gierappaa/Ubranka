import React from 'react';
import './StepFour.scss';
import { BrowserRouter as Router, Route, Link as RouterLink } from "react-router-dom";
import { Button } from "../../Button/Button";
import { Info } from './../info/info';


export class StepFour extends React.Component {

    render() {
        return (
            <div className="stepFour">
               <Info title="Ważne!" subTitle="Podaj adres i termin odbioru rzeczy."></Info>
                <p>krok 4/4</p>
                <h3>Podaj adres i termin odbioru rzeczy przez kuriera.</h3>

                <Button><RouterLink to='/loggedIn/stepThree'>Wstecz</RouterLink></Button>
                <Button><RouterLink to='/loggedIn/summary'>Dalej</RouterLink></Button>

            </div>
        )
    }
}

