import React from 'react';
import './SecondComponent.scss';
import TitleDecoration from '../TitleDecoration/index.jsx';


class SecondComponent extends React.Component {
  render() {
    return (
      <TitleDecoration
        title="Wystarcza 4 proste kroki"
        // subtitle="Oddaj niechciane rzeczy w zaufane ręce "
        // pierwszy="Wystarcza 4 proste kroki"
        // drugi="" 
        />
    )
  }
}


export default SecondComponent;

