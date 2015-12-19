/*eslint no-mixed-spaces-and-tabs:0*/
/*eslint no-unused-vars: 0*/
import React from 'react';
import LabeledControlList from './../../controls/LabeledControlList';
import ToggleButton from './../../controls/ToggleButton';
import {Input} from 'react-bootstrap';
import DropDown from './../../controls/DropDown';
import ControlBase from './../../controls/ControlBase';

var DeliveryLocationoptions = [{
    value: 'PHC Name',
    text: locale('PHCName')
}, {
    value: 'PHC Name',
    text: locale('PHCName')
}];

class MedicalPrescriptions extends ControlBase {
    constructor() {
        super();
    }
    childRender() {
        let labelClass = 'col-xs-3';
        let wrapperClass = 'col-xs-2';
        return (
            <form className="form-horizontal">
        	<ToggleButton label={locale('Inj_TT_IM')} labelClassName={labelClass}	wrapperClassName={wrapperClass} valueLink={this.linkState(this.state.context.MedicalPrescriptions, 'Inj_TT_IM')} />
        	<ToggleButton label={locale('FolicAcidSuppliment_IFA')} labelClassName={labelClass}	wrapperClassName={wrapperClass} valueLink={this.linkState(this.state.context.MedicalPrescriptions, 'FolicAcidSuppliment_IFA')} />
            	<ToggleButton label={locale('Counselling')} labelClassName={labelClass}	wrapperClassName={wrapperClass} valueLink={this.linkState(this.state.context.MedicalPrescriptions, 'Counselling')} />
        	<ToggleButton label={locale('Issue_MaternalChildProtectionCard')} labelClassName={labelClass}	wrapperClassName={wrapperClass} valueLink={this.linkState(this.state.context.MedicalPrescriptions, 'Issue_MaternalChildProtectionCard')} />
            	<ToggleButton label={locale('JSYCard')} labelClassName={labelClass}	wrapperClassName={wrapperClass} valueLink={this.linkState(this.state.context.MedicalPrescriptions, 'JSYCard')} />
				<ToggleButton label={locale('BPLCard')} labelClassName={labelClass} wrapperClassName={wrapperClass} valueLink={this.linkState(this.state.context.MedicalPrescriptions, 'BPLCard')} />
            	<DropDown label={locale('RecordPossibleLocationOfDelivery')}  	placeholder="select" labelClassName={labelClass}
            wrapperClassName={wrapperClass} options={DeliveryLocationoptions} valueLink={this.linkState(this.state.context.MedicalPrescriptions, 'RecordPossibleLocationOfDelivery')} />
			</form>
            );
    }
}
module.exports = MedicalPrescriptions;