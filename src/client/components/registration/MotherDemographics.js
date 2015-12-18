/*eslint no-mixed-spaces-and-tabs:0*/
/*eslint no-unused-vars: 0*/
import React from 'react';
import TextBox from './../../controls/TextBox';
import {Input, Row, Col, Image, Label, Button} from 'react-bootstrap';
import ControlBase from './../../controls/ControlBase';
import ToggleButton from './../../controls/ToggleButton';
import DropDown from './../../controls/DropDown';
import LabeledControl from './../../controls/LabeledControl';

var villages = [{
    value: 'Select Village',
    text: 'Select Village'
}, {
    value: 'Village1',
    text: 'Village1'
}, {
    value: 'Village2',
    text: 'Village2'
}];

var cities = [{
    value: 'Select City',
    text: 'Select City'
}, {
    value: 'City1',
    text: 'City1'
}, {
    value: 'City2',
    text: 'City2'
}];

var states = [{
    value: 'Select State',
    text: 'Select State'
}, {
    value: 'State1',
    text: 'State2'
}, {
    value: 'State2',
    text: 'State2'
}];

var subCentreIds = [{
    value: 'Select Sub-centerID',
    text: 'Select Sub-centerID'
}, {
    value: 'Sub-centerID1',
    text: 'Sub-center ID 1'
}, {
    value: 'Sub-centerID2',
    text: 'Sub-center ID 2'
}];

var subCentreNames = [{
    value: 'Select Sub-centerName',
    text: 'Select Sub-center Name'
}, {
    value: 'Sub-centerName1',
    text: 'Sub-center Name 1'
}, {
    value: 'Sub-centerName2',
    text: 'Sub-center Name 2'
}];

var vhnNames = [{
    value: 'Select VHNName',
    text: 'Select VHN Name'
}, {
    value: 'VHNName1',
    text: 'VHN Name 1'
}, {
    value: 'VHNName2',
    text: 'VHN Name 2'
}];

export default class MotherDemographics extends ControlBase {

    constructor() {
        super();
    }

    childRender() {
        let labelClass = '';
        let wrapperClass = '';
        let wcDropDown = 'col-xs-2';
        return (
            <div className="wrapper">
    	        	<form>
    	        		<Row>
    	        			<Col xs={4}>
    	        				<Input type="textarea" label={locale('AddressLine1')} className="editable" placeholder={locale('EnterAddLine1')} labelClassName={labelClass} wrapperClassName={wrapperClass} valueLink={this.linkState(this.state.context, 'addrs1')}  />
    	        				<Input type="textarea" label={locale('AddressLine2')} className="editable" placeholder={locale('EnterAddLine2')} labelClassName={labelClass} wrapperClassName={wrapperClass} valueLink={this.linkState(this.state.context, 'addrs2')} />
    	        				<Input type="textarea" label={locale('AddressLine3')} className="editable" placeholder={locale('EnterAddLine3')} labelClassName={labelClass} wrapperClassName={wrapperClass} valueLink={this.linkState(this.state.context, 'addrs3')} />
    	        				<Input type="checkbox" label={locale('TempAddressSame')}
            placeholder="TempAddressSame" labelClassName={labelClass} className="editable" wrapperClassName={wrapperClass} checkedLink={this.linkState(this.state.context, 'temporaryAddrSameAsPermanent')}  />
    	        				</Col>
    	        			<Col xs={4}>    	        			
    	        				<DropDown label={locale('Village')} className="editable" placeholder={locale('SelVill')} labelClassName={labelClass}
            options={villages} valueLink={this.linkState(this.state.context, 'village')}  />
    	        				<DropDown label={locale('City')} className="editable" placeholder={locale('SellCity')} labelClassName={labelClass}
            options={cities} valueLink={this.linkState(this.state.context, 'city')}  />    	        				
    	        				<DropDown label={locale('State')} className="editable" placeholder={locale('SelState')} labelClassName={labelClass}
            options={states} valueLink={this.linkState(this.state.context, 'state')}  />    	        				
    	        				<Input type="textbox" label={locale('Pincode')} className="editable" placeholder={locale('EnterPIN')} labelClassName={labelClass} wrapperClassName={wrapperClass} valueLink={this.linkState(this.state.context, 'pincode')}  />
    	        			</Col>
    	        		</Row>
    	        		<Row>
    			        <Col>
    			        	<div className="seperator"> </div>
    			        </Col>
    			        </Row>
    	        		<Row>
    	        		<Col xs={4}>
    	        		<DropDown label={locale('Sub_Center_ID')} className="editable" placeholder="Select Sub-center ID" labelClassName={labelClass}
            options={subCentreIds} valueLink={this.linkState(this.state.context, 'subCentreID')}  />       		
    	        		</Col>
    	        		<Col xs={4}>
    	        		<DropDown label={locale('Sub_Center_Name')} className="editable" placeholder="Select Sub-center Name" labelClassName={labelClass}
            options={subCentreNames} valueLink={this.linkState(this.state.context, 'subCentreName')}  />    	        		
    	        		</Col>
    	        		<Col xs={4}>
    	        		<DropDown label={locale('VHN_Name')} className="editable" placeholder="Select VHN Name" labelClassName={labelClass}
            options={vhnNames} valueLink={this.linkState(this.state.context, 'vhnName')}  />    	        		
    	        		</Col>    	        		
    	        		</Row>
    	        	</form>
    	      	</div>
            );
    }
}