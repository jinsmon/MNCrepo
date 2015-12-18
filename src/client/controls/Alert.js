/*eslint no-mixed-spaces-and-tabs:0*/
/*eslint no-unused-vars: 0*/
import React from 'react';
import ControlBase from './ControlBase';
import {Alert, Button} from 'react-bootstrap';
import LabeledControl from './LabeledControl';

export default class Control extends ControlBase {
    // export default class DatePicker extends React.Component {
    constructor() {
        super();

        this.state = {isOpen: false};
    }

    componentWillReceiveProps(newProps) {
        this.setState({isOpen: newProps.isOpen});
    }

    handleAlertShow() {
        this.setState({isOpen: true});
    }

    handleAlertDismiss() {
        this.setState({isOpen: false});
    }

    render() {

        if (this.state.isOpen) {

            let messages = [];
            this.props.options.forEach(function(i) {
                messages.push(<p>{i.text}</p>);

            });

            return (

                <Alert bsStyle="danger" {...this.props}  onDismiss={this.handleAlertDismiss.bind(this)} >
            <h4>Risk Alert</h4>
            	{messages}
            </Alert>

                );
        }

        return (<Button onClick={this.handleAlertShow.bind(this)}>Show Alert</Button>);
    }



}