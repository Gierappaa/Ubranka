import React from 'react';
import './CreateAccountItem.scss';

export class CreateAccountItem extends React.Component {
    render() {
        return (
            <div className="createAccountItem-section">
                <i className= {this.props.icon}></i>
                <p className="createAccountItem-section__title">{this.props.title}</p>
                <p className="createAccountItem-section__subTitle">{this.props.subTitle}</p>
            </div>
        );
    }
}

