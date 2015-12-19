
/*eslint no-unused-vars: 0*/
/*eslint no-mixed-spaces-and-tabs:0*/
import React from 'react';

import LabeledControl from './../../controls/LabeledControl';
import ToggleButton from './../../controls/ToggleButton';
import ControlBase from './../../controls/ControlBase';
import DropDown from './../../controls/DropDown';
import {Input, Row, Col, Image, Label, Button} from 'react-bootstrap';

var bloodGroups = [{
    value: 'Select BloodGroup',
    text: 'Select BloodGroup'
}, {
    value: 'Opve',
    text: 'O+'
}, {
    value: 'Onve',
    text: 'O-'
}];

var obstetrics1 = [{
    value: 'G0',
    text: 'G'
}, {
    value: 'G1',
    text: 'G1'
}, {
    value: 'G2',
    text: 'G2'
}];

var obstetrics2 = [{
    value: 'P',
    text: 'P0'
}, {
    value: 'P1',
    text: 'P1'
}, {
    value: 'P2',
    text: 'P2'
}];

var obstetrics3 = [{
    value: 'A0',
    text: 'A'
}, {
    value: 'A1',
    text: 'A1'
}, {
    value: 'A2',
    text: 'A2'
}];

var obstetrics4 = [{
    value: 'L0',
    text: 'L'
}, {
    value: 'L1',
    text: 'L1'
}, {
    value: 'L2',
    text: 'L2'
}];



export default  class CurrentPregnancy  extends ControlBase {
    constructor() {
        super();
    }
    
        childRender() {
            let labelClass = '';
            let wrapperClass = '';
            let wcDropDown = 'col-xs-3';
            let dateIcon =<Image className="editable" src="./registration/calendar.png" />;
            return (
            		 <div className="wrapper">
         	        <form>
         		        <Row>
         			        <Col xs={5} >
         			           <ToggleButton label="If pregnancy is wanted?" labelClassName="col-xs-8 marginMinus"
                    	    	wrapperClassName="col-xs-3" valueLink={this.linkState(this.state.context, 'isPregrnancyWanted')} /><br /><br /><br />
         				    	<Input type="date" label="LMP (1st day of last Menstrual period)" className="editable "   valueLink={this.linkState(this.state.context, 'lmp')}  addonAfter={dateIcon} help="" />
         				    	<Input type="date" label="EDD by Date" className="editable"  valueLink={this.linkState(this.state.context, 'edd')} addonAfter={dateIcon}  />
         				    	<DropDown label={locale('BloodGroup')} className="editable" placeholder={locale('Select Blood Group')} labelClassName={labelClass} 
         				    	 options={bloodGroups} valueLink={this.linkState(this.state.context, 'bloodGroup')}  />    	        				
         				    </Col>	
         				    <Col xs={6} > 
         				   <Input type="checkbox" label={locale('isHighRisk')}
       	            	   placeholder={locale('isHighRisk')} labelClassName={labelClass} className="editable" wrapperClassName={wrapperClass} checkedLink={this.linkState(this.state.context, 'highRiskMother')}  />
         				      <Input type="textarea"  className="editable" placeholder={locale('EnterName')} valueLink={this.linkState(this.state.context, 'highRiskMotherComments')}/>
          			        </Col>	
         				</Row>
         				    	<Row>
         				    	<Col xs={6} >         				    	
         				    	<DropDown  className="editable" 
         				    	 wrapperClassName={wcDropDown} options={obstetrics1} valueLink={this.linkState(this.state.context, 'bloodGroup')}  />
         				    	<DropDown className="editable" wrapperClassName={wcDropDown} options={obstetrics2} valueLink={this.linkState(this.state.context, 'bloodGroup')}  />
         				    	<DropDown className="editable"   
         				    	 wrapperClassName={wcDropDown} options={obstetrics3} valueLink={this.linkState(this.state.context, 'bloodGroup')}  /> 
         				    	<DropDown  className="editable"   
         				    	 wrapperClassName={wcDropDown} options={obstetrics4} valueLink={this.linkState(this.state.context, 'bloodGroup')}  />
         				    	</Col>
         				    	<Col xs={6}>
         				    	<Input type="text"  className="editable"  wrapperClassName='col-xs-5' readOnly valueLink={this.linkState(this.state.context, 'obstetrics')}  />
         				    	</Col>
         				    	</Row>
         				  </form>
        			</div>
    	);
        }
}
