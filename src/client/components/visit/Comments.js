/*eslint no-mixed-spaces-and-tabs:0*/
/*eslint no-unused-vars: 0*/
import React from 'react';
import LabeledControlList from './../../controls/LabeledControlList';
import ToggleButton from './../../controls/ToggleButton';
import DropDown from './../../controls/DropDown';
import ControlBase from './../../controls/ControlBase';
import {Input, Row, Col, Image, Label, Button} from 'react-bootstrap';


var DeliveryLocationoptions = [{
    value: 'PHC Name',
    text: locale('PHCName')
}, {
    value: 'PHC Name',
    text: locale('PHCName')
}];

class Comments extends ControlBase {
    constructor() {
        super();
    }
    childRender() {
        let labelClass = 'col-xs-3';
        let wrapperClass = 'col-xs-2';
        return (
            <form className="form-horizontal">
			<Input type="textarea" label={locale('GeneralComments')}  placeholder="Abdominal Findings" labelClassName={labelClass} wrapperClassName={wrapperClass} valueLink={this.linkState(this.state.context.Comments, 'GeneralComments')}  />
			<Input type="textarea" label={locale('IncidentCapture')}  placeholder="Abdominal Findings" labelClassName={labelClass} wrapperClassName={wrapperClass} valueLink={this.linkState(this.state.context.Comments, 'IncidentCapture')}  />
			<Input type="text" label={locale('Attachements')} placeholder="Attachements" labelClassName={labelClass} wrapperClassName={wrapperClass} valueLink={this.linkState(this.state.context.Comments, 'Attachements')} />
			<Button className="patientPhotoOrginalBtn center-block" bsSize="xsmall">{locale('Upload')}</Button>
			</form>
            );
    }
}
module.exports = Comments;