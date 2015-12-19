/*eslint no-mixed-spaces-and-tabs:0*/
/*eslint no-unused-vars: 0*/
import React from 'react';
import ControlBase from './ControlBase';

export default class TextBox extends ControlBase {
//export default class TextBox extends React.Component {
    constructor() {
        super();
        this.state = {values: ''};
    }


    handleChange(event) {
        this.setState({values: event.target.value});
    }

    render() {    	
        return (
            <input type="text"  onChange={this.handleChange.bind(this)} 
            			size={this.props.textSize}/>
            );
    }
}
