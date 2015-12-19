/*eslint no-mixed-spaces-and-tabs:0*/
/*eslint no-unused-vars: 0*/
import React from 'react';
import ControlBase from './ControlBase';

export default class LabeledControl extends ControlBase {
    // export default class LabeledControl extends React.Component{

    constructor() {
        super();
    }

    childRender() {

        let labelClass = 'control-label ' + (this.props.labelClassName ? this.props.labelClassName : '');

        let controls = [];
        if (this.props.label)
            controls.push(<label className={labelClass}>{this.props.label}</label>);
        if(this.props.subLabel)
            controls.push(<span className='subLabel'>{this.props.subLabel}</span>);

        return (
            <div className="form-group">
       			{controls}
       			<div className={this.props.wrapperClassName}>
       				{this.props.control}	        		
       			</div>
       		</div>
            );
    }
}