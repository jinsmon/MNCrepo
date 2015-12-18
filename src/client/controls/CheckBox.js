/*eslint no-unused-vars: 0*/
/*eslint no-unused-vars: 0*/
import React from 'react';
import CheckboxGroup from 'react-checkbox-group';
import ControlBase from './ControlBase';


var cbAlign;
export default class CheckBox extends ControlBase {
//export default class CheckBox extends React.Component {

    constructor() {
        super();
        this.state = {checkedValues: ''};
    }


    childRender() {        
        var cbOptions = [];
        cbAlign = this.props.align;
        // if(this.props.options) {
        this.props.options.forEach(function(option) {
            if (cbAlign == 'horizontal') {
                cbOptions.push(<div className="col-xs-2"><label className="col-xs-4" >{option.name} </label>  <div className="col-xs-8"> <input type="checkbox" className="minimal"   key={option.id} value={option.name}/> </div> </div>);
            } else {
                cbOptions.push(<div className="row"><label className="col-xs-4" >{option.name} </label>  <div className="col-xs-4"> <input type="checkbox" className="minimal"   key={option.id} value={option.name}/> </div> </div>);
            }
        });

        return (
            <div>
		<CheckboxGroup  ref="checkedGroup" onChange={this.onFormChange.bind(this)} value={this.props.values}>
			{cbOptions}
		</CheckboxGroup>
	</div>
            );
    }

    onFormChange() {
        var checkedValues = this.refs.checkedGroup.getCheckedValues();
        this.props.onValueChange(checkedValues);
    }
}