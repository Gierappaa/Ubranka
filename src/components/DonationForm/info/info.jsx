import React from 'react';
import './info.scss'

export class Info extends React.Component {

    render() {
        return (
            <div className="info-section">
                <h2>{this.props.title}</h2>
                <p>{this.props.subTitle}</p>
            </div>
        )
    }
}