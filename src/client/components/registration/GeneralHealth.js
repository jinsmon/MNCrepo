/*eslint no-mixed-spaces-and-tabs:0*/
import React from 'react';
import LabeledControlList from './../../../controls/LabeledControlList';
import TextBox from './../../../controls/TextBox';
import NumericTextField from './../../../controls/NumericTextField';
import DropDown from './../../../controls/DropDown';
import ToggleButton from './../../../controls/ToggleButton';

export default class GeneralHealth extends React.Component {

    constructor() {
        super();
    }


    render() {

        var bloodGroups = [{
            id: '0',
            name: 'O+'
        },
            {
                id: '1',
                name: 'O-'
            },
            {
                id: '2',
                name: 'A+'
            },
            {
                id: '3',
                name: 'A-'
            }
        ];

        var optionsLeft = [{
            label: 'Blood group',
            control: <DropDown options={bloodGroups}/>
        },
            {
                label: 'Height',
                control: <TextBox/>
            },
            {
                label: 'Weight',
                control: <TextBox/>
            },
            {
                label: 'Blood Pressue',
                control: <NumericTextField/>
            }
        ];

        var optionsRight = [
            {
                label: 'Respiratory Rate',
                control: <NumericTextField/>
            },
            {
                label: 'Pallor',
                control: <ToggleButton/>
            },
            {
                label: 'General Edema',
                control: <TextBox/>
            }
        ];

        return ( <div className="row">
        			<div className="col-md-6"><LabeledControlList options={optionsLeft} /></div>
        			<div className="col-md-6"><LabeledControlList options={optionsRight} /></div>
        		 </div>);
    }
}