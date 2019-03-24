import React from 'react';
import './Organizations.scss';
import { TitleDecoration } from '../TitleDecoration/TitleDecoration';
import { Button } from '../Button/Button';


export class Organizations extends React.Component {
    render() {
        return (
            <div className="organizations-section" name="Organizations">
            <TitleDecoration title= "Komu pomagamy"></TitleDecoration>
            <Button>Fundacjom</Button>
            <Button>Organizacjom pozarządowym</Button>
            <Button>Lokalnym zbrórkom</Button>

            Lorem ipsum dolor sit amet consectetur adipisicing elit. At sapiente, placeat illum mollitia incidunt vero autem, consectetur et inventore nam cum harum itaque rerum natus, repudiandae quisquam nostrum! Sapiente, blanditiis.
            </div>
        );
    }
}

