
/*eslint no-mixed-spaces-and-tabs:0*/
/*eslint no-unused-vars: 0*/

import React from 'react';
import ControlBase from './ControlBase';

export default class Label extends ControlBase {
    constructor() {
        super();
    }

    childRender() {
        return <label>{this.props.value}</label>;

    }

}
