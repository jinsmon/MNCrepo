import React from 'react';


var StyleHeader = {
    height:'65px',
    'backgroundColor':'black',
    border: '1px solid black'
};
var appName = {
    'color':'#fff',
    'paddingLeft': '9px',
    'paddingTop': '11px',
    'fontSize':'21px'
	};
var imgHeader={
    'marginLeft':'21px',
    'marginTop':'10px'
};

class loginHeader extends React.Component {
    render() {
        return (
            <div>
            <div class="col-12" style={StyleHeader}>
            <table>
            <tbody>
            <tr>
            <td style={imgHeader}><img src={'http://www.aaimh.org/wp-content/uploads/2013/08/mother-child-widget-icon.png'} width="45" height="45" style={imgHeader} className="img-responsive "/></td>
            <td style={appName} className="header">{AppConstants.APP_NAME}</td>
            </tr>
            </tbody>
            </table>
            <div>
            </div>
            </div>
            </div>
            );
    }
}
module.exports = loginHeader;
