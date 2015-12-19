import React from 'react'; // eslint-disable-line  no-unused-vars
import ControlBase from './../../controls/ControlBase';
import {SplitButton, MenuItem} from 'react-bootstrap';

var menuStyle = {'background-color': '#F5F6F7' , 'font-family': 'GEInspira', 'font-size': '15px'};
var ddTitle='Add Visit';

export default class DropDownSplit extends ControlBase {

    constructor() {
        super();
        this.state = {
            ddTitle: 'Add Visit'
        };
    }    
    
    onFormChange() {}

    onMenuClickANC() {
        ddTitle='ANC';
        this.setState({ddTitle});
    }

    onMenuClickPNC() {
        ddTitle='PNC';
        this.setState({ddTitle});
    }

    onMenuClickGC() {
        ddTitle='General Consultation';
        this.setState({ddTitle});
    }

    childRender() {
        return (
				<div>
					<SplitButton className="splitButton btn btn-default custom_drop"  id="split-button-pull-right" title={ddTitle} onClick={this.onFormChange.bind(this)} >
						<MenuItem style={menuStyle} eventKey="1" onClick={this.onMenuClickANC.bind(this)}>ANC</MenuItem>
						<MenuItem divider />
						<MenuItem style={menuStyle} eventKey="2" onClick={this.onMenuClickPNC.bind(this)}>PNC</MenuItem>
						<MenuItem divider />
						<MenuItem style={menuStyle} eventKey="3" onClick={this.onMenuClickGC.bind(this)}>General Consultation</MenuItem>
					</SplitButton>
				</div>
        );
    }
}