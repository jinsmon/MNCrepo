/*eslint no-mixed-spaces-and-tabs:0*/
/*eslint no-unused-vars: 0*/
import React from 'react';
import ControlBase from './ControlBase';
import DateTimeField from 'react-bootstrap-datetimepicker';
import LabeledControl from './LabeledControl';

export default class DatePicker extends ControlBase {
    // export default class DatePicker extends React.Component {
    constructor() {
        super();
        this.state = {values: ''};
    }

    handleChange(event) {
        this.setState({values: event.target.value});
    }

    componentDidMount() {}

    render() {
        let controlLinkState = this.controlLinkState();
       
        return (

            <LabeledControl {...this.props} control ={
            <DateTimeField className="editable" {...this.props}
            format='DD/MM/YYYY'
            inputFormat='DD/MM/YYYY'
            mode='date'
            dateTime={controlLinkState.value}
            onChange={controlLinkState.requestChange}
            />
            } />

            );
    }

    getControlValue(value) {
      
        return value;
    }

}