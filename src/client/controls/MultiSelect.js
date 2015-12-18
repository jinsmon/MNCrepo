/*eslint no-unused-vars: 0*/
import React from 'react';
import MultiSelects from 'react-selectize';
import ControlBase from './ControlBase';

export default class CustomMultiSelect extends ControlBase {
//export default class CustomMultiSelect extends React.Component {

    constructor() {
        super();
        this.state = {selectedValue: 'Not selected'};
    }

    handleChange(value) {
        this.props.onChange(value);
    }


    childRender() {
        var CustMultiSelect = MultiSelects.MultiSelect;
        return <CustMultiSelect options = {this.props.option}  onValuesChange ={this.handleChange.bind(this)} multiple  placeholder = "Select fruits"></CustMultiSelect>;

    }
}