/*eslint no-mixed-spaces-and-tabs:0*/
/*eslint no-unused-vars: 0*/
import React from 'react';
import ControlBase from './../../controls/ControlBase';
import ArrowedMenu from './../../controls/ArrowedMenu';
import VisitsPerWeekRange from './VisitsPerWeekRange';
import WholeVisits from './WholeVisits';
import SPVTable from './SPVTable';

export default class VisitInformation extends ControlBase {

    constructor() {
        super();
        this.state = {trimesterSelection: 'W1-13'};
        this.state = {trimesterClicked: 0};
    }

    trimisterClicked(index) {

        index = index - 1;
        this.setState({trimesterClicked: index});
    }

    childRender() {
        let trimesterContents = [
            {
                text: '',
                icon: 'patient/chart_icon.png'
            },
            {
                text: 'W1-13',
                value: 'W1-13',
                icon: 'patient/defaultCheck.png'
            },
            {
                text: 'W13-27',
                value: 'W13-27',
                icon: 'patient/defaultCheck.png'
            },
            {
                text: 'W28-39',
                value: 'W28-39',
                icon: 'patient/defaultCheck.png'
            },
            {
                text: 'Postnatal',
                value: 'Postnatal',
                icon: 'patient/defaultCheck.png'
            }
        ];
        let clickIndex = this.state.trimesterClicked;
        return (
            <div className="wrapper">
        	    <form>
        	     <WholeVisits></WholeVisits>
		         <ArrowedMenu onValueChanged={this.trimisterClicked.bind(this)} options={trimesterContents} valueLink={this.linkState(this.state, 'trimesterSelection')}></ArrowedMenu> 
                  <VisitsPerWeekRange trimesterClicked={clickIndex} ></VisitsPerWeekRange>
                  <SPVTable trimesterClicked={clickIndex} {...this.props}/>
                  <div><div className="mandatorySymbol"></div>Mandatory visit</div>
                  </form>
                 </div>
            );
    }
}