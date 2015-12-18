/*eslint no-unused-vars: 0*/
import React from 'react';
import ToggleButton from './../../controls/ToggleButton';
import ControlBase from './../../controls/ControlBase';
import {Row, Col} from 'react-bootstrap';

export default class FamilyHistory extends ControlBase {

    constructor() {
        super();
    }

childRender() {
    let labelClass = 'col-xs-5 alignLeft';
    let wrapperClass = 'col-xs-4';
    return(	
           <div className="wrapper">
                <form className="form-horizontal custom_row">
                    <Row>
                        <Col xs={4}>
                            <ToggleButton label={locale('HighBP')} labelClassName={labelClass} wrapperClassName={wrapperClass} valueLink={this.linkState(this.state.context.FamilyHistory, 'Highbloodpressurehypertension')} />
						</Col>
                        <Col xs={4}>
                            <ToggleButton label={locale('Tuberculosis')} labelClassName={labelClass} wrapperClassName={wrapperClass} valueLink={this.linkState(this.state.context.FamilyHistory, 'Tuberculosis')} />
                        </Col>
                        <Col xs={4}>
                            <ToggleButton label={locale('CongeniatlMalfomationsInImmediateFamily')} labelClassName={labelClass} wrapperClassName={wrapperClass} valueLink={this.linkState(this.state.context.FamilyHistory, 'CongeniatlMalfomationsinimmediatefamily')} />
                        </Col>
                    </Row>
                    <Row>
                    <Col xs={4}>
                        <ToggleButton label={locale('Diabetes')} labelClassName={labelClass} wrapperClassName={wrapperClass} valueLink={this.linkState(this.state.context.FamilyHistory, 'Diabetes')} />
					</Col>
                    <Col xs={4}>
                        <ToggleButton label={locale('TwinsInImmediateFamily')} labelClassName={labelClass} wrapperClassName={wrapperClass} valueLink={this.linkState(this.state.context.FamilyHistory, 'TwinsinimmediateFamily')} />
                    </Col>
                </Row>
                </form>
            </div>
    );
}
}
