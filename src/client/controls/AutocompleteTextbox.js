/*eslint no-mixed-spaces-and-tabs:0*/
/*eslint no-unused-vars: 0*/
import React from 'react';
import AutoCompleteTextBox from 'react-autosuggest';
import ControlBase from './ControlBase';


var acOptions = [];
export default class AutoCompleteText extends ControlBase {
//export default class AutoCompleteText extends React.Component {

    constructor() {
        super();
        this.state = {suggestions: 'Not selected'};
    }

    getSuggestions(input, callback) {
        var regex = new RegExp('^' + input, 'i');
        var suggestions = acOptions.filter(function(option) {
            return regex.test(option);
        });
        callback(null, suggestions);
    }

    onSuggestionSelected(suggestion) {
        this.props.onValueChange(suggestion);
    }

    childRrender() {
        acOptions = [];
        if (this.props.options) {
            this.props.options.forEach(function(option) {
                acOptions.push(option);
            });
        }
        return (
            <div>
			<AutoCompleteTextBox suggestions={this.getSuggestions} onSuggestionSelected={this.onSuggestionSelected} />
		  </div>
            );
    }
}