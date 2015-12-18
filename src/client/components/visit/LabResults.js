/*eslint no-mixed-spaces-and-tabs:0*/
/*eslint no-unused-vars: 0*/
import React from 'react';
import LabeledControlList from './../../controls/LabeledControlList';
import ToggleButton from './../../controls/ToggleButton';
import {Input} from 'react-bootstrap';
import DropDown from './../../controls/DropDown';
import ControlBase from './../../controls/ControlBase';

var UPToptions = [{
    value: 'Positive',
    text: locale('Positive')
}, {
    value: 'Negative',
    text: locale('Negative')
}];

var RapidMalariaTestoptions = [{
    value: 'Positive',
    text: locale('Positive')
}, {
    value: 'Negative',
    text: locale('Negative')
}];

class LabResults extends ControlBase {
    constructor() {
        super();
    }
    childRender() {
        let labelClass = 'col-xs-3';
        let wrapperClass = 'col-xs-2';
        return (
            <form className="form-horizontal">
            	<DropDown label={locale('UPT')}  	placeholder="select" labelClassName={labelClass}
            		wrapperClassName={wrapperClass} options={UPToptions} valueLink={this.linkState(this.state.context.LabResults, 'UPT')} />
				<Input type="text" label={locale('Hb')} placeholder="Hb" labelClassName={labelClass} wrapperClassName={wrapperClass} valueLink={this.linkState(this.state.context.LabResults, 'Hb')} />
            	<ToggleButton label={locale('UrineSugar')} labelClassName={labelClass}	wrapperClassName={wrapperClass} valueLink={this.linkState(this.state.context.LabResults, 'UrineSugar')} />
				<ToggleButton label={locale('UrineProteins')} labelClassName={labelClass} wrapperClassName={wrapperClass} valueLink={this.linkState(this.state.context.LabResults, 'UrineProteins')} />
            	<DropDown label={locale('RapidMalariaTest')}  	placeholder="select" labelClassName={labelClass}
        			wrapperClassName={wrapperClass} options={RapidMalariaTestoptions} valueLink={this.linkState(this.state.context.LabResults, 'RapidMalariaTest')} />
			</form>
            );
    }
}
module.exports = LabResults;