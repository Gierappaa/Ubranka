import React from 'react';
import './CreateAccountItem.scss';

export class CreateAccountItem extends React.Component {
    render() {
        return (
            <div className="createAccountItem-section">
                <i className= {this.props.icon}></i>
            </div>
        );
    }
}

