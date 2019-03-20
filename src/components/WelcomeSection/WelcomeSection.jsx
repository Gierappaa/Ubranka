import React from 'react';
import Header from "../Header/index.jsx";
import { TitleDecoration } from "../TitleDecoration/TitleDecoration";
import './WelcomeSection.scss';
import { Button } from '../Button/Button.jsx';

export class WelcomeSection extends React.Component {
    render() {
        return (
            <div className="welcome-section">
                <Header />
                <div>
                    <TitleDecoration
                        title="Zacznij pomagać!"
                        subtitle="Oddaj niechciane rzeczy w zaufane ręce">
                    </TitleDecoration>
                    <div className="welcome-section__buttons">
                        <Button fontSize="40px" margin="20px" hasBorder='1'>Oddaj <br /> rzeczy</Button>
                        <Button fontSize="40px" >Zorganizuj <br /> zbiórkę</Button>
                    </div>
                </div>
            </div>
        );
    }
}

