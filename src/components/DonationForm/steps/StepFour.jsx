import React from 'react';
import './StepFour.scss';
import { BrowserRouter as Router, Route, Link as RouterLink } from "react-router-dom";

export class StepFour extends React.Component {

    render() {
        return (
            <div className="stepOne">
                <div>
                    zółty pasek
                 </div>

                <div>
                    Zaznacz co chcesz dodać:
                </div>
                <Button>Dalej</Button>

            </div>
        )
    }
}

