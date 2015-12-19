/*eslint no-unused-vars: 0*/
/*eslint no-mixed-spaces-and-tabs:0*/
import React from 'react';
import Menu from './../layout/menu/menu';
import MotherGeneralInfo from './MotherGeneralInfo';
import MotherDemographics from './MotherDemographics';
import CurrentPregnancy from './CurrentPregnancy';
import RegistrationStore from '../../stores/RegistrationStore';
import {Button, Row, Col} from 'react-bootstrap';
import PregnancyHistory from './PregnancyHistory';
import ControlBase from './../../controls/ControlBase';

var data = {
    options: [
        {
            text: locale('PrimaryInformation'),
            target: MotherGeneralInfo,
            title: locale('PrimaryInformationTitle')
        },
        {
            text: locale('MothersDemographicInformation'),
            target: MotherDemographics,
            title: locale('MothersDemographicInformationTitle')
        },
        {
            text: locale('CurrentPregnancy'),
            target: CurrentPregnancy,
            title: locale('CurrentPregnancyTitle')
        }/*,
        {
            text: locale('PregnancyHistory'),
            target: PregnancyHistory
        }*/
    ]
};

var btnsStyle = {
    'float': 'right',
    padding: '15px'
};
var StyleHeader = {fontSize: '2.5vw'};
var appName = {textAlign: 'center'};
var menudivStyle = {width: '100%'};

/*
 * Need to be removed from this file
 */


export default class Registration extends ControlBase {

    constructor() {
        super();
        this.state = {
            data: MotherGeneralInfo,
            title: locale('PrimaryInformationTitle'),
            patientData: {}
            // patientData: RegistrationStore.getPatientData()
        };
        RegistrationStore.addChangeListener(AppConstants.SAVE_EVENT, this.notifyPatientRegistration.bind(this));
        RegistrationStore.addChangeListener(AppConstants.FETCH_EVENT, this.notifyPatientFetch.bind(this));
        AppAction.executeAction(ActionType.REGISTERED_PATIENT_FETCH, null);
    }

    testCallBack(targetData, targetTitle) {
        this.setState({data: targetData});
        this.setState({title: targetTitle});
    }

    notifyPatientRegistration(data) {}

    notifyPatientFetch(data) {
        this.state.patientData = data.args;
        this.forceUpdate();
    }
    // save button action.
    handleSaveAction() {
        AppAction.executeAction(ActionType.REGISTER_PATIENT_ACTION, this.state.patientData);
    }
    render() {
        return (
            <div className="regWrapper">
            		<Row className="registrationHeader">
	            		<Col xs={4} className="regHeaderTitle">
	                    <b>{locale('AddPatient')}</b>
	                    </Col>
	                    
	                    <Col xs={8} className="headerBtnWrapper">
	                    	<Button bsSize="large" onClick = {this.handleSaveAction.bind(this)} className="saveHeaderBtn">{locale('Save')}</Button>
	                        <Button bsSize="large" className="cancelHeaderBtn" onClick={this.navigate(Route.MO_WORKLIST)}>{locale('cancel')}</Button>
	                    </Col>
                    </Row>
                        <div>
                            <Menu options={data.options} callback={this.testCallBack.bind(this)}/>
                            <div>
                                <div style={menudivStyle}>
                                    <this.state.data context={this.state.patientData}/>
                                </div>
                            </div>
                        </div>
                </div>
            );
    }
}