import React from 'react';
import './CreateAccount.scss';
import { TitleDecoration } from '../TitleDecoration/TitleDecoration';
import { CreateAccountItem } from '../CreateAccountItem/CreateAccountItem'
import { Button } from '../Button/Button';


export class CreateAccount extends React.Component {
  render() {
    return (<div className="createAccount-section">
      <TitleDecoration
        title="Wystarcza 4 proste kroki"
      />
      <div className="createAccount-section__content">
        <CreateAccountItem
          icon="fas fa-search-plus"
          title="Wybierz rzeczy"
          subTitle="ubrania, zabawki, sprzęt i inne" />

        <CreateAccountItem
          icon="fas fa-arrow-down"
          title="Spakuj je"
          subTitle="skorzystaj z worków na śmieci" />

        <CreateAccountItem
          icon="fas fa-glasses"
          title="Zdecyduj komu chcesz pomóc"
          subTitle="wybierz zaufane miejsce" />

        <CreateAccountItem
          icon="fas fa-sync"
          title="Zamów kuriera"
          subTitle="kurier przyjedzie w dogodnym terminie" />
      </div>
      <Button
        fontSize="40px"
        padding="10px">
        Załóż konto
      </Button>
    </div>
    )
  }
}

