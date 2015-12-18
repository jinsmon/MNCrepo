/*eslint no-unused-vars: 0*/
/*eslint no-mixed-spaces-and-tabs:0*/
import React from 'react';
import ToggleButton from './../../controls/ToggleButton';
import ControlBase from './../../controls/ControlBase';
var accPanelStyle1 = {border: '2px solid #B9E3FF'};
var rowstyle = {margin: '0px'};
import {Grid, Input, Row, Col} from 'react-bootstrap';
export default class PastMedicalHistory extends ControlBase {

    constructor() {
        super();
    }

    childRender() {



        let labelClass = 'col-xs-6';
        let wrapperClass = 'col-xs-6';

        return (
            <form className="form-horizontal" style={accPanelStyle1}>
            
            <Row style={rowstyle}>
            <Col xs={4}>
            	<div className='tile'>
            		<Input label={locale('BloodPressure')} placeholder="BloodPressure" labelClassName={labelClass} wrapperClassName={wrapperClass}/>
            		<ToggleButton label={locale('HighBloodPressure_hypertension')} labelClassName={labelClass}
            			wrapperClassName={wrapperClass} valueLink={this.linkState(this.state.context.PastMedicalHistory, 'HighBloodPressure_hypertension')} />
            		<ToggleButton label={locale('OnMedication')} labelClassName={labelClass}
            			wrapperClassName={wrapperClass} valueLink={this.linkState(this.state.context.PastMedicalHistory, 'BP_OnMedication')} />
            	</div>
            </Col>
            <Col xs={4}>
            	<div className='tile'>
            		<Input label={locale('Diabetes')} placeholder="Diabetes" labelClassName={labelClass} wrapperClassName={wrapperClass}/>
            		<ToggleButton label={locale('Diabetes_Types')} labelClassName={labelClass}
            			wrapperClassName={wrapperClass} valueLink={this.linkState(this.state.context.PastMedicalHistory, 'Diabetes')} />
            		<ToggleButton label={locale('OnMedication')} labelClassName={labelClass}
            			wrapperClassName={wrapperClass} valueLink={this.linkState(this.state.context.PastMedicalHistory, 'Diabetes_OnMedication')} />
            	</div>
            </Col>
            <Col xs={4}>
            	<div className='tile'>
            		<Input label={locale('Breathlessness')} placeholder="Breathlessness" labelClassName={labelClass} wrapperClassName={wrapperClass}/>
            		<ToggleButton label={locale('Breathlessness_on_exertion_palpitations_HeartDisease')} labelClassName={labelClass}
            			wrapperClassName={wrapperClass} valueLink={this.linkState(this.state.context.PastMedicalHistory, 'Breathlessness_on_exertion_palpitations_HeartDisease')} />
            		<ToggleButton label={locale('OnMedication')} labelClassName={labelClass}
            			wrapperClassName={wrapperClass} valueLink={this.linkState(this.state.context.PastMedicalHistory, 'Breathlessness_OnMedication')} />
            	</div>
            </Col>
            </Row>

            <Row style={rowstyle}>
            <Col xs={4}>
            	<div className='tile'>
            		<Input label={locale('RenalDisease')} placeholder="RenalDisease" labelClassName={labelClass} wrapperClassName={wrapperClass}/>
            			<ToggleButton label={locale('RenalDisease_KidneyFailure')} labelClassName={labelClass}
            				wrapperClassName={wrapperClass} valueLink={this.linkState(this.state.context.PastMedicalHistory, 'RenalDisease')} />
            			<ToggleButton label={locale('OnMedication')} labelClassName={labelClass}
            				wrapperClassName={wrapperClass} valueLink={this.linkState(this.state.context.PastMedicalHistory, 'Renaldisease_OnMedication')} />
            	</div>
            </Col>
            <Col xs={4}>
            	<div className='tile'>
            		<Input label={locale('Convulsions')} placeholder="Convulsions" labelClassName={labelClass} wrapperClassName={wrapperClass}/>
            		<ToggleButton label={locale('Convulsions_Types')} labelClassName={labelClass}
            			wrapperClassName={wrapperClass} valueLink={this.linkState(this.state.context.PastMedicalHistory, 'Convulsions_epilepsy')} />
            		<ToggleButton label={locale('OnMedication')} labelClassName={labelClass}
            			wrapperClassName={wrapperClass} valueLink={this.linkState(this.state.context.PastMedicalHistory, 'Convulsions_OnMedication')} />
            	</div>	
            </Col>
            <Col xs={4}>	
            	<div className='tile'>
            		<Input label={locale('Asthama')} placeholder="Asthama" labelClassName={labelClass} wrapperClassName={wrapperClass}/>
            		<ToggleButton label={locale('Attacksofbreathlessness_asthma')} labelClassName={labelClass}
            			wrapperClassName={wrapperClass} valueLink={this.linkState(this.state.context.PastMedicalHistory, 'Attacksofbreathlessness_asthma')} />
            		<ToggleButton label={locale('OnMedication')} labelClassName={labelClass}
            			wrapperClassName={wrapperClass} valueLink={this.linkState(this.state.context.PastMedicalHistory, 'Asthama_OnMedication')} />
            	</div>
            </Col>
            </Row>
	
            <Row style={rowstyle}>
            <Col xs={4}>
            	<div className='tile'>
            		<Input label={locale('Jaundice')} placeholder="Jaundice" labelClassName={labelClass} wrapperClassName={wrapperClass}/>
            		<ToggleButton label={locale('Jaundice_Types')} labelClassName={labelClass}
            			wrapperClassName={wrapperClass} valueLink={this.linkState(this.state.context.PastMedicalHistory, 'Jaundice')} />
            		<ToggleButton label={locale('OnMedication')} labelClassName={labelClass}
            			wrapperClassName={wrapperClass} valueLink={this.linkState(this.state.context.PastMedicalHistory, 'Jaundice_OnMedication')} />
            	</div>
            </Col>
            <Col xs={4}>
            	<div className='tile'>
            		<Input label={locale('Malaria')} placeholder="Malaria" labelClassName={labelClass} wrapperClassName={wrapperClass}/>
            		<ToggleButton label={locale('Malariasymptoms')} labelClassName={labelClass}
            			wrapperClassName={wrapperClass} valueLink={this.linkState(this.state.context.PastMedicalHistory, 'Malaria')} />
            		<ToggleButton label={locale('OnMedication')} labelClassName={labelClass}
            			wrapperClassName={wrapperClass} valueLink={this.linkState(this.state.context.PastMedicalHistory, 'Malaria_OnMedication')} />
            	</div>
            </Col>
            <Col xs={4}>
            	<div className='tile'>
            		<Input label={locale('RTI')} placeholder="RTI" labelClassName={labelClass} wrapperClassName={wrapperClass}/>
            		<ToggleButton label={locale('ReproductiveTractInfection_RTI')} labelClassName={labelClass}
            			wrapperClassName={wrapperClass} valueLink={this.linkState(this.state.context.PastMedicalHistory, 'ReproductiveTractInfection_RTI')} />
            		<ToggleButton label={locale('OnMedication')} labelClassName={labelClass}
            			wrapperClassName={wrapperClass} valueLink={this.linkState(this.state.context.PastMedicalHistory, 'RTI_OnMedication')} />
            	</div>
            </Col>
            </Row>
            
            <Row style={rowstyle}>
            <Col xs={4}>
            	<div className='tile'>
            		<Input label={locale('STI_AIDS')} placeholder="STI_AIDS" labelClassName={labelClass} wrapperClassName={wrapperClass}/>
            		<ToggleButton label={locale('SexuallyTransmittedInfection_STI_and_HIV_AIDS')} labelClassName={labelClass}
            			wrapperClassName={wrapperClass} valueLink={this.linkState(this.state.context.PastMedicalHistory, 'SexuallyTransmittedInfection_STI_and_HIV_AIDS')} />
            		<ToggleButton label={locale('OnMedication')} labelClassName={labelClass}
            			wrapperClassName={wrapperClass} valueLink={this.linkState(this.state.context.PastMedicalHistory, 'STI_AIDS_OnMedication')} />
            	</div>
            </Col>
            </Row>
      </form>
            );
    }
}