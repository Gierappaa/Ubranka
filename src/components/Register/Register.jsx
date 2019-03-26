import React from 'react';
import './Register.scss';
import { Button } from '../Button/Button';
import { TitleDecoration } from '../TitleDecoration/TitleDecoration';
import TextField from '@material-ui/core/TextField';
import { Header } from '../Header/Header'

export class Register extends React.Component {
    state = {
        password: '',
        confirmPassword: '',
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
    handleChangeConfirmPassword = confirmPassword => event => {
        this.setState({ [confirmPassword]: event.target.value });
    };
    render() {

        return (
            <div className="Register-section">
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
                        label="Hasło"
                        className={"password"}
                        value={this.state.password}
                        onChange={this.handleChangepassword('password')}
                        margin="normal"
                    />

                    <TextField
                        id="standard-confirmPassword"
                        label="Powtórz hasło"
                        className={"confirmPassword"}
                        value={this.state.confirmPassword}
                        onChange={this.handleChangeConfirmPassword('confirmPassword')}
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

