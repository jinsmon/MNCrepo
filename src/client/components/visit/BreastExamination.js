/*eslint no-mixed-spaces-and-tabs:0*/
/*eslint no-unused-vars: 0*/
import React from 'react';
import LabeledControlList from './../../controls/LabeledControlList';
import ToggleButton from './../../controls/ToggleButton';
import {Input, Row, Col} from 'react-bootstrap';
import ControlBase from './../../controls/ControlBase';

var breastExaminatio = [
    {
        label: 'Normal',
        control: <ToggleButton/>
    },
    {
        label: 'Retracted nipple',
        control: <ToggleButton/>
    },
    {
        label: 'Nodule',
        control: <ToggleButton/>
    },
    {
        label: 'Lump',
        control: <ToggleButton/>
    },
    {
        label: 'Scar',
        control: <ToggleButton/>
    }
];

export default class BreastExamination extends ControlBase {
    constructor() {
        super();
    }
    childRender() {
        let labelClass1 = 'col-xs-7';
        let wrapperClass1 = 'col-xs-6';

        let labelClass = 'col-xs-6';
        let wrapperClass = 'col-xs-5';
        return (
            <form className="form-horizontal">
				    	<Row>
				    		<Col xs={4}>
				    			<Input label={locale('LeftBreast')} placeholder="Left Breast" labelClassName={labelClass1} wrapperClassName={wrapperClass1}/>
				    			<ToggleButton label={locale('Normal')}  labelClassName={labelClass} wrapperClassName={wrapperClass} valueLink={this.linkState(this.state.context.BreastExamination.LeftBreast, 'Normal')} />
				    			<ToggleButton label={locale('RetractedNipple')} labelClassName={labelClass} wrapperClassName={wrapperClass} valueLink={this.linkState(this.state.context.BreastExamination.LeftBreast, 'RetractedNipple')} />
							    <ToggleButton label={locale('Nodule')} labelClassName={labelClass} wrapperClassName={wrapperClass} valueLink={this.linkState(this.state.context.BreastExamination.LeftBreast, 'Nodule')} />
				    			<ToggleButton label={locale('Lump')} labelClassName={labelClass} wrapperClassName={wrapperClass} valueLink={this.linkState(this.state.context.BreastExamination.LeftBreast, 'Lump')} />
				    			<ToggleButton label={locale('Scar')} labelClassName={labelClass} wrapperClassName={wrapperClass} valueLink={this.linkState(this.state.context.BreastExamination.LeftBreast, 'Scar')} />
				    		</Col>
				    		
				    		<Col xs={5}>
				    			<Input label={locale('RightBreast')} placeholder="Right Breast" labelClassName={labelClass1} wrapperClassName={wrapperClass1}/>
				    			<ToggleButton label={locale('Normal')} labelClassName={labelClass} wrapperClassName={wrapperClass} valueLink={this.linkState(this.state.context.BreastExamination.RightBreast, 'Normal')} />
				    			<ToggleButton label={locale('RetractedNipple')} labelClassName={labelClass} wrapperClassName={wrapperClass} valueLink={this.linkState(this.state.context.BreastExamination.RightBreast, 'RetractedNipple')} />
				    			<ToggleButton label={locale('Nodule')} labelClassName={labelClass} wrapperClassName={wrapperClass} valueLink={this.linkState(this.state.context.BreastExamination.RightBreast, 'Nodule')} />
				    			<ToggleButton label={locale('Lump')}labelClassName={labelClass} wrapperClassName={wrapperClass} valueLink={this.linkState(this.state.context.BreastExamination.RightBreast, 'Lump')} />
				    			<ToggleButton label={locale('Scar')} labelClassName={labelClass} wrapperClassName={wrapperClass} valueLink={this.linkState(this.state.context.BreastExamination.RightBreast, 'Scar')} />
			    			</Col>
				    	</Row>	
			</form>

            );
    }
}