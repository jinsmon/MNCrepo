/*eslint no-mixed-spaces-and-tabs:0*/
/*eslint no-unused-vars: 0*/
import React from 'react';
import Switch from 'react-bootstrap-switch';
import ControlBase from './ControlBase';
import LabeledControl from './LabeledControl';

export default class ToggleButton extends ControlBase {
    // export default class ToggleButton extends React.Component {


    constructor() {
        super();
    }

    componentWillReceiveProps(newProps) {
        this.refs.toggle.value(newProps.valueLink.value);
    }

    childRender() {

        let controlLinkState = this.controlLinkState();
        let toggleLabel = controlLinkState.value ? this.props.offText : this.props.onText;

        return (

            <LabeledControl label={this.props.label} labelClassName={this.props.labelClassName} wrapperClassName={this.props.wrapperClassName} control={
            <Switch ref='toggle' onText={this.props.onText}
            offText={this.props.offText}
            labelText={toggleLabel}
            onColor={this.props.onColor}
            offColor={this.props.offColor}
            animate={this.props.animate}
            state={controlLinkState.value}
            onChange={controlLinkState.requestChange}/>} />

            );
    }

    getControlValue(value) {

        return value;
    }
}

ToggleButton.defaultProps = {
    label: '',
    onColor: 'success',
    offColor: 'default',
    size: 'normal',
    onText: 'YES',
    offText: 'NO',
    labelText: 'YES',
    animate: true
};


