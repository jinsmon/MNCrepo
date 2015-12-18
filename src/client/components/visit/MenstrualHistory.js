/*eslint no-mixed-spaces-and-tabs:0*/
/*eslint no-unused-vars: 0*/
import React from 'react';

import LabeledControl from './../../controls/LabeledControl';
import ToggleButton from './../../controls/ToggleButton';
import NumericTextField from './../../controls/NumericTextField';
import {Input, Label, Row, Col} from 'react-bootstrap';
import ControlBase from './../../controls/ControlBase';

var RegularValues =  {
    value: 'Regular',
    text: locale('Regular')
};

var IrregularValues = {
    value: 'Irregular',
    text: locale('Irregular')
};

class MenstrualHistory extends ControlBase {
    constructor() {
        super();
    }
    childRender() {
        let labelClass =  'col-xs-2';
        let wrapperClass = 'col-xs-2';
      
        return (
        		<div className="wrapper custom_row">
    	        <form className="form-horizontal custom_align">
					 <Row>
					    
					    <Input label={locale('Regularity')} placeholder="Regularity" labelClassName={labelClass} wrapperClassName={wrapperClass}>
						
					    <Col xs={6}>
						    <Input type="radio" label={RegularValues.text} name="Regularity" labelClassName={labelClass} wrapperClassName={wrapperClass} valueLink={this.linkState(this.state.context.MenstrualHistory, 'Regularity')}  />
					    </Col>
					    <Col xs={6}>	
					        <Input type="radio" label={IrregularValues.text} name="Regularity" labelClassName={labelClass} wrapperClassName={wrapperClass} valueLink={this.linkState(this.state.context.MenstrualHistory, 'Regularity')} />
					    </Col>
					    </Input>
					</Row>
					
					<Row>
					    <Col xs={12}>
					        <Input type="number" label={locale('FrequencyInNumberOfDays')} placeholder="Frequency in number of days" labelClassName={labelClass} wrapperClassName={wrapperClass} valueLink={this.linkState(this.state.context.MenstrualHistory, 'Frequencyinnumberofdays')} />
					    </Col>
					</Row>		
					<Row>
					    <Col xs={12}>
					        <Input type="number" label={locale('NumberOfDaysOfBleed')} placeholder="Number of days of bleed" labelClassName={labelClass} wrapperClassName={wrapperClass} valueLink={this.linkState(this.state.context.MenstrualHistory, 'Numberofdaysofbleed')} />
					    </Col>
					</Row>		
					<Row>
					    <Col xs={12}>
					        <Input type="number" label={locale('AgeAtMenarche')} placeholder="Age at Menarche" labelClassName={labelClass} wrapperClassName={wrapperClass} valueLink={this.linkState(this.state.context.MenstrualHistory, 'AgeatMenarche')} />
					    </Col>
					</Row>
					<Row>
					    <Col xs={12}>		
					        <ToggleButton label={locale('PainAssociatedWithPeriods')} labelClassName={labelClass}	wrapperClassName="col-xs-1" valueLink={this.linkState(this.state.context.MenstrualHistory, 'PainassociatedwithPeriods')} />
					    </Col>
					</Row>		
    			</form>
    			</div>
    			
            );
    }
}
module.exports = MenstrualHistory;