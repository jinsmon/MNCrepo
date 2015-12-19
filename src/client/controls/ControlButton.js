/*eslint no-unused-vars: 0*/
import React from 'react';
import {Button} from 'react-bootstrap';
import ControlBase from './ControlBase';
export default class ControlButton extends ControlBase {
        constructor() {
            super();
        }
    childRender() {
        return(
        <div key={this} >
        <Button className ={this.props.btnClass}  bsSize={this.props.bsSizestyle} bsStyle ={this.props.btnstyle} onClick={this.props.onClick}>{this.props.value}</Button>
        </div>
        );
    }
}
