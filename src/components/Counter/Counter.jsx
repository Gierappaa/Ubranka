import React from 'react';
import './Counter.scss';

const items = [{
  count: 10,
  title: 'Oddanych worków',
  subtitle: 'BLABLABLA',
}];

export class Counter extends React.Component {
  render() {
    return (
      <div className="counter-section" >
        {/* {
              items.map((item) => (
                  <CounterItem count={item.count} title={item.title} subtitle={item.subtitle}/>
              ))
          } */}
        <div className='counter-section__column'>
          <p className='counter-section__title'>10</p>
          <h4 className='counter-section__subtitle'>Oddanych worków</h4>
          <p className='counter-section__content'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>

        <div className='counter-section__column'>
          <p className='counter-section__title'>5</p>
          <h4 className='counter-section__subtitle'>Wspartych organizacji</h4>
          <p className='counter-section__content'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>

        <div className='counter-section__column'>
          <p className='counter-section__title'>7</p>
          <h4 className='counter-section__subtitle'>Zorganizowanych zbiórek</h4>
          <p className='counter-section__content'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>

    )
  }
}

