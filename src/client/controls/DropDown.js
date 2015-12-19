/*eslint no-unused-vars: 0*/
/*eslint no-unused-vars: 0*/
import React from 'react';
import ControlBase from './ControlBase';
import {Input, option} from 'react-bootstrap';

export default class DropDown extends ControlBase {
    // export default class DropDown extends React.Component {

    constructor() {
        super();
    }

    childRender() {
        let ddOptions = [];
        if (this.props.options) {
            this.props.options.forEach(function(option) {
                ddOptions.push(<option key={option.value} value={option.value}>{option.text}</option>);
            });
        }

        return (

            <Input ref='combo' type="select" multiple={this.props.multiple} label={this.props.label}     placeholder={this.props.placeholder} labelClassName={this.props.labelClassName}
            wrapperClassName={this.props.wrapperClassName} valueLink={this.controlLinkState()}>
                  
                      {ddOptions}
              
                  </Input>


            );
    }

    getControlValue(value) {
        let newValue = null;
        let combo = this.refs.combo;

        if (combo.props.multiple) {
            newValue = [];
            let options = combo.refs.input.options;
            for (var i = 0, l = options.length; i < l; i++) {
                if (options[i].selected) {
                    newValue.push(options[i].value);
                }
            }
        }
        else
            newValue = value;

        return newValue;
    }
}