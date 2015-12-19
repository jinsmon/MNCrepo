/*eslint no-mixed-spaces-and-tabs:0*/
/*eslint no-unused-vars: 0*/
import React from 'react';
import LabeledControlList from './../../controls/LabeledControlList';
import ToggleButton from './../../controls/ToggleButton';
import {Input} from 'react-bootstrap';
import ControlBase from './../../controls/ControlBase';

class LabOrders extends ControlBase {
    constructor() {
        super();
    }
    childRender() {
        let labelClass = 'col-xs-3';
        let wrapperClass = 'col-xs-2';
        return (
            <form className="form-horizontal">
				<ToggleButton label={locale('BloodGroup_including_RhFactor')} labelClassName={labelClass} wrapperClassName={wrapperClass} valueLink={this.linkState(this.state.context.LabOrder, 'BloodGroup_including_RhFactor')} />
				<ToggleButton label={locale('VDRL_RPR')} labelClassName={labelClass}	wrapperClassName={wrapperClass} valueLink={this.linkState(this.state.context.LabOrder, 'VDRL_RPR')} />
				<ToggleButton label={locale('HIV_testing')} labelClassName={labelClass} wrapperClassName={wrapperClass} valueLink={this.linkState(this.state.context.LabOrder, 'HIV_testing')} />
				<ToggleButton label={locale('Rapid_Malaria_Test')} labelClassName={labelClass} wrapperClassName={wrapperClass} valueLink={this.linkState(this.state.context.LabOrder, 'Rapid_Malaria_Test')} />
				<ToggleButton label={locale('BloodSugar')} labelClassName={labelClass} wrapperClassName={wrapperClass} valueLink={this.linkState(this.state.context.LabOrder, 'BloodSugar')} />
				<ToggleButton label={locale('HbsAg')} labelClassName={labelClass} wrapperClassName={wrapperClass} valueLink={this.linkState(this.state.context.LabOrder, 'HbsAg')} />
				<ToggleButton label={locale('CBC_with_ESR')} labelClassName={labelClass} wrapperClassName={wrapperClass} valueLink={this.linkState(this.state.context.LabOrder, 'CBC_with_ESR')} />
				<ToggleButton label={locale('PeripheralSmear')} labelClassName={labelClass} wrapperClassName={wrapperClass} valueLink={this.linkState(this.state.context.LabOrder, 'PeripheralSmear')} />
            </form>
            );
    }
}
module.exports = LabOrders;