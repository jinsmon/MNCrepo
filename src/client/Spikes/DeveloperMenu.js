import React from 'react';
import {Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';


class Menu extends React.Component {
    render() {
        return (
            <Nav bsStyle="pills">
                    <NavItem href="#/Developer/visit/">Visit</NavItem>
                    <NavItem href="#/Developer/Patient/">Registration</NavItem>
                    <NavDropdown title='Developer'>
                        <MenuItem href='#/Developer/Menu'>Menu</MenuItem>
                        <MenuItem href='#/Developer/Patient/'>Registration</MenuItem>
                        <MenuItem href='#/Developer/Notifications'>Notifications</MenuItem>
                        <MenuItem href='#/Developer/banner'>banner</MenuItem>
                        <MenuItem href='#/Developer/visit/'>visit</MenuItem>
                        <MenuItem href='#/Developer/BidirectionalBinding'>BidirectionalBinding</MenuItem>
                        <MenuItem href='#/Developer/LabelTest'>LabelTest</MenuItem>
                        <MenuItem href='#/Developer/DatabindingControls'>DatabindingControls</MenuItem>
                        <MenuItem href='#/Developer/Login'>Login</MenuItem>
                        <MenuItem href='#/Developer/VisitSummary'>VisitSummary</MenuItem>
                        <MenuItem href='#/Developer/Localization'>Localization</MenuItem>
                        <MenuItem href='#/Developer/ImportPICME'>ImportPICME</MenuItem>
                        <MenuItem href='#/Developer/ReferralLetter'>ReferralLetter</MenuItem>
                        <MenuItem href='#/Developer/SinglePatientView'>SinglePatientView</MenuItem>
                        <MenuItem href='#/Developer/AlertTest'>AlertTest</MenuItem>
						<MenuItem href='#/Developer/SPVTable'>SPVTable</MenuItem>
                        </NavDropdown>                     
            </Nav>

            );
    }
}

module.exports = Menu;






