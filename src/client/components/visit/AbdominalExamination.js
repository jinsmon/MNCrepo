/*eslint no-mixed-spaces-and-tabs:0*/
import React from 'react'; // eslint-disable-line  no-unused-vars
import DropDown from './../../controls/DropDown';
import ControlBase from './../../controls/ControlBase';

import {Input} from 'react-bootstrap';


var foetalLie = [{
    value: 'Longitudinal',
    text: locale('Longitudinal')
}, {
    value: 'Transverse',
    text: locale('Transverse')
}, {
    value: 'Oblique',
    text: locale('Oblique')
}];
var foetalPresentation = [{
    value: 'Cephalic',
    text: locale('Cephalic')
}, {
    value: 'Breech',
    text: locale('Breech')
}, {
    value: 'Shoulder',
    text: locale('Shoulder')
}];
var pregnancy = [{
    value: 'Single',
    text: locale('Single')
}, {
    value: 'Multiple',
    text: locale('Multiple')
}];

var FoetalMovements = [{
    value: 'Yes',
    text: locale('Yes')
}, {
    value: 'No',
    text: locale('No')
}];


export default class AbdominalExamination extends ControlBase {


    pregnancyChange(value) {
        this.setState({selectedValue: value});
    }

    validationState() {
        let length = this.state.value.length;
        if (length > 10) return 'success';else if (length > 5) return 'warning';else if (length > 0) return 'error';
    }

    childRender() {

        let labelClass = 'col-xs-3 alignLeft';
        let wcTextArea = 'col-xs-4';
        let wcNumber = 'col-xs-1';
        let wcDropDown = 'col-xs-2';

        return (
            <form className="form-horizontal">
        		
        		
        				<Input type="textarea" label={locale('InspectationOfScarsOrAbdominalFindings')}  placeholder="Abdominal Findings" labelClassName={labelClass} wrapperClassName={wcTextArea} valueLink={this.linkState(this.state.context.AbdominalExamination, 'InspectationOfScars')}  />
        		
        				<Input type="number" label={locale('FundalHeightInCM')}  placeholder="Height cms" labelClassName={labelClass} wrapperClassName={wcNumber} valueLink={this.linkState(this.state.context.AbdominalExamination, 'FundalHeightInCMS')} />
        				
        				<Input type="number" label={locale('FundalHeight')}  placeholder="Height weeks" labelClassName={labelClass} wrapperClassName={wcNumber} valueLink={this.linkState(this.state.context.AbdominalExamination, 'FundalHeightInWeeks')} />
        		
        				 <DropDown label={locale('FoetalLie')}  	placeholder="select" labelClassName={labelClass}
            wrapperClassName={wcDropDown} options={foetalLie} valueLink={this.linkState(this.state.context.AbdominalExamination, 'FoetalLie')} />
        				
        				<DropDown label={locale('FoetalPresentation')} 	placeholder="select" labelClassName={labelClass}
            wrapperClassName={wcDropDown} options={foetalPresentation} valueLink={this.linkState(this.state.context.AbdominalExamination, 'Foetalpresentation')} />
        				
        				<Input type="number" label={locale('FHS')}  placeholder="Foetal heart Rate" labelClassName={labelClass} wrapperClassName={wcNumber} valueLink={this.linkState(this.state.context.AbdominalExamination, 'FHS')} />
        				
        				<DropDown label={locale('SingleVsMultiplePregnancy')}  placeholder="select" labelClassName={labelClass}
            wrapperClassName={wcDropDown} options={pregnancy} valueLink={this.linkState(this.state.context.AbdominalExamination, 'SingleVsMultiplePregnancy')} />
        				
        				
        				<DropDown label={locale('FoetalMovements')}  placeholder="select" labelClassName={labelClass}
        	            wrapperClassName={wcDropDown} options={FoetalMovements} valueLink={this.linkState(this.state.context.AbdominalExamination, 'FoetalMovements')} />
        				
        				
        				
        				
        		 	
        		 </form>
            );
    }
}
