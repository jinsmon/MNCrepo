/*eslint no-mixed-spaces-and-tabs:0*/
/*eslint no-unused-vars: 0*/
import React from 'react';
import Component2 from './Component2';

import ControlBase from './../../controls/ControlBase';

class Component1 extends ControlBase {

    constructor() {
        super();
    }

    render() {


        return <div> 
    				Component 1
					<input type='text' valueLink={this.linkState(this.props.context[0], 'age')} />	
    				<Component2 context={this.props.context[1]} parent={this} />
    				</div>;
    }

    name() {
        return 'Component 1';
    }
}

module.exports = Component1;