import React from 'react';
import './StepThree.scss';
import { BrowserRouter as Router, Route, Link as RouterLink } from "react-router-dom";
import { Button } from "../../Button/Button";
import { Info } from './../info/info';


export class StepThree extends React.Component {

    render() {
        return (
            <div className="stepThree">
               <Info title="Ważne!" subTitle="Na podstawie Twoich kryteriów oraz rzeczy, które masz do oddania wybraliśmy organizacje, którym mozesz pomóc. Wybierz jedna, do której trafi Twoja przesyłka."></Info>
                <p>krok 3/4</p>
                <h3>Wybierz organizajce, której chcesz pomóc:</h3>

                <Button><RouterLink to='/loggedIn/stepTwo'>Wstecz</RouterLink></Button>
                <Button><RouterLink to='/loggedIn/stepFour'>Dalej</RouterLink></Button>
            </div>
        )
    }
}

