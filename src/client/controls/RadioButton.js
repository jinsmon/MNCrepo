/*eslint no-mixed-spaces-and-tabs:0*/
/*eslint no-unused-vars: 0*/
import React from 'react';
import ControlBase from './ControlBase';

export default class RadioControl extends ControlBase {
//export default class RadioControl extends React.Component {

    constructor() {
        super();
        this.state = {selectedValue: ''};
    }

    onSiteChanged(e) {
        this.props.onChange(e.target.value);
    }

    childRender() {

        var resultRows = [];
        this.props.option.map(function(result) {
            resultRows.push((<div>
			   		<label className="col-xs-4" >{result.name} </label> 
	   		   <div className="col-xs-1"> 
	   		   		<input type="radio" name={this.props.group}
            value={result.name}
            checked={this.state.selectedValue === result.name}
            onChange={this.onSiteChanged.bind(this)} className="minimal"  />            		  
	   		   	</div>
			   </div>)
            );
        }, this);
        return ( <div> {resultRows} </div> );
    }
}
