/*eslint no-mixed-spaces-and-tabs:0*/
/*eslint no-unused-vars: 0*/
import React from 'react';


export default class ControlBase extends React.Component {

    constructor() {
        super();

    }

    componentWillMount() {
        this.setState(this.props);
    }


    notifyUpdates(context, newVal, property, handler) {
        this.setState(this.state);

        if (this.props.parent && this.props.parent.notifyUpdates)
            this.props.parent.notifyUpdates(context, this.state, property);


        if (this.props.valueLink) // this statement is used to update the parents of controls that wrap valueLink from parent control
            this.props.valueLink.requestChange(newVal);

        if (handler)
            handler(property);
    }

    linkState(context, property, handler) {
        return {
            value: context[property],
            requestChange: function(value) {

                if (this.getControlValue) // this is used to give the custom controls an option to override modified value.
                    value = this.getControlValue(value);

                let newVal = null;

                if (value && value.target) // this is used for bootstrap controls.
                    newVal = value.target.value;
                else
                    newVal = value; // used for values returning primary datatype.


                context[property] = newVal;

                this.notifyUpdates(context, newVal, property, handler);


            }.bind(this)
        };
    }

    controlLinkState() {
        let state = null;
        if (this.props.valueLink)
            state = this.linkState(this.props.valueLink, 'value');
        else
            state = this.linkState({value: this.props.value}, 'value');

        return state;
    }

    navigate(path) {
        return function() {
            Utils.navigate(this.props.history, path);
        }.bind(this);
    }

    render() {
        let controls = [];
        if (this.props.Required)
            controls.push(<label className='required'>*</label>);
        controls.push(this.childRender());

        return (
            <div>{controls}</div>
            );
    }



}


