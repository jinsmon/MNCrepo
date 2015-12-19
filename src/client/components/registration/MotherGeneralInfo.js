/*eslint no-mixed-spaces-and-tabs:0*/
/*eslint no-unused-vars: 0*/
import React from 'react';
import TextBox from './../../controls/TextBox';
import {Input, Row, Col, Image, Label, Button} from 'react-bootstrap';
import ControlBase from './../../controls/ControlBase';
import DatePicker from './../../controls/DatePicker';

export default class MotherGeneralInfo extends ControlBase {

    constructor() {
        super();

    }

    dOBHandler() {

        this.state.context.Age = Utils.findAge(this.state.context.dOB);
        this.forceUpdate();
    }


    render() {
        // let ageValue = AppUtils.findAge('12/09/1990');
        // console.log('@@@@@! AGE :'+ageValue);
        let labelClass = '';
        let wrapperClass = '';
        let dateIcon = <Image src="./registration/calendar.png" />;
        return (
            <div className="wrapper">
	        <form>
		        <Row>
			        <Col xs={4}>
				    	<div className="space"><Input type="textbox" label={locale('Name')} className="editable" placeholder={locale('EnterName')} valueLink={this.linkState(this.state.context, 'name')}  /></div>
				    	<div className="space"><DatePicker  placeholder="DD/MM/YY" className="editable" label={locale('DOB')}  valueLink={this.linkState(this.state.context, 'dOB', this.dOBHandler.bind(this))}  /></div>
				    	<div className="space"><Input type="number" label={locale('ECN')} className="editable" placeholder={locale('EnterECN')}   valueLink={this.linkState(this.state.context, 'emergencyContactPhn')}  /></div>
				    </Col>
			    	<Col xs={4}>
			    		<div className="space"><Input type="textbox" label={locale('SpouseName')} placeholder={locale('EnterSpouseName')}  className="editable" valueLink={this.linkState(this.state.context, 'spouseName')}  /></div>
			    		<div className="space"><Input type="number" label={locale('Age')} className="readonlyd" readOnly  placeholder={locale('Age')} valueLink={this.linkState(this.state.context, 'Age')} /></div>
			    	</Col>
				    <Col xs={4}>
					    <Input label="Photo"  className="center-block" >
					        <div className='text-left'>
						        <div  className='text-center' style={{display: 'inline-block'}}>
							        <Image className="img-responsive" src="./registration/default_photo.png" />
							    	<input type="file" id="patientPhotoInputButton" />
							    	<Button className="patientPhotoOrginalBtn" bsSize="xsmall">Upload Photo</Button>
						    	</div>
					    	</div>
				    	</Input>
				    </Col>
		        </Row>
		        <Row>
			        <Col>
			        	<div className="seperator"> </div>
			        </Col>
		        </Row>
		        <Row>
			        <Col xs={4}>
			        	<div className="space"><Input type="textbox" label={locale('JananiID')} className="readonly" placeholder={locale('JananiID')} readOnly  valueLink={this.linkState(this.state.context, 'jananiID')}  /></div>
				        <DatePicker placeholder="DD/MM/YYYY" className="editable" label={locale('NextVisitDate')}   valueLink={this.linkState(this.state.context, 'nextDueDate')}  />
				    </Col>
				    <Col xs={4}>
				        <Input type="textbox" label={locale('PICMEID')} className="editable" placeholder={locale('EnterPICMEID')}   valueLink={this.linkState(this.state.context, 'picmeID')}  />
			        </Col>
				    
		        </Row>
	        </form>
        </div>
            );
    }
}
module.exports = MotherGeneralInfo;