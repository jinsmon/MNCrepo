/*eslint no-mixed-spaces-and-tabs:0*/
/*eslint no-unused-vars: 0*/
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route} from 'react-router';

import App from './components/app';
import VhnWorklist from './components/worklist/vhnWorklist';
import MoWorklist from './components/worklist/MoWorklist';
import About from './components/layout/about/about';
import MenuTest from './Spikes/menu/menu_test';
import NotificationView from './Spikes/notification/test_notifications';
import Banner from './components/layout/container/patientContainer';
import Registration from './components/registration/Registration';
import Visit from './components/visit/visitPage';
import BidirectionalBinding from './Spikes/bidirectional_binding/BindingExample';
import LabelTest from './Spikes/LabelTest';
import DatabindingControls from './Spikes/DatabindingControls';
import AuthLogin from './Spikes/login_auth/components/Login';
import AuthenticatedApp from './Spikes/login_auth/components/AuthenticatedApp';
import Home from './Spikes/login_auth/components/Home';
import Login from './components/login/Login';
import VisitSummary from './components/visit-summary/VisitSummary';
import Localization from './Spikes/Localization/TestLocalization';
import Developer from './Spikes/Developer';
import ImportPICME from './Spikes/PICME/ImportPICME.js';
import ReferralLetter from './components/referral/ReferralLetter';
import SinglePatientView from './components/single-patient/SinglePatientView';
import AlertTest from './Spikes/alert/AlertTest';
import SPVTable from './Spikes/singlePatientView/SPVTable.js';
module.exports = (
    <Router>
                   <Route component={AuthenticatedApp}>
                   	<Route path="login" component={AuthLogin}/>    
                   	<Route path="home"  component={Home}/>                   	               
                   </Route>
                     <Route path="/" component={Login}/>
      				        <Route path="/app" component={App}>
                            <Route path="VHNWorkList" component={VhnWorklist} />
                            <Route path="MOWorkList" component={MoWorklist} />
        				            <Route path="about" component={About} />
        				         
        				            <Route path="Patient/:id/Visit/:id" component={Visit} />
        				            <Route path="Registration/:id" component={Registration} />
                            <Route path="SinglePatientView/:id" component={SinglePatientView} />        
                              <Route path="ReferralLetter/:id" component={ReferralLetter} />	    	
                            <Route path="VisitSummary/:id" component={VisitSummary} />
                            </Route>

        				            	
        				            <Route path="Developer" component={Developer}>
	    					            <Route path="DevPage1" component={null} />
	    					            <Route path="Menu" component={MenuTest} />
	    					            <Route path="Notifications" component={NotificationView} />
	    					            <Route path="banner" component={Banner} />
	    					            <Route path="Patient" component={Registration} />
				                        <Route path="Visit" component={Visit} />
	    					            <Route path="BidirectionalBinding" component={BidirectionalBinding} />
	    					            <Route path="LabelTest" component={LabelTest} />
	    					            <Route path="DatabindingControls" component={DatabindingControls} />
	    					            <Route path="Login" component={AuthLogin} />
	                                    <Route path="VisitSummary" component={VisitSummary} />
										<Route path="Localization" component={Localization} />
	    					            <Route path="ImportPICME" component={ImportPICME} />
	    					            <Route path="ReferralLetter" component={ReferralLetter} />	    					            
	    					            <Route path="SinglePatientView" component={SinglePatientView} />
	    					            <Route path="AlertTest" component={AlertTest} />
										<Route path="SPVTable" component={SPVTable} />
	    					            </Route>
				    </Router>
);
