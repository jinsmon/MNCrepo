/*eslint no-unused-vars: 0*/
/*eslint no-mixed-spaces-and-tabs:0*/
import React from 'react';

import LabeledControl from './../../controls/LabeledControl';
import ToggleButton from './../../controls/ToggleButton';
import ControlBase from './../../controls/ControlBase';
import {Input, Row, Col, Image, Label, Button} from 'react-bootstrap';
import DatePicker from './../../controls/DatePicker';


export default  class CurrentPregnancy  extends ControlBase {
    constructor() {
        super();
    }
    
        childRender() {
            let toggleLabelClass = 'col-xs-8 zeroLeftPadding';
            let toggleWrapperClass = 'col-xs-3';
            let dateIcon =<Image className="editable" src="./registration/calendar.png" />;
            return (
            		<div className="wrapper">
	         	        <form>
	         		        <Row>
	         		           <Row>
			         		       <Col xs={3}>
			         		          <ToggleButton label={locale('PregnancyAcceptedWillingly')} labelClassName={toggleLabelClass} wrapperClassName={toggleWrapperClass} valueLink={this.linkState(this.state.context.CurrentPregnancy, 'PregnancyWanted')} /><br/><br/><br/>
			         		       </Col>
			         		   </Row>
			         		   <Row>
		         		           <Col xs={3}>
		         		               <DatePicker placeholder="DD/MM/YYYY" className="editable" label={locale('DateofLMP')} subLabel = "(1st day of last Mentsrual Period)" valueLink={this.linkState(this.state.context.CurrentPregnancy, 'LMP')}  />
		         		          </Col>
		         		           <Col xs={1}>
		         		               
		         		           </Col>
		         		           <Col xs={3}>
		         		               <DatePicker placeholder="DD/MM/YYYY" className="editable" label={locale('ExpectedDateOfDelivery')} valueLink={this.linkState(this.state.context.CurrentPregnancy, 'EDD')}  /> 
		         		           </Col>
		         		       </Row>
		         		       <Row>
		         		           <Col xs={3}>
		         		               <DatePicker placeholder="DD/MM/YYYY" className="editable" label={locale('EDDByUSG')} subLabel = "(If already done)" valueLink={this.linkState(this.state.context.CurrentPregnancy, 'EDD_USG')}  />
		         		           </Col>
		         		       </Row>
	         				</Row>
	         			</form>
        			</div>
    	);
        }
}