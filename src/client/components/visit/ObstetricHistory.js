/*eslint no-unused-vars: 0*/
/*eslint no-mixed-spaces-and-tabs:0*/
import React from 'react';
import ToggleButton from './../../controls/ToggleButton';
import ControlBase from './../../controls/ControlBase';
import {Grid, Input, Row, Col} from 'react-bootstrap';
var accPanelStyle1 = {
    border: '2px solid #B9E3FF'
};
export default class ObstetricHistory extends ControlBase {

    childRender() {
        let labelClass = 'col-xs-5 alignLeft';
        let wrapperClass = 'col-xs-2';

        return (
            <div className="wrapper" >
             <form classNmae="custom_row" style={accPanelStyle1}>
                 <Row>
                     <Col xs={6}>
                         <ToggleButton label={locale('RecurrentEarlyAbortion')} labelClassName={labelClass} wrapperClassName={wrapperClass} valueLink={this.linkState(this.state.context.ObstetricHistory, 'RecurrentEarlyAbortion')} />
                         <Input type="text" wrapperClassName='col-xs-2' />
                     </Col>
                     <Col xs={6}>
                         <ToggleButton label={locale('MoreConsecutiveAbortions')} labelClassName={labelClass}
            wrapperClassName={wrapperClass} valueLink={this.linkState(this.state.context.ObstetricHistory, 'ThreeOrMoreSpontaneousConsecutiveAbortions')} /> 
                    </Col>
                </Row>
                <Row>
                     <Col xs={6}>
                       <ToggleButton label={locale('PostAbortionComplications')} labelClassName={labelClass} wrapperClassName={wrapperClass} valueLink={this.linkState(this.state.context.ObstetricHistory, 'Post_abortionComplications')} />
                    </Col>
                    <Col xs={6}>
                       <ToggleButton label={locale('ObstructedLabour')} labelClassName={labelClass}
            wrapperClassName={wrapperClass} valueLink={this.linkState(this.state.context.ObstetricHistory, 'ObstructedLabour')} /> 
                    </Col>
               </Row>
               <Row>
                    <Col xs={6}>
                       <ToggleButton label={locale('HypertensionPreEclmpsiaOrEclampsia')} labelClassName={labelClass} wrapperClassName={wrapperClass} valueLink={this.linkState(this.state.context.ObstetricHistory, 'Hypertension_preeclampsia_eclampsia')} />
                    </Col>
                    <Col xs={6}>
                        <ToggleButton label={locale('PrematureBirthsTwinsOrMultiplePregnancies')} labelClassName={labelClass}
            wrapperClassName={wrapperClass} valueLink={this.linkState(this.state.context.ObstetricHistory, 'PrematureBirths_twins_multiplePregnancies')} /> 
                    </Col>
               </Row>
               <Row>
                   <Col xs={6}>
                       <ToggleButton label={locale('AntePartumHaemorrhage')} labelClassName={labelClass} wrapperClassName={wrapperClass} valueLink={this.linkState(this.state.context.ObstetricHistory, 'AntePartumHaemorrhage_APH')} />
                   </Col>
                   <Col xs={6}>
                       <ToggleButton label={locale('PrevBaby4500gOrMore')} labelClassName={labelClass}
            wrapperClassName={wrapperClass} valueLink={this.linkState(this.state.context.ObstetricHistory, 'WeightOfThePreviousBaby')} /> 
                   </Col>
               </Row>
               <Row>
                   <Col xs={6}>
                       <ToggleButton label={locale('BreechOrTransversePresentation')} labelClassName={labelClass} wrapperClassName={wrapperClass} valueLink={this.linkState(this.state.context.ObstetricHistory, 'Breech_TransversePresentation')} />
                   </Col>
                   <Col xs={6}>
                       <ToggleButton label={locale('Adm4HTOrPreEclampsiaEclampsiaInPrevpregnancy')} labelClassName={labelClass}
            wrapperClassName={wrapperClass} valueLink={this.linkState(this.state.context.ObstetricHistory, 'AdmissionFoHypertensionOrPreEclampsia_eclampsiaInThePreviousPregnancy')} /> 
                   </Col>
               </Row>
               <Row>
                    <Col xs={6}>
                    	<ToggleButton label={locale('obstructedLabourIncludingDystocia')} labelClassName={labelClass} wrapperClassName={wrapperClass} valueLink={this.linkState(this.state.context.ObstetricHistory, 'ObstructedLabour_IncludingDystocia')} /> 
                    </Col>
                    <Col xs={6}>
                    	<ToggleButton label={locale('SurgeryOnTheReproductiveTract')} labelClassName={labelClass}
            wrapperClassName={wrapperClass} valueLink={this.linkState(this.state.context.ObstetricHistory, 'SurgeryOnTheReproductiveTract')} /> 
                    </Col>
               </Row>
               <Row>
                	<Col xs={6}>
                		<ToggleButton label={locale('PerinealInjuriesTears')} labelClassName={labelClass} wrapperClassName={wrapperClass} valueLink={this.linkState(this.state.context.ObstetricHistory, 'PerinealInjuries_tears')} /> 
                	</Col>
                    <Col xs={6}>
                    	<ToggleButton label={locale('CongenitalAnomaly')} labelClassName={labelClass}
            wrapperClassName={wrapperClass} valueLink={this.linkState(this.state.context.ObstetricHistory, 'CongenitalAnomaly')} /> 
                    </Col>
               </Row>
               <Row>
                    <Col xs={6}>
                    	<ToggleButton label={locale('ExcessiveBleedingAfterDelivery')} labelClassName={labelClass} wrapperClassName={wrapperClass} valueLink={this.linkState(this.state.context.ObstetricHistory, 'ExcessiveBleedingAfterDelivery')} /> 
                    </Col>
                    <Col xs={6}>
                    	<ToggleButton label={locale('Treatment4Infertility')} labelClassName={labelClass}
            wrapperClassName={wrapperClass} valueLink={this.linkState(this.state.context.ObstetricHistory, 'TreatmentForInfertility')} /> 
                    </Col>
               </Row>
               <Row>
                	<Col xs={6}>
                		<ToggleButton label={locale('PuerperalSepsis')} labelClassName={labelClass} wrapperClassName={wrapperClass} valueLink={this.linkState(this.state.context.ObstetricHistory, 'PuerperalSepsis')} /> 
                	</Col>
                    <Col xs={6}>
                    	<ToggleButton label={locale('SpinalDeformities')} labelClassName={labelClass}
            wrapperClassName={wrapperClass} valueLink={this.linkState(this.state.context.ObstetricHistory, 'SpinalDeformitiesSuchAs_Acoliosis_kyphosis_polio')} /> 
                    </Col>
               </Row>
               <Row>
                    <Col xs={6}>
                    	<ToggleButton label={locale('BloodTransfusionDuringPrevPregnancies')} labelClassName={labelClass} wrapperClassName={wrapperClass} valueLink={this.linkState(this.state.context.ObstetricHistory, 'BloodTransfusionDuringPreviousPregnancies')} />  
                    </Col>
                    <Col xs={6}>
                    	<ToggleButton label={locale('RhNegInThePrevPregnancy')} labelClassName={labelClass}
            wrapperClassName={wrapperClass} valueLink={this.linkState(this.state.context.ObstetricHistory, 'Rh_negative_inThePreviousPregnancy')} /> 
                    </Col>
               </Row>
               <Row>
                    <Col xs={6}>
                    	<ToggleButton label={locale('Pregnancies')} labelClassName={labelClass}
            wrapperClassName={wrapperClass} valueLink={this.linkState(this.state.context.ObstetricHistory, 'Pregnancies')} /> 
                    </Col>
                    <Col xs={6}>
                    	<ToggleButton label={locale('StillbirthOrNeonatalLoss')} labelClassName={labelClass} wrapperClassName={wrapperClass} valueLink={this.linkState(this.state.context.ObstetricHistory, 'StillbirthOrNeonatalLoss')} />
                    </Col>
               </Row>
        </form>
    </div>
            );
    }
}
