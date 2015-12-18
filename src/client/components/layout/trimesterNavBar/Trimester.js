/*eslint no-mixed-spaces-and-tabs:0*/
/*eslint no-unused-vars: 0*/
import React from 'react';
import ControlBase from './../../../controls/ControlBase';

/*var visitSummaryModel=[{'type':'W1-13', 'values':{}},
                           {'type':'W14-28', 'values':{}},
                           {'type':'W29-39', 'values':{}}
                                  ];*/

class TrimesterBar extends ControlBase {

    clicked() {}

    render() {
        // var TrimesterData = this.visitSummaryModel.type;

        let controlLinkState = this.controlLinkState();
        ////console.log(controlLinkState);
        let controls = [];
        this.props.options.forEach(function(i) {
            //console.log(i);
            let className = 'btn ' + (i.value == controlLinkState.value ? 'breadcrumbSelect' : 'btn-breadcrumb');
            //console.log(className);
            let glyphicon = 'glyphicon ' + (i.glyphicon ? i.glyphicon : '');

            controls.push(<a href="#" className={className}><i className={glyphicon} ></i>{i.text}</a>);

        });

        return (

            <div>
                                         <div className="btn-group btn-breadcrumb">
                                                {controls}
                                         </div>
                           </div>

            );
    }
}
module.exports = TrimesterBar;
