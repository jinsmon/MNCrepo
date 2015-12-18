/*eslint no-mixed-spaces-and-tabs:0*/
/*eslint no-unused-vars: 0*/
import React from 'react';
import LabOrders from './LabOrders';
import LabResults from './LabResults';
import VisitStore from '../../stores/VisitStore';
import ControlBase from '../../controls/ControlBase.js';

import {Accordion, Panel} from 'react-bootstrap';

export default class LabResultsAndOrders extends ControlBase {

    constructor() {
        super();
    }

    render() {
        return (
            <div>
                            			<Accordion>
                                    		<Panel header={locale('Results')} keepState expanded={true}>                                    		
                                    			<LabResults context={this.state.context}/>
                                    		</Panel>
                                    		<Panel header={locale('Orders')} keepState>
                                    			<LabOrders context={this.state.context}/>
                                    		</Panel>
                                       	</Accordion>
                            		</div>
            );
    }
}
/**
 * 
 */