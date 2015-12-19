import React from 'react';
import {Nav, NavDropdown, MenuItem} from 'react-bootstrap';
var logInfo = {
    marginRight: '69px',
    marginTop: '-30px',
    'float': 'right',
    marginLeft: '62px'
};
var welText = {
    fontFamily: 'GEInspira',
    fontSize: '10px',
    marginTop: '42px',
    marginLeft: '-17px',
    color: '#575757'
};
var welName = {
    fontFamily: 'GEInspira',
    fontSize: '17px',
    marginTop: '-14px',
    marginLeft: '-18px',
    color: '#8d8d8d',
    paddingRight: '1px'
};
var imgSpec = {
    position: 'absolute',
    marginTop: '44px',
    marginLeft: '-54px'
};
/*var standAloneDrop = {
    position: 'absolute',
    marginLeft: '402px',
    marginTop: '14px',
    color: 'black'
};*/
var dropHeader = {
    'float': 'right',
    marginTop: '-18px',
    marginRight: '48px',
    fontFamily: 'GEInspira',
    fontSize: '15px',
    color: '#000000'

};
var dropHeaderLog = {
    float: 'right',
    marginTop: '-18px',
    marginRight: '54px',
    fontFamily: 'GEInspira',
    fontSize: '15px',
    color: '#000000'
};
var menuStyle = {
    borderBottom: 'solid 1px #F8F8F8',
    marginBottom: '-5px'

};
var arrowUp = {
    width: '0',
    marginTop: '-13px',
    marginLeft: '111px',
    height: '0',
    borderLeft: '8px solid transparent',
    borderRight: ' 8px solid transparent',
    borderBottom: '8px solid #fff'
};


class Menu extends React.Component {
    render() {
        return (
            <Nav bsStyle="pills"> 
                    <div style={logInfo}><img src={'./common/default-pro.png'} style={imgSpec}  className="img-responsive"/>
                        <div>
                            <p style={welText}>{locale('WELCOME')}</p> 
                            <div style={welName}>{this.props.user}</div>
                        </div>
                    </div>
                   <NavDropdown  title='' pullRight className='dropDown' onSelect={ this.OnSelected } >
                   <div style={arrowUp}></div>
                     <MenuItem style={menuStyle} href='#/' style={menuStyle} eventKey="1"><img src={'./common/settings.png'} className="img-responsive"/><span style={dropHeader}>{locale('Settings')}</span> </MenuItem>   
                     <MenuItem style={menuStyle} href='#/' style={menuStyle} eventKey="2"><img src={'./common/logout.png'} className="img-responsive paddLeft"/><span style={dropHeaderLog}>{locale('Logout')}</span></MenuItem>
                 </NavDropdown>	
        </Nav>
            );
    }
}

module.exports = Menu;