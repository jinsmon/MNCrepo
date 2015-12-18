/*eslint no-mixed-spaces-and-tabs:0*/
/*eslint no-unused-vars: 0*/
import React from 'react';
import ControlBase from './ControlBase';

export default class NumericTextField extends ControlBase {
//export default class NumericTextField extends React.Component {
    constructor() {
        super();
        this.state = {values: ''};
    }

    handleChange(event) {
        this.setState({values: event.target.value});
    }

    childRender() {
        return (  
        	<div key={this}>
        	<input type="number" onChange={this.handleChange.bind(this)} />
            </div>
            );
    }
}
