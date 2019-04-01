import React from 'react';
import './StepOne.scss';
import { BrowserRouter as Router, Route, Link as RouterLink } from "react-router-dom";
import { Button } from '../../Button/Button';
import { Info } from './../info/info';
import Checkbox from '@material-ui/core/Checkbox';


export class StepOne extends React.Component {
    state = {
        checkedA: false,
        checkedB: false,
        checkedC: false,
        checkedD: false,
        checkedE: false,
    };

    handleChangeA = name => event => {
        this.setState({ [name]: event.target.checked });

    };
    handleChangeB = name => event => {
        this.setState({ [name]: event.target.checked });
    };
    handleChangeC = name => event => {
        this.setState({ [name]: event.target.checked });
    };
    handleChangeD = name => event => {
        this.setState({ [name]: event.target.checked });
    };
    handleChangeE = name => event => {
        this.setState({ [name]: event.target.checked });
    };
    render() {
        return (
            <div className="step-one">
                <Info title="Ważne!" subTitle="Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu  bedziemy 
                wiedzieć komu lepiej je przekazać."></Info>
                <p>krok 1/4</p>
                <h3>Zaznacz co chcesz oddać</h3>
                <div className="step-one__checkboxs">
                    <div>
                        <Checkbox
                            checked={this.state.checkedA}
                            onChange={this.handleChangeA('checkedA')}
                            value="checkedA"
                            text="czu tp"
                        />Ubrania, które nadają się do ponownego urzycia
                    </div>
                    <div>
                        <Checkbox
                            checked={this.state.checkedB}
                            onChange={this.handleChangeB('checkedB')}
                            value="checkedB"
                        />Ubrania do wyrzucenia
                    </div>
                    <div>
                        <Checkbox
                            checked={this.state.checkedC}
                            onChange={this.handleChangeC('checkedC')}
                            value="checkedC"
                        />zabawki
                    </div>
                    <div>
                        <Checkbox
                            checked={this.state.checkedD}
                            onChange={this.handleChangeD('checkedD')}
                            value="checkedD"
                        />książki
                    </div>
                    <div>
                        <Checkbox
                            checked={this.state.checkedE}
                            onChange={this.handleChangeE('checkedE')}
                            value="checkedE"
                        />inne
                    </div>
                </div>
                <Button><RouterLink to="/loggedIn/stepTwo">Dalej</RouterLink>
                </Button>

            </div>
        )
    }
}

