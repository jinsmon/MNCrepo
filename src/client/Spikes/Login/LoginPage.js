/*eslint no-mixed-spaces-and-tabs:0*/
/*eslint no-unused-vars: 0*/
import React from 'react';
import Button from './../../controls/ControlButton';
import ControlBase from './../../controls/ControlBase';
import TextBox from './../../controls/TextBox';
import {Input, Row, Col} from 'react-bootstrap';

var btnsStyle = {'align': 'center'};

export default class LoginPage extends ControlBase {
    constructor() {
        super();
    }

    loginUser() {
        //console.log('SAVE User');
    }

    childRender() {
        let labelClass = 'col-xs-3';
        let wrapperClass = 'col-xs-4';
        return (
            <form className="form-horizontal">
            		
                    <Input type="textbox" label="Username" placeholder="Username" labelClassName={labelClass} wrapperClassName={wrapperClass} />
                    <Input type="password" label="Passowrd" placeholder="Passowrd" labelClassName={labelClass} wrapperClassName={wrapperClass} />
                    <span className={wrapperClass}></span>
                    <span style={btnsStyle}>
                    	<div className="row">
                        	<div className="col-xs-3">
                            	<Button btnstyle='success' bsSizestyle='medium' value ='Login' onClick = {this.loginUser}></Button>
                            </div>
                        </div>
                    </span>
            </form>
            );
    }
}