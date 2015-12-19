/*eslint no-mixed-spaces-and-tabs:0*/
/*eslint no-unused-vars: 0*/
import React from 'react';
import LabeledControl from './LabeledControl';
import ControlBase from './ControlBase';


var label_Style={
    'paddingLeft': '15.5px'
};
export default class LabeledControlList extends ControlBase {
//export default class LabeledControlList extends React.Component {
    constructor() {
        super();
    }
    render() {
        var ddOptions = [];
        if(this.props.options) {
            this.props.options.forEach(function(option) {
                ddOptions.push(<LabeledControl className="row"  key={option.label}  label={option.label} control={option.control}/>);
            });
        }
        return (
            <div className="row"  style={label_Style}>
                {ddOptions}
                </div>
            );
    }
    handleOnChange(data) {
        return data;
    }
}