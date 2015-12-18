/*eslint no-unused-vars: 0*/
import React from 'react';
import AuthenticatedComponent from './../login/AuthenticatedComponent';
import {Input, Row, Col} from 'react-bootstrap';
import ReferLetterStore from '../../stores/ReferLetterStore';
import DatePicker from './../../controls/DatePicker';
import ControlBase from './../../controls/ControlBase';
var StyleHeader = {
    backgroundColor: '#CCCCCC',
    border: '1px solid black', 
    marginTop:'3px',
    paddingLeft:'30px',
    paddingRight:'30px',
    'font-family': 'GEInspira',
    fontWeight: '700'
};

var patientSubHead = {
    marginTop:'20px',
    'font-family': 'GEInspira',
    fontWeight: '700'
};
var contentSpacing = {
    paddingTop:'40px'
};
var textColor = {
    color:'#0000A3'
};

var labelStyle = {
    float:'left',
    marginLeft:'10px'
		
};
var wrapperStyle = {
    marginTop:'30px'	
};
var radioStyle = {
    float:'right'
};

var layoutBtn = {
    left:'38%',
    'font-family': 'GEInspira',
    fontWeight: '700'
};
var dropStyle = {
    marginLeft:'38%',
    width:'30%'
};
export default AuthenticatedComponent(class ReferralLetter extends ControlBase {
    constructor() {
        super();
        this.state = {patientData:{}};
        ReferLetterStore.addChangeListener(AppConstants.FETCH_EVENT, this.notifyPatientFetch.bind(this));
        AppAction.executeAction(ActionType.REFER_LETTER_DATA_FETCH, null);
    }
    notifyPatientFetch(data) {
        this.state.patientData = data.args;
        this.forceUpdate();
    }
	render() {
    return (
        <div>
        <div style={patientSubHead}>{locale('PATIENTINFORMATION')}</div>
        <div className="col-lg-12" style={StyleHeader}>
        <div className="row">
        <div className="col-md-2">{locale('Name')}: <span style={textColor}>{this.state.patientData.name}</span></div>
        <div className="col-md-3">{locale('SpouseName')}: <span style={textColor}>{this.state.patientData.spouseName}</span></div>
        <div className="col-md-2">{locale('Age')}: <span style={textColor}>{this.state.patientData.age}</span></div>
        <div className="col-md-3">{locale('ContactNo')}: <span style={textColor}>{this.state.patientData.emergencyContactPhn}</span> </div>
        <div className="col-md-2">{locale('BloodGroup')}: <span style={textColor}>{this.state.patientData.bloodGroup}</span></div>
        </div>
        <div className="row" style={contentSpacing}>
        <div className="col-md-2">{locale('PatientID')}: <span style={textColor}>{this.state.patientData.patientId}</span></div>
        <div className="col-md-3">{locale('PICMEID')}: <span style={textColor}>{this.state.patientData.picmeID}</span></div>
        <div className="col-md-2">{locale('SubCenterName')}: <span style={textColor}>{this.state.patientData.subCentreName}</span>r</div>
        <div className="col-md-3">{locale('PHCName')}: <span style={textColor}>{this.state.patientData.phcName}</span> </div>
        </div>
        </div>
        <div className="wrapper" style={wrapperStyle}>
        <form>
        <Row>
        <Col xs={6} style={{marginTop:'1%'}}>
        <Input type="textbox" label={locale('ReferredTo')} className="editable" placeholder={locale('PleaseEenter')} labelClassName="col-xs-3 marginMinus"
        wrapperClassName="col-xs-5"  valueLink={this.linkState(this.state.patientData, 'referredTo')}   />
        <div className="referral">
        <Input type="text" label={locale('ReasonForReferral')} className="editable" placeholder={locale('PleaseEnterTheReason')} labelClassName="col-xs-3 marginMinus"
        wrapperClassName="col-xs-5"  valueLink={this.linkState(this.state.patientData, 'reasonForReferral')}    /> 	</div>	
        </Col>
        <Col xs={4}>
        <DatePicker  placeholder="DD/MM/YY" className="editable" label={locale('RefferedOn')} labelClassName="col-xs-4 marginMinus"
            wrapperClassName="col-xs-5"  valueLink={this.linkState(this.state.patientData, 'referredOn')}  />
        <div className="referral">
        <label style={labelStyle}>{locale('ModeOfTransport')}</label>
        <Input type="select"  valueLink={this.linkState(this.state.patientData, 'modeOfTransport')} placeholder="select" style={dropStyle} ClassName="dropClass">
        <option value="107">107</option>
        <option value="108">108</option>
         </Input>
        </div> 			
        <div className="referral">
        <Input type="textbox" label={locale('CurrentMedication')} className="editable" placeholder={locale('PleaseEenter')} labelClassName="col-xs-5 marginMinus"
        wrapperClassName="col-xs-7" valueLink={this.linkState(this.state.patientData, 'CurrentMedication')}/>	</div>
        </Col>
        </Row>
        <Row>
        <Col xs={4}>
        <label>{locale('Information_on_Referral_provided_to_institution_referred')}</label>
        <div class="btn-group" data-toggle="buttons" style={radioStyle}>
        <label class="btn btn-default" wrapperClassName="col-xs-5">
        <input type="radio" id="q156" checked="true" name="radio"  value="Yes" /> {locale('Yes')} 
        </label> &nbsp;&nbsp;&nbsp;
        <label class="btn btn-default">
        <input type="radio" id="q157" name="radio" value="No" /> {locale('No')}
        </label>
        </div><br/><br/><br/><br/>
        <label>{locale('PatientConsentObtained')}</label>
        <div class="btn-group" data-toggle="buttons" style={radioStyle}>
        <label class="btn btn-default"  wrapperClassName="col-xs-5">
        <input type="radio" name="radioPatient"   value="Yes" /> {locale('Yes')}
        </label> &nbsp;&nbsp;&nbsp;
        <label class="btn btn-default">
        <input type="radio" name="radioPatient" checked="true"   value="No" /> {locale('No')}
        </label>
        </div>
        </Col>
        </Row><br/><br/><br/>
        <Row>
        <Col xs={4} style={layoutBtn}>
        <button type="button" className="btn-success" onClick={function () {toast.show('successfully printed','success');}}>{locale('Print_Export_to_PDF')}</button>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <button type="button" className="btn-warning" >{locale('Cancel')}</button>
        </Col>
        </Row>
        </form>
        </div>
        </div>
        );
}
}
);