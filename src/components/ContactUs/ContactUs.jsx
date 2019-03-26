import React from 'react';
import './ContactUs.scss';
import { Button } from '../Button/Button';
import { TitleDecoration } from '../TitleDecoration/TitleDecoration';
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
                            className="imię"
                            value={this.state.name}
                            onChange={this.handleChangeName('name')}
                            margin="normal"
                        />

                        <TextField
                            id="standard-email"
                            label="E-mail"
                            className={"email"}
                            value={this.state.email}
                            onChange={this.handleChangeEmail('email')}
                            margin="normal"
                        />
                    </div>
                    <TextField
                        id="standard-massage"
                        label="Wiadomość"
                        className={"massage"}
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

