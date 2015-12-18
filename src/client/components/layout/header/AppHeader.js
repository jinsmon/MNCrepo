import React from 'react';
import Menu from './../../../components/layout/menu/topMenu';
import AuthenticatedComponent from './../../login/AuthenticatedComponent';

var StyleHeader = {
    height: '73px',
    backgroundColor: 'black',
    border: '1px solid black',    
    width: '100%'
};
var appName = {
    color: '#fff',
    paddingLeft: '9px',
    paddingTop: '11px',
    fontSize: '28px',
    fontWeight: 'bold',
    fontFamily: 'GEInspira'
};
var imgHeader = {
    marginLeft: '21px',
    marginTop: '10px'
};
var rightNav = {
    marginTop: '-49px',
    'float': 'right',
    width: '473px'
};

export default AuthenticatedComponent(class AppHeader extends React.Component {
render() {
    return (
        <div>
            <div className="col-12" style={StyleHeader}>
            <table>
            <tbody>
            <tr>
            <td style={imgHeader}><img src={'./common/logo.png'} style={imgHeader} className="img-responsive "/></td>
            <td style={appName} className="header">{locale(AppConstants.APP_NAME)}</td>
            </tr>
            </tbody> 
            </table>
            <div>
            </div>
            <div style={rightNav}><Menu {...this.props}/></div>
            </div>
         
            </div>
        );
}
}
);




