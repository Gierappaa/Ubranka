import React from 'react';

import './ContactUs.scss';
import { Button } from '../../components/Button/Button';
import { TitleDecoration } from '../../components/TitleDecoration/TitleDecoration';
import TextField from '@material-ui/core/TextField';


export class ContactUs extends React.Component {
    state = {
        name: '',
        massage: '',
        email: '',
    };

    componentDidMount() {
        this.forceUpdate();
    };

    handleChangeName = name => event => {
        this.setState({ [name]: event.target.value });
    };
    handleChangeEmail = email => event => {
        this.setState({ [email]: event.target.value });
    };
    handleChangeMassage = massage => event => {
        this.setState({ [massage]: event.target.value });
    };
    render() {

        return (
            <div className="contactUs-section" name="ContactUs">
                <div className="contactUs-section__form">
                    <TitleDecoration title="Skontaktuj się z nami">Formularz kontaktowy</TitleDecoration>

                    <div className="contactUs-section__middle">

                        <TextField
                            id="standard-name"
                            label="Imię"
                            className="imię contactUs-section__input"
                            value={this.state.name}
                            onChange={this.handleChangeName('name')}
                            margin="normal"
                        />

                        <TextField
                            id="standard-email"
                            label="E-mail"
                            className="email contactUs-section__input"
                            value={this.state.email}
                            onChange={this.handleChangeEmail('email')}
                            margin="normal"
                        />
                    </div>
                    <TextField
                        id="standard-massage"
                        label="Wiadomość"
                        className="contactUs-section__input contactUs-section__input--wide"
                        value={this.state.massage}
                        onChange={this.handleChangeMassage('massage')}
                        margin="normal"
                    />


                    <Button
                        padding="14px"
                        fontSize="2rem">
                        Wyślij</Button>
                </div>
            </div>
        );
    }
}

