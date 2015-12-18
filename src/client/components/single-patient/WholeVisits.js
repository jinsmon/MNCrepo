import React from 'react'; // eslint-disable-line  no-unused-vars
import ControlBase from './../../controls/ControlBase';
import { Button, Row, Col} from 'react-bootstrap';
export default class WholeVisits extends ControlBase {

    constructor() {
        super();
        this.state = {
            totalVisit: '10',
            ancVisit: '02',
            generalVisit: '03',
            pncVisit: '0',
            missedVisit: '0'
        };
    }

    childRender() {
        return (
            <Row className="wholeVisitIndicator">
            <Col xs={8}  className="visitIndicator">
                    <label className="wholeVisitIndicatorLabel " bsSize="xsmall" >Total Visit <font style={{
                        color: 'orange'
                    }}>{this.state.totalVisit}</font></label> 
                    <label className="wholeVisitIndicatorLabel" bsSize="xsmall" >ANC Visits <font style={{
                        color: 'orange'
                    }}>{this.state.ancVisit}</font></label>                    
                    <label className="wholeVisitIndicatorLabel" bsSize="xsmall" >General Visits <font style={{
                        color: 'orange'
                    }}>{this.state.generalVisit}</font></label>
                    <label className="wholeVisitIndicatorLabel" bsSize="xsmall" >PNC Visit <font style={{
                        color: 'orange'
                    }}>{this.state.pncVisit}</font></label> 
                    <label className="wholeVisitIndicatorLabel" bsSize="xsmall" >Missed Visit <font style={{
                        color: 'orange'
                    }}>{this.state.missedVisit}</font></label>
                    
            </Col>   
            <Col xs={4}>
            <Button className="backToWrkLstBtn" bsSize="xsmall">Back  to Worklist</Button>
            </Col>
            </Row>
            );
    }
}