import React from 'react';
import './TitleDecoration.scss';

const images = [
  require('./../../images/decoration.png')
];

export class TitleDecoration extends React.Component {
  render() {
    return (
      <div className='title-decoration'>
        <p className='title-decoration__title'> {this.props.title} </p>
        <p className='title-decoration__subtitle'> {this.props.subtitle}</p>
        <img className='title-decoration__pattern' src={images[0]} alt="" /><br />
        {this.props.children}
      </div>
    )
  }
}
