/*eslint no-mixed-spaces-and-tabs:0*/
/*eslint no-unused-vars: 0*/
import React from 'react';
import Menu from './../layout/menu/menu';
import CurrentPregnancy from './CurrentPregnancy';
import MedicalHistory from './MedicalHistory';
import PhysicalExamination from './PhysicalExamination';
import LabResultsAndOrders from './LabResultsAndOrders';
import MedicalPrescriptions from './MedicalPrescriptions';
import Comments from './Comments';
import Button from './../../controls/ControlButton';
import VisitStore from '../../stores/VisitStore';
import ReferralLetter from './../referral/ReferralLetter';

var data = {
    options: [
        {
            text: locale('CurrentPregnancy'),
            target: CurrentPregnancy,
            title: locale('CurrentPregnancyTitle')
        },
        {
            text: locale('MedicalHistory'),
            target: MedicalHistory,
            title: locale('MedicalHistoryTitle')
        },
        {
            text: locale('PhysicalExamination'),
            target: PhysicalExamination,
            title: locale('PhysicalExaminationTitle')
        },
        {
            text: locale('LabResultsandOrders'),
            target: LabResultsAndOrders,
            title: locale('LabResultsandOrdersTitle')
        },
        {
            text: locale('MedicalPrescriptions'),
            target: MedicalPrescriptions,
            title: locale('MedicalPrescriptionsTitle')
        },
        {
            text: locale('Comments'),
            target: Comments,
            title: locale('Comments')
        },
        {
            text: 'Referral Letter',
            target: ReferralLetter,
            title: 'Referral Letter'
        }
    ]
};


var StyleHeader = {
    border: '1px solid black',
    backgroundColor: 'lightgrey',
    fontSize: '1.25vw'
};
var borderStyle = {};
var borderStyle1 = {
    border: '1px solid #ccc',
    'overflow-y': 'scroll',
    'overflow-x': 'hidden'
};
var appName = {textAlign: 'center'};

var menudivStyle = {
    width: '100%',
    marginTop: '10px'
};
var btnsStyle = {'float': 'right'};
var visitStart = {marginTop: '85px'};

export default class VisitInfo extends React.Component {

    constructor() {
        super();
        this.state = {
            data: CurrentPregnancy,
            title: locale('CurrentPregnancyTitle'),
            visitData: {}
        };
        VisitStore.addChangeListener(AppConstants.SAVE_EVENT, this.notifyVisitInfoSave.bind(this));
        VisitStore.addChangeListener(AppConstants.FETCH_EVENT, this.notifyVisitInfoFetch.bind(this));

        AppAction.executeAction(ActionType.VISIT_INFO_FETCH, null);
    }

    testCallBack(targetData, targetTitle) {
        this.setState({data: targetData});
        this.setState({title: targetTitle});
    }

    notifyVisitInfoFetch(data) {
        this.state.visitData = data.args;
        this.forceUpdate();
    }
    notifyVisitInfoSave(data) {}

    handlesaveAction() {
        AppAction.executeAction(ActionType.SAVE_VISIT_INFO_ACTION, this.state.visitData);
    }

    handlesubmitAction() {
        AppAction.executeAction(ActionType.SAVE_VISIT_INFO_ACTION, this.state.visitData);
    }

    discardAction() {}


    render() {
        return (
            <div style={visitStart}>
                    <h3>Visit Information</h3>
                    <div style={borderStyle}>
                        <Menu options={data.options} callback={this.testCallBack.bind(this)}/>                       
                        <div style={borderStyle1}>                       
                               
                            		<div style={menudivStyle}>
                            			<span style={btnsStyle}>
                            				
                            			</span>
                            			
                            			<span><this.state.data context={this.state.visitData}/></span>
                                    		
                            		</div> 
                        </div>
                  </div>
                </div>
            );
    }
}
