/*eslint no-mixed-spaces-and-tabs:0*/
/*eslint no-unused-vars: 0*/
import React from 'react';
import ControlBase from './../../controls/ControlBase';
import Label from './../../controls/Label';
import Button from './../../controls/ControlButton';
import Dropdown from './../../controls/Dropdown';


import LocalizerManager from './LocalizerManager';

var btnsStyle = {align: 'center'};
var localeJson;
var jsonData;

export default class Localization extends ControlBase {
    constructor() {
        super();
        this.state = {language: 'en'};
    }

    callLocalizeManager() {
        //console.log('calling LocalizeManager ');
        localeJson = locale('BP');
        //console.log(localeJson);
    }

    childRender() {

        new LocalizerManager(this.state.language);

        let labelClass = 'col-xs-3';
        let wrapperClass = 'col-xs-4';
        return (
            <form className="form-horizontal">
                      <Label value ='Blood Pressure in English : Blood Pressure'></Label>
            		  <Label value = {locale('BP')}></Label>
            		
            		  <Dropdown options={[{
                text: 'English',
                value: 'en'
            }, {
                text: 'Tamil',
                value: 'ta'
            }, {
                text: 'Hindi',
                value: 'hi'
            }, {
                text: 'Malayalam',
                value: 'ml'
            }]} valueLink={this.linkState(this.state, 'language')} />
            		  
                      <span style={btnsStyle}>
                      	<div className="row">
                          	<div className="col-xs-3">
                              	<Button btnstyle='success' bsSizestyle='small' value ='Localize' onClick = {this.callLocalizeManager}></Button>
                              </div>
                          </div>
                      </span>
            </form>
            );
    }


}