/*eslint no-mixed-spaces-and-tabs:0*/
/*eslint no-unused-vars: 0*/
import React from 'react';
import {Input, Row, Col, Panel, Button} from 'react-bootstrap';
import VisitSummaryStore from '../../stores/VisitSummaryStore';
import StageIndicator from './../../controls/StageIndicator';
import ControlBase from './../../controls/ControlBase';

let wrapperClass = '';

var StyleHeader = {
    border: '1px solid black',
    backgroundColor: 'lightgrey',
    fontWeight: 'bold',
    paddingLeft: '12px'
};
var LabResultHeader = {
    border: '1px solid black',
    backgroundColor: 'lightgrey',
    textAlign: 'center',
    fontSize: '1.25vw'

};

var hrLineStyle={
	//height: '2px',
    border: '1px solid black'
};

var hrLineRedStyle={
    marginTop: '-1px',
    border: '1px solid red'
};

var pregnancystat =  [{
    text: 'W1-12',
    value: 'W1-12'
},
    {
        text: 'W13-27',
        value: 'W13-27'
    },
    {
        text: 'W28-40',
        value: 'W28-40'
    }];

var appName = {
    textAlign: 'center',
    fontSize: '1.25vw'
};
var fontStyle = {fontSize: '1vw'};
//var borderStyle = {border: '1px solid black'};
var contentStyle = {marginTop: '-43px'};
// var divStyle={height: '500px' };
// var divChildStyle={height: '30%' };
export default class VisitSummary extends ControlBase {

    constructor() {
        super();
        this.state = {visitSummary: {}};
        VisitSummaryStore.addChangeListener(AppConstants.FETCH_EVENT, this.retrieveVisitData.bind(this));
        AppAction.executeAction(ActionType.VISIT_SUMMARY_FETCH, null);
    }

    retrieveVisitData(visitSummaryData) {
        this.state.visitSummary = visitSummaryData.args;
        this.forceUpdate();
    }
    
    printData() {
//       console.log(this.state.visitSummary);
    }

    render() {
       // let visitData = this.state.visitSummary;
        let labelClass = 'col-xs-6';
        return (
            <div>                        
                <div className="col-12" style={StyleHeader}>
                <div style={appName}><b>Visit Summary</b></div>
                <form className="form-horizontal">
                <Row style={fontStyle}>
            <Col xs={6}>
            <Input label="Type of Visit:" labelClassName={labelClass} ></Input><p style={contentStyle}>{this.state.visitSummary.type}</p>
            </Col>
            <Col xs={6}>
            <Input label="Date of Visit:" labelClassName={labelClass}  ></Input><p style={contentStyle}>{this.state.visitSummary.dateOfVisit}</p>
            </Col>
            </Row>
            <hr style={hrLineRedStyle}/>
            <Row style={fontStyle}>
            <Col xs={6}>
            <Input label="Sub Center Name:" labelClassName={labelClass}  ></Input><p style={contentStyle}>{this.state.visitSummary.subCenterName}</p>
            </Col>
            <Col xs={6}>
            <Input label="PHC Name:" labelClassName={labelClass}  ></Input><p style={contentStyle}>{this.state.visitSummary.PHCName}</p>
            </Col>
            </Row>
            
            <Row style={fontStyle}>
            <Col xs={6}>
            <Input label="VHN Name:" labelClassName={labelClass}  ></Input><p style={contentStyle}>{this.state.visitSummary.VHNName}</p>
            </Col>
            <Col xs={6}>
            </Col>
            </Row>
            
            </form>
            </div><br/><br/>
            
            
            <div className="col-12">
            <div style={StyleHeader}>PATIENT INFORMATION</div>
            <Row>
            <Col xs={2}>
            <Input label="Name:"  labelClassName={labelClass} >{this.state.visitSummary.PatientInfo.name}</Input>
            </Col>
            <Col xs={2}>
            <Input label="Spouse Name:" labelClassName={labelClass} >{this.state.visitSummary.PatientInfo.spouseName}</Input>
            </Col>
            <Col xs={2}>
            <Input label="Age:" labelClassName={labelClass} >{this.state.visitSummary.PatientInfo.age}</Input>
            </Col>
            <Col xs={3}>
            <Input label="Contact No:" labelClassName={labelClass} >{this.state.visitSummary.PatientInfo.contactNumber}</Input>
            </Col>
            <Col xs={2}>
            <Input label="Blood Group:" labelClassName={labelClass} >{this.state.visitSummary.PatientInfo.BG}</Input>
            </Col>
            </Row>
            <Row>
            <Col xs={6}>
            <Input label="Pregnancy Status:" labelClassName='col-xs-3'><StageIndicator options={pregnancystat} value={this.state.visitSummary.PatientInfo.PregnancyStatus} wrapperClassName={wrapperClass} /></Input>
            </Col>
            <Col xs={3}>
            <Input label="Obstetrics:" labelClassName={labelClass} >{this.state.visitSummary.PatientInfo.Obstetrics}</Input>
            </Col>
            <Col xs={2}>
            <Input label="Risk:" labelClassName={labelClass} >{this.state.visitSummary.PatientInfo.Risk}</Input>
            </Col>
            </Row>
               </div>
               <hr style={hrLineStyle}/>
               <br/>
               
               <div>
               <Row>
               <Col xs={6}>
               <div>
               <div style={StyleHeader}>Current Pregnancy &lt;only if ANC visit&gt;</div>
               <Input  label="If Pregnancy Wanted:" labelClassName={labelClass} >{this.state.visitSummary.CurrentPregnancy.PregnancyWanted}</Input>
               </div>
               </Col>
               <Col xs={6}>
               <div>
            <div style={StyleHeader}>Present Illness</div>
            <Input label="Vomiting:" labelClassName={labelClass} >{this.state.visitSummary.CurrentIllnessHistory.Vomiting}</Input><br/>
            <Input label="Leak of Watery fluid PV :" labelClassName={labelClass} >{this.state.visitSummary.CurrentIllnessHistory.LeakingOfWateryFluidPerVaginum_PV}</Input>
            </div>
            </Col>
               </Row>
               
               <Row>
            <Col xs={6}>
            <div>
            <div style={StyleHeader}>Obstetric History</div>
            <Input label="Treatment of Infertility:" labelClassName={labelClass} >{this.state.visitSummary.ObstetricHistory.TreatmentForInfertility}</Input><br/>
            <Input label="Spinal Deformities:" labelClassName={labelClass} >{this.state.visitSummary.ObstetricHistory.TreatmentForInfertility}</Input>
            </div>
            </Col>
            <Col xs={6}>
            <div>
            <div style={StyleHeader}>Past Medical History</div>
            <Input label="High Blood Pressure:" labelClassName={labelClass} >{this.state.visitSummary.PastMedicalHistory.HighBloodPressure_hypertension}</Input>
            </div>
            </Col>
            </Row>
            
            <Row>
            <Col xs={6}>
            <div>
            <div style={StyleHeader}>Allergies</div>
            <Input label="Food:" labelClassName={labelClass} >{this.state.visitSummary.Allergies.isFood}</Input><br/>
            <Input label="Environmental:" labelClassName={labelClass} >{this.state.visitSummary.Allergies.isEnv}</Input>
            </div>
            </Col>
            <Col xs={6}>
            <div>
            <div style={StyleHeader}>Systemic Examination</div>
            <Input label="Nervous:" labelClassName={labelClass} >{this.state.visitSummary.SystemicExamination.NormalNervousSystem}</Input>
            </div>
            </Col>
            </Row>
            
            <Row>
            <Col xs={12}>
            <div>
            <div style={LabResultHeader}>LAB RESULTS</div>
            <Row>
            <Col xs={6}>
            <Input label="UPT:" labelClassName={labelClass} >Positive</Input><br/>
            <Input label="Rapid Maleria Test:" labelClassName={labelClass} >Positive</Input>
            </Col>
            <Col xs={6}>
            <Input label="Hb:" labelClassName={labelClass} >Positive</Input>
            </Col>
            </Row>
            </div>
            </Col>
            </Row>
            <br/>
               </div>
               <br/>
               <hr style={hrLineStyle}/>
               
               <div>
               <Row>
                   <Col xs={6}>
                       <Panel header="Examination Notes" >
                       {this.state.visitSummary.ExaminationNotes}
                       </Panel>
                   </Col>
                   <Col xs={6}>
                       <Panel header="Recorded medication details">
                       {this.state.visitSummary.RecordedMedicationDetails}
                       </Panel>
                           </Col>
               </Row>
               </div>
           <div>
               <Row>
                   <Col xs={6} >
                   <div className="panel panel-default">
                       <div className="panel-heading">Notes</div>
                       <div><textarea type="textarea" className="editable form-control" valueLink={this.linkState(this.state.visitSummary, 'Notes')} ></textarea></div></div>
                       </Col>
              </Row>
          
          </div>
          <Row>
          <Col xs={8}>
          </Col>
          <Col xs={4}>
          Signature of the Physician
          </Col>
          </Row>
          <Row>
          <Col xs={8}>
          Printed on &lt;pdf generation date&gt;
          </Col>
         
          </Row>
          <Button bsSize="large" onClick = {this.printData.bind(this)} className="saveHeaderBtn">Print</Button>
            </div>
            );
    }
}