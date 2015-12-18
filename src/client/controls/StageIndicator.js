/*eslint no-mixed-spaces-and-tabs:0*/
/*eslint no-unused-vars: 0*/
/*eslint no-dupe-keys: 0*/
import React from 'react';
import Switch from 'react-bootstrap-switch';
import ControlBase from './ControlBase';
import LabeledControl from './LabeledControl';

export default class StageIndicator extends ControlBase {
    // export default class ToggleButton extends React.Component {
    constructor() {
        super();
    }
    childRender() {	
        var divDimension = {
            display: 'inline-block',
            direction: 'ltr',
            cursor: 'pointer',    		  
            position: 'relative',
            textAlign: 'left',    		      
            verticalAlign: 'middle',		    
            transition: 'border-color ease-in-out .15s,box-shadow ease-in-out .15s',
            height:'100%',
            fontSize: '.75vw'
        };
        var divContainer={    
            display: 'inline-block',
            top: '0',
            borderRadius: '4px',
            webkitTransform: 'translate3d(0,0,0)',
            transform: 'translate3d(0,0,0)'
        };
        var divSuccess = {		
            textAlign: 'center',      
            zIndex: '100',
            color: '#333',
            background: '#fff',
            borderRadius: '4px',
            border: '1px solid #ccc',
            padding:'5px',
            color: '#fff',
            background: '#5cb85c'		
        };
        var divLabel={
            textAlign: 'center',      
            zIndex: '100',
            color: '#333',
            background: '#fff',
            borderRadius: '4px',
            border: '1px solid #ccc',
            padding:'5px'
        };
        let children = [];

        for (let index = 0; index < this.props.options.length; index++) {
            let option = this.props.options[index];
            if (this.props.value && option.value == this.props.value)
                children.push(<span style={divSuccess}>{option.text}</span>);
            else
                children.push(<span style={divLabel}>{option.text}</span>);
        }

        return (


            <LabeledControl label={this.props.label} labelClassName={this.props.labelClassName} wrapperClassName={this.props.wrapperClassName} control={
            <div style={divDimension}>
      					<div style={divContainer}>{children}</div>
         </div>

            } />

            );
    }

    getControlValue(value) {

        return value;
    }
}



