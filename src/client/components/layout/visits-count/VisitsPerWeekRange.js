
import React from 'react';// eslint-disable-line  no-unused-vars
import ControlBase from './../../../controls/ControlBase';
import { Row, Col } from 'react-bootstrap';
import DropDownSplit from './DropDownSplit';
import SinglePatientViewModel from './../../../model/SinglePatientViewModel';

var label = {marginRight: '10px'};
var divDropDown = {'margin-top': '10px', 'margin-right': '3px', 'float': 'right'};

export default class VisitsPerWeekRange extends ControlBase {

    constructor() {
        super();
        let data = SinglePatientViewModel.getSinglePatientViewData();
        this.state={visitdata:data};
    }

    childRender() {
        let weekType = this.props.trimesterClicked;
        let visitCounts=this.state.visitdata.visits[weekType];
        return (
				<div className="visitsPerWeekRange">
					<Row>
						<Col xs={8}>
							<span style={label}><label className="visitsPerWeekRangeVisitCount left-block" bsSize="xsmall" >TotalVisit <font style={{color: 'green'}}>{visitCounts.totalVisits}</font></label></span> 
							<span style={label}><label className="visitsPerWeekRangeVisitCount left-block" bsSize="xsmall" >ANC Visit <font style={{color: 'green'}}>{visitCounts.ancVisits}</font></label></span>
							<span style={label}><label className="visitsPerWeekRangeVisitCount left-block" bsSize="xsmall" >General Visit <font style={{color: 'green'}}>{visitCounts.generalVisits}</font></label></span>
							<span style={label}><label className="visitsPerWeekRangeVisitCount left-block" bsSize="xsmall" >Missed Visit <font style={{color: 'green'}}>{visitCounts.missedVisits}</font></label></span>
						</Col>
						<Col xs={4}>
							<div style={divDropDown}> <DropDownSplit> </DropDownSplit> </div>
						</Col>
					</Row>
				</div>
            );
    }
}