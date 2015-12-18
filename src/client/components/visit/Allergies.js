/*eslint no-unused-vars: 0*/
/*eslint no-mixed-spaces-and-tabs:0*/
import React from 'react';
import ToggleButton from './../../controls/ToggleButton';
import ControlBase from './../../controls/ControlBase';
import {Input, Row, Col} from 'react-bootstrap';

export default class Allergies extends ControlBase {

    constructor() {
        super();
    }

    childRender() {
        let labelClass = 'col-xs-5 alignLeft';
        let wrapperClass = 'col-xs-2';
        return (
        		<div className="wrapper">
                <form className="form-horizontal custom_row">
                    <Row>
                        <Col xs={4}>
                            <ToggleButton label={locale('DrugAllergies')} labelClassName={labelClass} wrapperClassName={wrapperClass} valueLink={this.linkState(this.state.context.Allergies, 'isDrug')} />
						</Col>
						<Col xs={4}>
						    <Input type="textbox" label="" className="editable" placeholder="If yes, please indicate"   valueLink=""  />
						</Col>
                    </Row>

                    <Row>
                        <Col xs={4}>
                        <ToggleButton label={locale('FoodAllergies')} labelClassName={labelClass} wrapperClassName={wrapperClass} valueLink={this.linkState(this.state.context.Allergies, 'isFood')} />
					    </Col>
					    <Col xs={4}>
					        <Input type="textbox" label="" className="editable" placeholder="If yes, please indicate"   valueLink=""  />
					    </Col>
                    </Row>
                    
                    <Row>
                        <Col xs={4}>
                            <ToggleButton label={locale('EnviornmentalAllergies')} labelClassName={labelClass} wrapperClassName={wrapperClass} valueLink={this.linkState(this.state.context.Allergies, 'isEnv')} />
				        </Col>
				        <Col xs={4}>
				            <Input type="textbox" label="" className="editable" placeholder="If yes, please indicate"   valueLink=""  />
				        </Col>
                    </Row>
                </form>
            </div>
        );
    }
}
