/*eslint no-mixed-spaces-and-tabs:0*/
/*eslint no-unused-vars: 0*/
import React from 'react';
import LabeledControlList from './../../controls/LabeledControlList';
import ToggleButton from './../../controls/ToggleButton';
import {Input, Row, Col} from 'react-bootstrap';
import ControlBase from './../../controls/ControlBase';

var accPanelStyle1 = {
    border: '2px solid #B9E3FF'
};

class CurrentIllnessHistory extends ControlBase {
    constructor() {
        super();
    }
    childRender() {
        let labelClass = 'col-xs-4 alignLeft';
        let labelClassFirst = 'col-xs-4 alignLeft';
        let labelClassSecond = 'col-xs-3 alignLeft';
        let labelClassThird = 'col-xs-7 alignLeft';
        let wrapperClass = 'col-xs-2';
        
        
        
        
        return (
        	<div className="wrapper" style={accPanelStyle1}>
        		<form className="form-horizontal custom_row">
        		<Row>
        		    <Col xs={4}>
        		    <ToggleButton label={locale('Nausea')} labelClassName={labelClassFirst} wrapperClassName={wrapperClass} valueLink={this.linkState(this.state.context.CurrentIllnessHistory, 'Nausea')} />    
        		    </Col>
        		    <Col xs={3}>
        		    <ToggleButton label={locale('Fever')} labelClassName='col-xs-5 alignLeft' wrapperClassName={wrapperClass} valueLink={this.linkState(this.state.context.CurrentIllnessHistory, 'Fever')} />
        		    </Col>
        		    <Col xs={5}>
        		    <ToggleButton label={locale('GenSwellingOfTheBodyPuffinessOfTheFace')} labelClassName={labelClassThird} wrapperClassName={wrapperClass} valueLink={this.linkState(this.state.context.CurrentIllnessHistory, 'GeneralisedSwellingOfTheBody_PuffinessOfTheFace')} />
        		    </Col>    
        		</Row>
        		<Row>
        		      <Col xs={4}>
        		       <ToggleButton label={locale('Vomiting')} labelClassName={labelClassFirst}	wrapperClassName={wrapperClass} valueLink={this.linkState(this.state.context.CurrentIllnessHistory, 'Vomiting')} />
        		      </Col> 
        		      <Col xs={3}>
        		       <ToggleButton label={locale('PersistentVomiting')} labelClassName='col-xs-5 alignLeft' wrapperClassName={wrapperClass} valueLink={this.linkState(this.state.context.CurrentIllnessHistory, 'PersistentVomiting')} />
        		      </Col>
        		      <Col xs={5}>
        		       <ToggleButton label={locale('SevereHeadacheAndBlurringOfVision')} labelClassName={labelClassThird} wrapperClassName={wrapperClass} valueLink={this.linkState(this.state.context.CurrentIllnessHistory, 'SevereHeadacheAndBlurringOfVision')} />
        		      </Col>   
        		</Row>
        		<Row>
        		   <Col xs={4}>
        		   <ToggleButton label={locale('Heartburn')} labelClassName={labelClassFirst} wrapperClassName={wrapperClass} valueLink={this.linkState(this.state.context.CurrentIllnessHistory, 'Heartburn')} />
        		   </Col>
        		   <Col xs={3}>
        		   <ToggleButton label={locale('AbnormalVaginalDischargeOrItching')} labelClassName='col-xs-5 alignLeft' wrapperClassName={wrapperClass} valueLink={this.linkState(this.state.context.CurrentIllnessHistory, 'AbnormalVaginalDischarge_itching')} />
        		   </Col>
        		   <Col xs={5}>
        		   <ToggleButton label={locale('BurningSensationDuringMicturition')} labelClassName={labelClassThird} wrapperClassName={wrapperClass} valueLink={this.linkState(this.state.context.CurrentIllnessHistory, 'PassingSmallerAmountsOfUrineAndBurningSensationDuringMicturition')} />
        		   </Col>   
        		</Row>
        		<Row>
        		 <Col xs={4}>
        		  <ToggleButton label={locale('Constipation')} labelClassName={labelClassFirst} wrapperClassName={wrapperClass} valueLink={this.linkState(this.state.context.CurrentIllnessHistory, 'Constipation')} />
        		 </Col>
        		  <Col xs={3}>
        		  <ToggleButton label={locale('PalpitationsEasyFatigability')} labelClassName='col-xs-5 alignLeft' wrapperClassName={wrapperClass} valueLink={this.linkState(this.state.context.CurrentIllnessHistory, 'PalpitationsEasyFatigability')} />
        		 </Col>
        		  <Col xs={5}>
        		  <ToggleButton label={locale('VaginalBleeding')} labelClassName={labelClassThird} wrapperClassName={wrapperClass} valueLink={this.linkState(this.state.context.CurrentIllnessHistory, 'VaginalBleeding')} />
        		 </Col>
        		</Row>
        		<Row>
        		 <Col xs={4}>
        		  <ToggleButton label={locale('IncreasedFrequencyOfUrination')} labelClassName={labelClassFirst} wrapperClassName={wrapperClass} valueLink={this.linkState(this.state.context.CurrentIllnessHistory, 'IncreasedFrequencyOfUrination')} />
        		 </Col>
        		 <Col xs={3}>
        		  <ToggleButton label={locale('BreathlessnessAtRestOnMildExertion')} labelClassName='col-xs-5 alignLeft' wrapperClassName={wrapperClass} valueLink={this.linkState(this.state.context.CurrentIllnessHistory, 'Breathlessness')} />
        		 </Col>
        		 <Col xs={5}>
        		  <ToggleButton label={locale('LeakingOfWateryFluidPerVaginum')} labelClassName={labelClassThird} wrapperClassName={wrapperClass} valueLink={this.linkState(this.state.context.CurrentIllnessHistory, 'LeakingOfWateryFluidPerVaginum_PV')} />
        		 </Col>
        		</Row>
        	</form>
          </div>
            );
    }
}
module.exports = CurrentIllnessHistory;