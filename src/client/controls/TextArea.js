/*eslint no-unused-vars: 0*/
import React from 'react';
import ControlBase from './ControlBase';


var fieldWidth = {
    'width': '150px'		 
};
export default class TextArea extends ControlBase {
//export default class TextArea extends React.Component {
    constructor() {
        super();
        this.state = {values: ''};
    }

    handleChange(event) {        
        this.setState({values: event.target.value});
    }

    childRender() {
        return (
            <textarea style={fieldWidth} id="textAreaField" className="form-control"  onChange={this.handleChange.bind(this)} />
            );
    }
}
