import React from 'react';




export default class NextVisitDate extends React.Component {

    constructor() {
        super();
    }


    render() {

        var btnStyle = {padding: '0px 4px 0px 7px'};

        return (

            <div>  
         
             <a style={btnStyle} onClick={function() {
                 Utils.navigate(this.props.history, Route.SINGLE_PATIENT_VIEW + '/' + '2');
             }.bind(this)}>
             <i className="glyphicon glyphicon-collapse-up"></i>
             </a>
        </div>

            );
    }

}
