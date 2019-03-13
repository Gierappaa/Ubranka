import React from 'react';
import './TitleDecoration.scss';

const images = [
  require('./../../images/decoration.png')
];

class TitleDecoration extends React.Component {
  render() {
    return (
      <div className='titleDecoration'>
        <p> {this.props.title} </p>
        <p> {this.props.subtitle}</p>
        <img src={images[0]} alt="" /><br />
        <div className='titleDecoration__buttons'>
        {/* wywalić */}
          <div className='titleDecoration__buttons__btn' display= 'none'> {this.props.pierwszy}</div>
          <div className='titleDecoration__buttons__btn'> {this.props.drugi}</div>
        </div>
      </div>
    )
  }
}

export default TitleDecoration;

