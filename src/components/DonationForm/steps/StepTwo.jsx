import React from 'react';
import './StepTwo.scss';
import { BrowserRouter as Router, Route, Link as RouterLink } from "react-router-dom";
import { Button } from "../../Button/Button";
import { Info } from './../info/info';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing.unit * 2,
    },
});

export class StepTwo extends React.Component {
    state = {
        bags: "worki",
        bagsCount: 0,
    };


    handleChange = event => {
        console.log('Here!');
        console.log(event);
        console.log(this.state);

        this.setState({ [event.target.name]: event.target.value });
    };


    render() {

        return (
            <div className="stepOne">
                <Info title="Ważne!" subTitle="Wszystkie rzeczy do oddania spakuj w 60l worki."></Info>
                <p>krok 2/4</p>
                <h3>Podaj liczbę 60l worków, które spakowałeś/aś rzeczy:</h3>


                <form className="worki" autoComplete="off">
                    <FormControl className="worki">
                        <InputLabel htmlFor="bags-simple">Liczba worków</InputLabel>
                        <Select
                            value={this.state.bagsCount}
                            onChange={this.handleChange}
                            inputProps={{
                                name: 'bagsCount',
                                id: 'bags-simple',
                            }}>
                            <MenuItem value={10}>1</MenuItem>
                            <MenuItem value={20}>2</MenuItem>
                            <MenuItem value={30}>3</MenuItem>
                            <MenuItem value={40}>4</MenuItem>
                            <MenuItem value={50}>5</MenuItem>
                            <MenuItem value={60}>6</MenuItem>
                            <MenuItem value={70}>7</MenuItem>
                            <MenuItem value={80}>8</MenuItem>
                            <MenuItem value={90}>9</MenuItem>
                            <MenuItem value={100}>10</MenuItem>
                            <MenuItem value={110}>Więcej</MenuItem>
                        </Select>
                    </FormControl>
                </form>
                <Button><RouterLink to='/loggedIn'>Wstecz</RouterLink></Button>
                <Button><RouterLink to='/loggedIn/stepThree'>Dalej</RouterLink></Button>
            </div>
        )
    }
}

