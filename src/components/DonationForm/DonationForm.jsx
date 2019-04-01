import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { StepOne } from './steps/StepOne';
import { StepTwo } from './steps/StepTwo';
import { StepThree } from './steps/StepThree';
import { StepFour } from './steps/StepFour';
import { Summary } from './steps/Summary';
import { ThankYou } from './steps/ThankYou';

export class DonationForm extends React.Component {
    constructor(props) {
        super(props);

        const state = {
            donationItems: {},
            donateTo: {},
            addressData: {},
        }
    }

    render() {
        return (
            <Router>
                <div>
                    <Route exact path='/loggedIn' component={StepOne} />
                    <Route path='/loggedIn/stepTwo' component={StepTwo} />
                    <Route path='/loggedIn/stepThree' component={StepThree} />
                    <Route path='/loggedIn/stepFour' component={StepFour} />
                    <Route path='/loggedIn/summary' component={Summary} />
                    <Route path='/loggedIn/thankYou' component={ThankYou} />
                </div>
            </Router>
        )
    }

}
