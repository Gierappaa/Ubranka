import React from 'react';
import './FirstComponent.scss';

const items = [{
  count: 10,
  title: 'Oddanych worków',
  subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
}, {
  count: 5,
  title: 'Wspartych realizacji',
  subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
}, {
  count: 7,
  title: 'Zorganizowanych zbiórek',
  subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
}];

export class CounterItem extends React.Component {
  render() {
    return (
      <div id="counter" className="componet1">
        {
              items.map((item) => (
                  <CounterItem count={item.count} title={item.title} subtitle={item.subtitle}/>
              ))
          }
        <div className='componet1__column'>
          <p className='componet1__title'>{count}</p>
          <h4 className='componet1__subtitle'>{title}</h4>
          <p className='componet1_content'> ipsum dolor sit amet consectetur adipisicing elit.</p>
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

