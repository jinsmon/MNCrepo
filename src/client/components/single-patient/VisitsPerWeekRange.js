import React from 'react';// eslint-disable-line  no-unused-vars
import ControlBase from './../../controls/ControlBase';
import { Row, Col } from 'react-bootstrap';
import DropDownSplit from './DropDownSplit';

var label = {marginRight: '10px'};
var divDropDown = {'margin-top': '10px', 'margin-right': '3px', 'float': 'right'};

export default class VisitsPerWeekRange extends ControlBase {

    constructor() {
        super();
        this.state = {
            totalVisit: '10',
            ancVisit: '02',
            generalVisit: '03',
            missedVisit: '01'
        };
    }

    childRender() {
        return (
				<div className="visitsPerWeekRange">
					<Row>
						<Col xs={8}>
							<span style={label}><label className="visitsPerWeekRangeVisitCount left-block" bsSize="xsmall" >TotalVisit <font style={{color: 'green'}}>{this.state.totalVisit}</font></label></span> 
							<span style={label}><label className="visitsPerWeekRangeVisitCount left-block" bsSize="xsmall" >ANC Visit <font style={{color: 'green'}}>{this.state.ancVisit}</font></label></span>
							<span style={label}><label className="visitsPerWeekRangeVisitCount left-block" bsSize="xsmall" >General Visit <font style={{color: 'green'}}>{this.state.generalVisit}</font></label></span>
							<span style={label}><label className="visitsPerWeekRangeVisitCount left-block" bsSize="xsmall" >Missed Visit <font style={{color: 'green'}}>{this.state.missedVisit}</font></label></span>
						</Col>
						<Col xs={4}>
							<div style={divDropDown}> <DropDownSplit> </DropDownSplit> </div>
						</Col>
					</Row>
				</div>
            );
    }
}