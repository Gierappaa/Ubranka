import React from 'react';
import { TitleDecoration } from "../TitleDecoration/TitleDecoration";
import './AboutUs.scss';

const images = [
    require('./../../images/about.jpg')
];

export class AboutUs extends React.Component {
    render() {
        return (
            <div className="aboutUs-section" name="aboutus">
                <div className= "aboutUs-section__textSide">
                    <TitleDecoration
                        title="O nas">
                        Nori grape silber beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairee turnip leek lentil turnip greens parsnip.
                    </TitleDecoration>
                </div>
                <div>
                    <img className="aboutUs-section__image" src={images[0]} alt="This image show us!" />
                </div>
            </div>
        );
    }
}

