import React from 'react';
import { Header } from "../Header/Header";
import { TitleDecoration } from "../TitleDecoration/TitleDecoration";
import './WelcomeSection.scss';
import { Button } from '../Button/Button.jsx';
import { BrowserRouter as Router, Route, Link as RouterLink } from "react-router-dom";

export class WelcomeSection extends React.Component {
    render() {
        return (
            <div className="welcome-section" name="Start">
                <Header />
                <div>
                    <TitleDecoration
                        title="Zacznij pomagać!"
                        subtitle="Oddaj niechciane rzeczy w zaufane ręce">
                    </TitleDecoration>
                    <div className="welcome-section__buttons">
                        <Button
                            fontSize="40px"
                            margin="20px"
                            hasBorder={false}>
                            <RouterLink
                                className="header__list__item"
                                to="/loggedin">
                                Oddaj <br /> rzeczy</RouterLink>
                        </Button>
                        <Button
                            fontSize="40px" >
                            Zorganizuj <br /> zbiórkę
                        </Button>
                    </div>
                </div>
            </div>
        );
    }
}

