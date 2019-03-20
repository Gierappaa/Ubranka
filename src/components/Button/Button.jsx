import classNames from 'classnames';
import React from 'react';

import './Button.scss';

export class Button extends React.Component {
  render() {
    const classes = {
      button: true,
      'button--border': this.props.hasBorder,
      'button--uppercase': this.props.uppercase,
    };

    const style = {
      fontSize: this.props.fontSize || '14px',
    };

    return (
        <button className={classNames(classes)} type="button" style={style}>
          {this.props.children}
        </button>
    )
  }
}

