/*eslint no-mixed-spaces-and-tabs:0*/
/*eslint no-unused-vars: 0*/
import React from 'react';
import AbdominalExamination from './AbdominalExamination';
import GeneralExamination from './GeneralExamination';
import SystemicExamination from './SystemicExamination';
import BreastExamination from './BreastExamination';
import VisitStore from '../../stores/VisitStore';
import {Accordion, Panel} from 'react-bootstrap';
import ControlBase from '../../controls/ControlBase.js';

export default class PhysicalExamination extends ControlBase {

    constructor() {
        super();
       
    }

    render() {
        return (
            <div>
                            			<Accordion>
                            				<Panel header={locale('GeneralExamination')} keepState expanded={true}>                                    		
                            					<GeneralExamination context={this.state.context}/>
                            				</Panel>
                                    		<Panel header={locale('BreastExamination')} eventKey="2">
                                    			<BreastExamination context={this.state.context}/>
                                    		</Panel>
                                    		<Panel header={locale('AbdominalExamination')} eventKey="3">
                                    			<AbdominalExamination context={this.state.context}/>
                                    		</Panel>
                                    		<Panel header={locale('SystemicExamination')} eventKey="4">
                                    			<SystemicExamination context={this.state.context}/>                                   		
                                    		</Panel>
                                       	</Accordion>
                            		</div>

            );
    }
}