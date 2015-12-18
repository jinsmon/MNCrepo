/*eslint no-mixed-spaces-and-tabs:0*/
/*eslint no-unused-vars: 0*/

import React from 'react';
import Component1 from './Component1';
import ControlBase from './../../controls/ControlBase';



class BindingExample extends ControlBase {

    constructor() {
        super();
        // this.state = {data};
        this.state = {
            prop1: {
                age: 12
            },
            arr: [{
                age: 12
            }, {
                age: 34,
                skills: {
                    name: 'java'
                }
            }],
            age: '30'
        };


    }

    SubmitData() {}

    nameHandler(property) {
        this.state.prop1.age = 20;
        this.forceUpdate();
    }

    render() {
        return <div> 
					<input type='text' valueLink={this.linkState(this.state.prop1, 'age')} />	
					<input type='text' value={this.state.prop1.age} readOnly />	
					
					<input type='text' valueLink={this.linkState(this.state.arr[0], 'age')} />	
					<input type='text' valueLink={this.linkState(this.state.arr[1], 'age')} />
				
					<input type='text' value={this.state.arr[0].age} readOnly />	
					<input type='text' value={this.state.arr[1].age} readOnly />	
					
					<input type='text' value={this.state.arr[1].skills.name} readOnly />
					<input type='text'  valueLink={this.linkState(this.state.arr[1].skills, 'name', this.nameHandler.bind(this))} />	
					
					<button onClick={this.SubmitData.bind(this)} >Submit</button>
					
					<Component1 context={this.state.arr} parent={this} />
					
					
					</div>;
    }

    handlePropertyUpdate(context, property) {}

    name() {
        return 'Binding Example';
    }

}
module.exports = BindingExample;