/*eslint no-mixed-spaces-and-tabs:0*/
/*eslint no-unused-vars: 0*/

import React from 'react';
import Label from './../controls/Label';
import ControlBase from './../controls/ControlBase';
import {Input, option} from 'react-bootstrap';

import DropDown from './../controls/DropDown';
import ToggleButton from './../controls/ToggleButton';
import StageIndicator from './../controls/StageIndicator';
import DatePicker from './../controls/DatePicker';


export default class DatabindingControls extends ControlBase {


    constructor() {
        super();
        this.state = {
            prop1: null,
            prop2: null,
            prop3: true,
            prop4: '12/12/2015',
            prop5: null,
            prop6: null,
            prop7: true,
            prop8: 'option2',
            options1: [{
                text: 'option 1',
                value: 'option1'
            },
            {
                text: 'option 2',
                value: 'option2'
            },
            {
                text: 'option 3',
                value: 'option3'
            }]
        };
    }

    render() {


        let labelClass = 'col-xs-2';
        let wrapperClass = 'col-xs-2';

        return (
            <div>                                
             
            <div className='row'>
            <Input type="text" label="prop1"
            placeholder="prop1" labelClassName={labelClass} wrapperClassName={wrapperClass} valueLink={this.linkState(this.state, 'prop1')}  />
         
            <Input type="text" label="prop1"
            placeholder="prop1" labelClassName={labelClass} wrapperClassName={wrapperClass} valueLink={this.linkState(this.state, 'prop1')}  />
            
            </div>
            
            <div className='row'>
            <Input type="checkbox" label="prop3"
            placeholder="prop3" labelClassName={labelClass} wrapperClassName={wrapperClass} checkedLink={this.linkState(this.state, 'prop3')}  />
            
            <Input type="checkbox" label="prop3"
            placeholder="prop3" labelClassName={labelClass} wrapperClassName={wrapperClass} checkedLink={this.linkState(this.state, 'prop3')}  />            
                   
            </div>
            
            <div className='row'>
            <Input type="radio" label="prop3"
            placeholder="prop3" labelClassName={labelClass} wrapperClassName={wrapperClass} checkedLink={this.linkState(this.state, 'prop3')}  />
            
            <Input type="radio" label="prop3"
            placeholder="prop3" labelClassName={labelClass} wrapperClassName={wrapperClass} checkedLink={this.linkState(this.state, 'prop3')}  />            
                   
            </div>
            
            
            
            <div className='row'>
            <DatePicker label="prop4.1"
            placeholder="prop4" labelClassName={labelClass} wrapperClassName={wrapperClass} valueLink={this.linkState(this.state, 'prop4')}  />
            
            <DatePicker label="prop4.2"
            placeholder="prop4" labelClassName={labelClass} wrapperClassName={wrapperClass} valueLink={this.linkState(this.state, 'prop4')}  />        
                   
            </div>
          
            <div className='row'>
            <DropDown label="prop5" 	placeholder="prop5" labelClassName={labelClass}
            wrapperClassName={wrapperClass} options={this.state.options1} valueLink={this.linkState(this.state, 'prop5')} />
            	        
 
            <DropDown label="prop5" 	placeholder="prop5" labelClassName={labelClass}
            wrapperClassName={wrapperClass} options={this.state.options1} valueLink={this.linkState(this.state, 'prop5')} />
            
        
            </div>
            
            
            <div className='row'>
            
            
            <DropDown label="prop6" multiple	placeholder="prop6" labelClassName={labelClass}
            wrapperClassName={wrapperClass} options={this.state.options1} valueLink={this.linkState(this.state, 'prop6')} />
           
             
 
            <DropDown label="prop6" multiple	placeholder="prop6" labelClassName={labelClass}
            wrapperClassName={wrapperClass} options={this.state.options1} valueLink={this.linkState(this.state, 'prop6')} />  
          
            
           
                   
            </div>
            
            
    <div className='row'>
            
            
            <ToggleButton label="prop7" labelClassName={labelClass}
            wrapperClassName={wrapperClass} valueLink={this.linkState(this.state, 'prop7')} />
           
             
 
            <Input type="checkbox" label="prop7"
            placeholder="prop7" labelClassName={labelClass} wrapperClassName={wrapperClass} checkedLink={this.linkState(this.state, 'prop7')}  />
          
            
           
                   
            </div>
            
               <div className='row'> 
               
               		
                    <Input type="text" label="prop8"
            placeholder="prop8" labelClassName={labelClass} wrapperClassName={wrapperClass} valueLink={this.linkState(this.state, 'prop8')}  />
              
                    <StageIndicator options={this.state.options1} value={this.state.prop8} label='prop8' labelClassName={labelClass} wrapperClassName={wrapperClass} />
                    
                    </div>
                            </div>
            );
    }

}
