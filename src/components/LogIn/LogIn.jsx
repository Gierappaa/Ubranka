import React from 'react';
import './LogIn.scss';
import { Button } from '../Button/Button';
import { TitleDecoration } from '../TitleDecoration/TitleDecoration';
import TextField from '@material-ui/core/TextField';
import { Header } from '../Header/Header'

export class LogIn extends React.Component {
    state = {
        password: '',
        email: '',
    };

    componentDidMount() {
        this.forceUpdate();
    };


    handleChangeEmail = email => event => {
        this.setState({ [email]: event.target.value });
    };
    handleChangepassword = password => event => {
        this.setState({ [password]: event.target.value });
    };
    render() {

        return (
            <div className="LogIn-section">
                <Header />
                <div className="contactUs-section__form">
                    <TitleDecoration title="Skontaktuj się z nami">Formularz kontaktowy</TitleDecoration>

                    <TextField
                        id="standard-email"
                        label="E-mail"
                        className={"email"}
                        value={this.state.email}
                        onChange={this.handleChangeEmail('email')}
                        margin="normal"
                    />

                    <TextField
                        id="standard-password"
                        label="Wiadomość"
                        className={"password"}
                        value={this.state.password}
                        onChange={this.handleChangepassword('password')}
                        margin="normal"
                    />


                    <Button
                        padding="14px"
                        fontSize="2rem">
                        Załóż konto</Button>

                    <Button
                        padding="14px"
                        fontSize="2rem">
                        Zaloguj się</Button>
                </div>
            </div>
        );
    }
}

