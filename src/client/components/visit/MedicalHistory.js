/*eslint no-mixed-spaces-and-tabs:0*/
/*eslint no-unused-vars: 0*/
import React from 'react';
import ObstetricHistory from './ObstetricHistory';
import PastMedicalHistory from './PastMedicalHistory';
import MenstrualHistory from './MenstrualHistory';
import CurrentIllnessHistory from './CurrentIllnessHistory';
import FamilyHistory from './FamilyHistory';
import HabbitsSocialHistory from './HabbitsSocialHistory';
import Allergies from './Allergies';
import VisitStore from '../../stores/VisitStore';
import ControlBase from '../../controls/ControlBase.js';

import {Accordion, Panel} from 'react-bootstrap';

export default class MedicalHistory extends ControlBase {

    constructor() {
        super();      
    }

    render() {
        return (
            <div>
                            			<Accordion>
                                    		<Panel header="History of Present Illness" className="Panel_custom_head"  keepState expanded={true}>                                    		
                                    			<CurrentIllnessHistory context={this.state.context}/>
                                    		</Panel>
                                    		<Panel header={locale('ObstetricHistory')} className="Panel_custom_head" eventKey="2">
                                    			<ObstetricHistory context={this.state.context}/>
                                    		</Panel>
                                    		<Panel header={locale('MenstrualHistory')} className="Panel_custom_head" eventKey="3">
                                    			<MenstrualHistory context={this.state.context}/>                                    		
                                    		</Panel>
                                    		<Panel header={locale('PastMedicalHistory')} className="Panel_custom_head" eventKey="4">
                                				<PastMedicalHistory context={this.state.context}/>                                    		
                                			</Panel>
                                			<Panel header={locale('FamilyHistory')} className="Panel_custom_head" eventKey="5">
                                				<FamilyHistory context={this.state.context}/>                                    		
                                			</Panel>
                                			<Panel header={locale('HabbitsAndSocialHistory')} className="Panel_custom_head" eventKey="6">
                                				<HabbitsSocialHistory context={this.state.context}/>                                    		
                                			</Panel>
                                			<Panel header={locale('Allergies')} className="Panel_custom_head" eventKey="7">
                                				<Allergies context={this.state.context}/>                                   		
                                			</Panel>
                                       	</Accordion>
                            		</div>
            );
    }
}
/**
 * 
 */