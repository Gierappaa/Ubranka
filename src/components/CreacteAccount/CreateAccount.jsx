import React from 'react';
import './CreateAccount.scss';
import { TitleDecoration } from '../TitleDecoration/TitleDecoration';
import { CreateAccountItem } from '../CreateAccountItem/CreateAccountItem'


export class CreateAccount extends React.Component {
  render() {
    return (<div className="createAccount-section">
      <TitleDecoration
        title="Wystarcza 4 proste kroki"
      />
      <div className="createAccount-section__content">
        <CreateAccountItem icon="fas fa-search-plus" />
        <CreateAccountItem icon="fas fa-arrow-down" />
        <CreateAccountItem icon="fas fa-glasses" />
        <CreateAccountItem icon="fas fa-sync" />
      </div>
    </div>
    )
  }
}

