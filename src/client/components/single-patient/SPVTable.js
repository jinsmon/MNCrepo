/*eslint no-mixed-spaces-and-tabs:0*/
/*eslint no-unused-vars: 0*/

import React from 'react';
import {Table, Image} from 'react-bootstrap';
import ControlBase from './../../controls/ControlBase';
import SinglePatientViewModel from './../../model/SinglePatientViewModel';

var data;
export default class SPVTable extends ControlBase {

    constructor() {
        super();
        this.data = SinglePatientViewModel.getSinglePatientViewData();
        /*AppAction.executeAction(ActionType.SINGLE_PATIENT_FETCH, this.state.patientData);
        this.data=this.state.patientData;*/
    }
    
    childRender() {

        let weekType = this.props.trimesterClicked;
        let visits = this.data.visits[weekType].visits;
        let status, type, date, lastUpdated, enteredBy, summary, view;
        let contents = [];
        for (let i = 0; i < visits.length; i++) {
            status = visits[i].status;
            if (visits[i].type == 'ANC') {
                type = <div><div className="mandatorySymbol"></div>ANC</div>;
            } else {
                type = visits[i].type;
            }
            date = visits[i].date;
            lastUpdated = visits[i].lastUpdated;
            enteredBy = visits[i].enteredBy;
            summary = <Image className="img-responsive center-block " src="./patient/summary_icon.png" onClick={this.navigate(Route.VISIT_SUMMARY + '/' + visits[i].visitId)} />;
            view = <Image className="img-responsive center-block" src="./patient/view_icon.png" onClick={this.navigate(Route.PATIENT + '/' + this.data.patientId + '/' + Route.VISIT + '/' + visits[i].visitId)} />;
            contents.push(
                <tr>
    				 	<td>{status}</td>
    				 	<td>{type}</td>
    				 	<td>{date}</td>
    				 	<td>{lastUpdated}</td>
    				 	<td>{enteredBy}</td>
    				 	<td>{summary}</td>
    				 	<td>{view}</td>
    				 </tr>);
        }
        var header;
        return (

            <Table bordered hover responsive className="SPVTable">
      		    <thead className="SPVTableheader">
      		      <tr>
      		        <th>Status</th>
	          	        <th>Type</th>
	          	        <th>Date</th>
	          	        <th>Last Updated</th>
	          	        <th>Entered by</th>
	          	        <th>Summary</th>
	          	        <th>View</th>
      		      </tr>
      		    </thead>
      		    <tbody>
      		      {contents}
      		    </tbody>
      		  </Table>


            );
    }
}
