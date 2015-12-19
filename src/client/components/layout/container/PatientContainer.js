import React from 'react';
import BannerContainer from './../container/bannerContainer';
import PatientBanner from '../banner/patientBanner';
import RegistrationStore from '../../../stores/RegistrationStore';


export default class PatientContainer extends React.Component {

    constructor() {
        super();
        RegistrationStore.addChangeListener(AppConstants.FETCH_EVENT, this.notifyPatientBannerDataFetch.bind(this));
        this.state = {patientData: {}};
        AppAction.executeAction(ActionType.REGISTERED_PATIENT_FETCH,null);
    }

    notifyPatientBannerDataFetch(data) {
        this.state.patientData = data.args;
        this.forceUpdate();
    }
    
    render() {

        return (
            <BannerContainer banner={<PatientBanner patientData={this.state.patientData}/>} >{this.props.children}</BannerContainer>
            );
    }
}

