/*eslint no-mixed-spaces-and-tabs:0*/
/*eslint no-unused-vars: 0*/
import React from 'react';
import LabeledControl from './../../controls/LabeledControl';
import ToggleButton from './../../controls/ToggleButton';
// import NumericTextField from './../../../controls/NumericTextField';
import {Input, Row, Col} from 'react-bootstrap';
import ControlBase from './../../controls/ControlBase';

export default class GeneralExamination extends ControlBase {

    constructor() {
        super();
    }

    childRender() {
        let labelClass = 'col-xs-3';
        let wrapperClass = 'col-xs-2';
        return (
            <form className="form-horizontal">
				<Input type="number" label={locale('HeightIncms')} placeholder="Height in cms" labelClassName={labelClass} wrapperClassName={wrapperClass} valueLink={this.linkState(this.state.context.GeneralExamination, 'Height')} />
				<Input type="number" label={locale('WeightInKgs')} placeholder="Weight in Kgs" labelClassName={labelClass} wrapperClassName={wrapperClass} valueLink={this.linkState(this.state.context.GeneralExamination, 'Weight')} />
				<ToggleButton label={locale('Pallor')} labelClassName={labelClass}	wrapperClassName={wrapperClass} valueLink={this.linkState(this.state.context.GeneralExamination, 'Pallor')} />
				<ToggleButton label={locale('Jaundice')} labelClassName={labelClass}	wrapperClassName={wrapperClass} valueLink={this.linkState(this.state.context.GeneralExamination, 'Jaundice')} />
				<ToggleButton label={locale('Pulse')} labelClassName={labelClass}	wrapperClassName={wrapperClass} valueLink={this.linkState(this.state.context.GeneralExamination, 'Pulse')} />
				<Input type="number" label={locale('RespiratoryRatePM')} placeholder="Respiratory Rate per min" labelClassName={labelClass} wrapperClassName={wrapperClass} valueLink={this.linkState(this.state.context.GeneralExamination, 'RespiratoryRate')} />
				<ToggleButton label={locale('Oedema')} labelClassName={labelClass}	wrapperClassName={wrapperClass} valueLink={this.linkState(this.state.context.GeneralExamination, 'Oedema')} />
				<Input label={locale('BP')} placeholder="Blood Pressure" labelClassName={labelClass} wrapperClassName={wrapperClass}>

						<Row>
					      <Col xs={5}>
					        <input type="number" className="form-control" valueLink={this.linkState(this.state.context.GeneralExamination, 'BloodPressure1')}  />
					      </Col>
					      <Col xs={2}>
					        <span >/</span>
					      </Col>
					      <Col xs={5}>
					        <input type="number" className="form-control" valueLink={this.linkState(this.state.context.GeneralExamination, 'BloodPressure2')}  />
					      </Col>
					    </Row>						
					
            </Input>			
				
				
				<Input type="number" label={locale('TemperatureInFarenheit')} placeholder="Temperature in farenheit" labelClassName={labelClass} wrapperClassName={wrapperClass} valueLink={this.linkState(this.state.context.GeneralExamination, 'TemperatureInFarenheit')} />
				<ToggleButton label={locale('TooWeakToGetOutOfBed')} labelClassName={labelClass}	wrapperClassName={wrapperClass} valueLink={this.linkState(this.state.context.GeneralExamination, 'TooWeak')} />
            </form>
            );
    }
}
