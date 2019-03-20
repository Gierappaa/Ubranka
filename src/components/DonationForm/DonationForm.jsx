import React from "react";

// Tutaj wszystkie importy kroków
import Step1 from "./steps/Step1.jsx";

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
        const step = this.state.step;

        // To do nowego komponentu
        const WrapperDOM = <div>TU BĘDZIE MIŚ I KONTENER NA ZAWARTOŚć</div>

        if (step === 1) {
            <WrapperDOM>
                <Formularz/>
            </WrapperDOM>
        } else if (step === 2) {

        } else {

        }
    }
}
