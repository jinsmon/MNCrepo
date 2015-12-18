import React from 'react'; // eslint-disable-line  no-unused-vars
import ControlBase from './../../controls/ControlBase';
import Menu from './../layout/menu/menu';
import VisitInformation from './VisitInformation';
import SinglePatientStore from '../../stores/SinglePatientStore';
import PatientContainer from './../layout/container/patientContainer';

var data = {
    options: [
        {
            text: locale('VisitInformation'),
            target: VisitInformation,
            icon: './../../patient/vistinfo_icon.png'
        },
        {
            text: locale('BasicInformation'),
            target: VisitInformation,
            icon: './../../patient/basicInfo_icon.png'
        },
        {
            text: locale('PastEpisodes'),
            target: VisitInformation,
            icon: './../../patient/pastEpisode_icon.png'
        },
        {
            text: locale('ReportsAndResults'),
            target: VisitInformation,
            icon: './../../patient/reports_icon.png'
        },
        {
            text: locale('RiskProfile'),
            target: VisitInformation,
            icon: './../../patient/riskProfile_icon.png'
        }
    ]
};

var menudivStyle = {width: '100%'};
export default class SinglePatientView extends ControlBase {

    constructor() {
        super();
        this.state = {
            data: VisitInformation,
            title: locale('VisitInformation'),
            patientData: {}
        };
        SinglePatientStore.addChangeListener(AppConstants.FETCH_EVENT, this.notifyPatientViewDataFetch.bind(this));
        AppAction.executeAction(ActionType.SINGLE_PATIENT_FETCH, null);
    }

    notifyPatientViewDataFetch(data) {
        this.state.patientData = data.args;
        this.forceUpdate();
    }

    testCallBack(targetData, targetTitle) {
        this.setState({data: targetData});
        this.setState({title: targetTitle});
    }
    childRender() {
        return (
            <PatientContainer>  
                            <div className="SPContainer">
                                <Menu options={data.options} callback={this.testCallBack.bind(this)}/>   
                                <div>       
                                    <div style={menudivStyle}>
                                    <this.state.data {...this.props}/>
                                    </div>   
                                </div>                
                            </div>            
                 </PatientContainer>
            );
    }
}