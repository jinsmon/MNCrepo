import React from 'react';

export default class PregnancyStatus extends React.Component {

    constructor() {
        super();
    }

    getWeekNumber(date) {
        var dArray = date.split('/');

        var formatedDate1 = new Date(dArray[1] + '/' + dArray[0] + '/' + dArray[2]); // Converting MM/DD/YYYY Formate
        var formatedDate2 = new Date(); // fetching current date
        var ONE_WEEK = 1000 * 60 * 60 * 24 * 7;

        // Convert both dates to milliseconds
        var date1_ms = formatedDate1.getTime();
        var date2_ms = formatedDate2.getTime();
        // Calculate the difference in milliseconds
        var difference_ms = Math.abs(date1_ms - date2_ms);
        // Convert back to weeks and return hole weeks
        return Math.floor(difference_ms / ONE_WEEK);

    }


    render() {

        var mark = {
            backgroundColor: '#52931b',
            color: 'white'
        };

        var week = this.getWeekNumber(this.props.pregnancyStatus);
        if (week > 0 && week <= 12) {
            return (
                <div className="btn-toolbar btnToolBar" role="toolbar" aria-label="Toolbar with button groups">
                    <div className="btn-group btnGroup" role="group" aria-label="First group">
                      <button type="button" className="btn" style={mark}>W1-12</button>
                      <button type="button" className="btn btn-default" >W13-26</button>
                      <button type="button" className="btn btn-default">W27-40</button>
                    </div>
                  </div>
                );
        } else if (week > 12 && week <= 26) {
            return (
                <div className="btn-toolbar btnToolBar" role="toolbar" aria-label="Toolbar with button groups">
                  <div className="btn-group btnGroup" role="group" aria-label="First group">
                    <button type="button" className="btn" style={mark}>W1-12</button>
                    <button type="button" className="btn" style={mark}>W13-26</button>
                    <button type="button" className="btn btn-default">W27-40</button>
                  </div>
                </div>
                );
        } else if (week > 26 && week <= 40) {
            return (
                <div className="btn-toolbar btnToolBar" role="toolbar" aria-label="Toolbar with button groups">
                      <div className="btn-group btnGroup" role="group" aria-label="First group">
                        <button type="button" className="btn" style={mark}>W1-12</button>
                        <button type="button" className="btn" style={mark}>W13-26</button>
                        <button type="button" className="btn" style={mark}>W27-40</button>
                      </div>
                    </div>
                );
        } else {
            return (
                <div className="btn-toolbar btnToolBar" role="toolbar" aria-label="Toolbar with button groups">
                  <div className="btn-group btnGroup" role="group" aria-label="First group">
                    <button type="button" className="btn btn-default" >W1-12</button>
                    <button type="button" className="btn btn-default" >W13-26</button>
                    <button type="button" className="btn btn-default" >W27-40</button>
                  </div>
                </div>
                );
        }
    }
}
