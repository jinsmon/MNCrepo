/*eslint no-mixed-spaces-and-tabs:0*/
/*eslint no-unused-vars: 0*/ import React from 'react';

import LabeledControlList from './../../controls/LabeledControlList';
import ToggleButton from './../../controls/ToggleButton';
import {Row, Col} from 'react-bootstrap';
import ControlBase from './../../controls/ControlBase';

export default class HabbitsSocialHistory extends ControlBase {

    constructor() {
        super();
    }
    childRender() {
        let labelClass = 'col-xs-5 alignLeft';
        let wrapperClass = 'col-xs-2';
        return (
                <div className="wrapper">
                    <form className="form-horizontal  custom_row">
                        <Row>
                            <Col xs={4}>
                                <ToggleButton label={locale('Tobacco')} labelClassName={labelClass}	wrapperClassName={wrapperClass} valueLink={this.linkState(this.state.context.HabbitsSocialHistory, 'Tobacco')} />
                                
                            </Col>
                            <Col xs={4}>
                                <ToggleButton label={locale('Drugs')} labelClassName={labelClass}	wrapperClassName={wrapperClass} valueLink={this.linkState(this.state.context.HabbitsSocialHistory, 'Drugs')} />
            				    
                            </Col>
                            <Col xs={4}>
                            <ToggleButton label={locale('Smoking')} labelClassName={labelClass}	wrapperClassName={wrapperClass} valueLink={this.linkState(this.state.context.HabbitsSocialHistory, 'Smoking')} />
                            </Col>
                        </Row>
                        <Row>
                        <Col xs={4}>
                        <ToggleButton label={locale('Alcohol')} labelClassName={labelClass}	wrapperClassName={wrapperClass} valueLink={this.linkState(this.state.context.HabbitsSocialHistory, 'Alcohol')} />
                        </Col>
                        </Row>
                            
                     </form>
                </div>
        );
    }
}