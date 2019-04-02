import React from "react";
import { BrowserRouter as Router, Route, withRouter } from "react-router-dom";

import { StepOne } from './steps/StepOne';
import { StepTwo } from './steps/StepTwo';
import { StepThree } from './steps/StepThree';
import { StepFour } from './steps/StepFour';
import { Summary } from './steps/Summary';
import { ThankYou } from './steps/ThankYou';

class DonationFormClass extends React.Component {
    constructor(props) {
        super(props);

        const state = {
            donationItems: {},
            donateTo: {},
            addressData: {},
        }
    }

    handleItemsToGive = (items) => {
        // Tutaj setState
        console.log(items);

        // Tutaj routing
        this.props.history.push('/loggedIn/stepTwo');
    };

    render() {
        return (
            <Router>
                <div>
                    <Route exact path='/loggedIn' component={() => <StepOne onSubmit={this.handleItemsToGive}/>}/>
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

export const DonationForm = withRouter(DonationFormClass);
