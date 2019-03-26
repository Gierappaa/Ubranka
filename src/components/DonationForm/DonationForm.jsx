import React from "react";

import Step1 from "./steps/Step1.jsx";
import { StepOne } from './steps/StepOne'
import { StepTwo } from './steps/StepTwo'
import { StepThree } from './steps/StepThree'
import { StepFour } from './steps/StepFour'

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
                    <Route exact path='/' component={StepOne} />
                    <Route path='/stepTwo' component={StepTwo} />
                    <Route path='/stepThree' component={StepThree} />
                    <Route path='/stepFour' component={StepFour} />
                </div>
            </Router>
        )
    }
    // render() {
    //     const step = this.state.step;

    //     // To do nowego komponentu
    //     const WrapperDOM = <div>TU BĘDZIE MIŚ I KONTENER NA ZAWARTOŚć</div>

    //     if (step === 1) {
    //         <WrapperDOM>
    //             <Formularz/>
    //         </WrapperDOM>
    //     } else if (step === 2) {

    //     } else {

    //     }
    // }


}
