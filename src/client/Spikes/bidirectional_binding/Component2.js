/*eslint no-mixed-spaces-and-tabs:0*/
/*eslint no-unused-vars: 0*/


import React from 'react';
import ControlBase from './../../controls/ControlBase';

class Component2 extends ControlBase {
    constructor() {
        super();

    }

    render() {

        return <div> 
	  Component 2
	  				<input type='text' valueLink={this.linkState(this.props.context, 'age')} />    			
    	<Component3 	context={this.props.context.skills}  parent={this} />
	  </div>;
    }


    name() {
        return 'Component 2';
    }
}


class Component3 extends ControlBase {
    constructor() {
        super();

    }

    render() {

        return <div> 
	  Component 3
	  				<input type='text' valueLink={this.linkState(this.props.context, 'name')} />    			
    		
	  </div>;
    }


    name() {
        return 'Component 3';
    }
}


module.exports = Component2;