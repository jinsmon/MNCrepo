/*eslint no-mixed-spaces-and-tabs:0*/
/*eslint no-unused-vars: 0*/

import React from 'react';
import Label from './../controls/Label';
import ControlBase from './../controls/ControlBase';

export default class LabelTest extends ControlBase {


    constructor() {
        super();

        this.setState({required: false});
    }

    render() {
        return (
            <div>                                
                                  <input type='text' valueLink={this.linkState(this.state, 'required')} />
                                  <Label Required={this.state.required} value="Test label"/>                                        
                            </div>
            );
    }

}
