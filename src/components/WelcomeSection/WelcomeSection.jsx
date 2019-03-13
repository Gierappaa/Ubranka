import React from 'react';
import Header from "../Header/index.jsx";
import TitleDecoration from "../TitleDecoration/index.jsx";

import './WelcomeSection.scss';

export class WelcomeSection extends React.Component {
    render() {
        return (
            <div className="welcome-section">
                <Header/>

                {/* <TitleDecoration pierwszy="Oddaj rzeczy" drugi="Zorganizuj zbiórkę" /> */}
                <TitleDecoration
                    title="Zacznij pomagać!"
                    subtitle="Oddaj niechciane rzeczy w zaufane ręce">
                </TitleDecoration>

                <div className='titleDecoration__buttons'>
                    <div className='titleDecoration__buttons__btn'> {this.props.pierwszy}</div>
                    <div className='titleDecoration__buttons__btn'> {this.props.drugi}</div>
                </div>
            </div>
        );
    }
}

