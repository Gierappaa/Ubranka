import React from 'react';
import './ContactUs.scss';
import { Button } from '../Button/Button';
import { TitleDecoration } from '../TitleDecoration/TitleDecoration';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';


const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing.unit,
    },
});


export class ContactUs extends React.Component {
    state = {
        name: 'imię',
        massage: 'Wiadomość',
        email: 'email',
    };

    componentDidMount() {
        this.forceUpdate();
    }

    handleChange = e => {
        this.setState({ name: e.target.value });
    };

    handleChangeMassage = e => {
        this.setState({ massage: e.target.value });
    }

    handleChangeEMail = e => {
        this.setState({ email: e.target.value })
    }
    render() {
        const { classes } = this.props;

        return (
            <div className="contactUs-section" name="ContactUs">
                <TitleDecoration title="Skontaktuj się z nami"></TitleDecoration>

                {/* <FormControl className={classes.formControl}> */}
                <InputLabel htmlFor="component-simple">Imię</InputLabel>
                <Input id="component-simple" value={this.state.name} onChange={this.handleChange} />

                <InputLabel htmlFor="component-simple">e-mail</InputLabel>
                <Input id="component-simple" value={this.state.email} onChange={this.handleChangeEMail} />

                <InputLabel htmlFor="component-simple">Wiadomość</InputLabel>
                <Input id="component-simple" value={this.state.massage} onChange={this.handleChangeMassage} />
                {/* </FormControl> */}
                <Button>Wyślij</Button>
            </div>
        );
    }
}

