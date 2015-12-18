/*eslint no-mixed-spaces-and-tabs:0*/
/*eslint no-unused-vars: 0*/
import React from 'react';
import ToggleButton from './../../controls/ToggleButton';
import ControlBase from './../../controls/ControlBase';

export default class SystemicExamination extends ControlBase {

    constructor() {
        super();
    }


    childRender() {

        let labelClass = 'col-xs-3';
        let wrapperClass = 'col-xs-4';

        return (
            <form className="form-horizontal">
        			<ToggleButton label={locale('NormCardiovasculary')} labelClassName={labelClass}	wrapperClassName={wrapperClass} valueLink={this.linkState(this.state.context.SystemicExamination, 'NormalCardiovascularySystem')} />
        			<ToggleButton label={locale('NormNervous')} labelClassName={labelClass}	wrapperClassName={wrapperClass} valueLink={this.linkState(this.state.context.SystemicExamination, 'NormalNervousSystem')} />
        			<ToggleButton label={locale('NormDigestive')} labelClassName={labelClass}	wrapperClassName={wrapperClass} valueLink={this.linkState(this.state.context.SystemicExamination, 'NormalDigestiveSystem')} />
        			<ToggleButton label={locale('NormMusculoskeltal')} labelClassName={labelClass}	wrapperClassName={wrapperClass} valueLink={this.linkState(this.state.context.SystemicExamination, 'NormalMusculoskeltalSystem')} />
        		</form>
            );
    }
}