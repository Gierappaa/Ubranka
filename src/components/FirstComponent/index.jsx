import React from 'react';
import './FirstComponent.scss';

class Counter extends React.Component {
  render() {
    return (
      <div className="componet1">
        <div className='componet1__column'>
          <p className='componet1__title'>10</p>
          <h4 className='componet1__subtitle'>Oddanych worków</h4>
          <p className='componet1_content'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>

        <div className='componet1__column'>
          <p className='componet1__title'>5</p>
          <h4 className='componet1__subtitle'>Wspartych organizacji</h4>
          <p className='componet1_content'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>

        <div className='componet1__column'>
          <p className='componet1__title'>7</p>
          <h4 className='componet1__subtitle'>Zorganizowanych zbiórek</h4>
          <p className='componet1_content'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>

    )
  }
}


export default Counter;

