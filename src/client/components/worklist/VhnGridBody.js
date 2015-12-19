import React from 'react';
import PregnancyStatus from './PregnancyStatus';
import NextVisitDate from './NextVisitDate';



export default class GridBody extends React.Component {
    constructor() {
        super();
    }

    render() {
        var rows = [];
        var alt = false;
        this.props.tableContents.forEach(function(rowContent) {
            rowContent['alt'] = alt;
            rows.push(<WorkListRow rowContent={rowContent}   key={rowContent.patientId} {...this.props} />);
            alt = !alt;
        }.bind(this));
        return (
            <tbody>{rows}</tbody>
            );
    }
}

class WorkListRow extends React.Component {
    constructor() {
        super();
    }

    render() {
        var gridJson = this.props.rowContent;
        var altColor = {backgroundColor: '#f5f5f5'};
        if (gridJson.alt) {
            return (
                <tr style={altColor}>
             <td>{gridJson.name}</td>
             <td>{gridJson.spouseName}</td>
             <td>{gridJson.age}</td>
             <td>{gridJson.emergencyContactPhn}</td>
             <td>
              <PregnancyStatus pregnancyStatus={gridJson.pregStatus}/>
              </td>
             <td>{gridJson.obstetrics}</td>
             <td></td>
             <td>{gridJson.nextVisitDate}</td>
             <td> <NextVisitDate visitDate={gridJson.nextVisitDate} {...this.props} patientId={gridJson.patientId}  /></td>
          </tr>
                );
        } else {
            return (
                <tr>
             <td>{gridJson.name}</td>
             <td>{gridJson.spouseName}</td>
             <td>{gridJson.age}</td>
             <td>{gridJson.emergencyContactPhn}</td>
             <td>
              <PregnancyStatus pregnancyStatus={gridJson.pregStatus}/>
              </td>
             <td>{gridJson.obstetrics}</td>
             <td></td>
             <td>{gridJson.nextVisitDate}</td>
             <td> <NextVisitDate visitDate={gridJson.nextVisitDate} {...this.props} patientId={gridJson.patientId}  /></td>
          </tr>
                );
        }

    }

}
