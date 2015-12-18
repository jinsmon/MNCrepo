/*eslint no-unused-vars: 0*/
import React from 'react';
import ToggleButton from './../../controls/ToggleButton';
import ControlBase from './../../controls/ControlBase';
import {Input} from 'react-bootstrap';
import ObstetricHistory from '../visit/ObstetricHistory';


export default class PregnancyHistory extends ControlBase {

    childRender() {
 
   
        
        let labelClass = 'col-xs-3';
        let wrapperClass = 'col-xs-4';
        
        
        
        return(
         <form className="form-horizontal">
             <Input type="number" label={locale('Gravida')} placeholder="Gravida" labelClassName={labelClass} wrapperClassName={wrapperClass} valueLink={this.linkState(this.state.context, 'Gravid')} />
             <Input type="number" label={locale('Para')} placeholder="Para" labelClassName={labelClass} wrapperClassName={wrapperClass} valueLink={this.linkState(this.state.context, 'Para')} />
             <Input type="number" label={locale('LiveBirths')} placeholder="Live Births" labelClassName={labelClass} wrapperClassName={wrapperClass} valueLink={this.linkState(this.state.context, 'LiveBirths')} />
             <Input type="number" label={locale('Abortions')} placeholder="Abortions" labelClassName={labelClass} wrapperClassName={wrapperClass} valueLink={this.linkState(this.state.context, 'Abortions')} />
             </form>       
             );
    }
}
