/*eslint no-mixed-spaces-and-tabs:0*/
/*eslint no-unused-vars: 0*/

import React from 'react';

import ControlBase from './../../controls/ControlBase';

import Alert from './../../controls/Alert';
import {Button, Input} from 'react-bootstrap';


export default class AlertTest extends ControlBase {


    constructor() {
        super();
        this.state = {
            prop1: [{
                text: 'Alert1'
            }, {
                text: 'Alert2'
            }, {
                text: 'Alert3'
            }],
            prop2: false
        };
    }

    handleAlertDismiss() {}

    render() {

        return (
            <div>         
            <Input type="checkbox" label="Open"
            placeholder="prop2" checkedLink={this.linkState(this.state, 'prop2')}  />      
            
             	<Alert isOpen={this.state.prop2} options={this.state.prop1} />
            
                            </div>
            );
    }

}
