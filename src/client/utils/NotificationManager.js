import React from 'react';
import Notifications from '../components/layout/notification/ToasterCreator';
class NotificationManager extends React.Component{


	constructor()
	{
    super();
    this.state = {alerts:[]}	;    
	}
	
	render()
	{	
    return   ( <Notifications toasts={ this.state.alerts} closeToast={this.closeToast.bind(this)} />);
	}
	
	show(message,type) {     
    this.state.alerts.push({text:message,type:type,timeout:3000,id:this.state.alerts.length.toString()}) ;    
    this.forceUpdate();
 
}
	
	closeToast(data)
	{
    this.state.alerts.splice(this.state.alerts.indexOf(data), 1);
    this.forceUpdate();
	}
}
module.exports = NotificationManager;	