import React from 'react';
let notificationWrapperId = 'toast-container';
/* React Notification Component */

let Toast = React.createClass({
	
    setUnmount(container) {		
        setTimeout(function() {
            let element = container;
            container.props.close(element);
        }, container.props.data.timeout);
    },
    componentDidMount() {
        this.setUnmount(this);
    },
    render() {
        let styles =  'toast toast-'+ this.props.data.type;	
        
        return (
            <div className={styles} id={this.props.data.id}  ref="container" >
            <div className="toast-message">
            {this.props.data.text}
            </div>
            </div>				
        );
    }
   
});

/* Export notification container */
export default class Notifications extends React.Component
{
	
	constructor()
	{
    super();
    this.state = {toasts : []};    
	}
	
	
	closeToast(toast)
	{	
		//Notify parent
    if(this.props.closeToast)
        this.props.closeToast(toast.props.data);
	}
		
	render() {			
    let toasts =[];
    for(var toast of this.props.toasts)
	{
        let children =	$.grep(this.state.toasts, function(i){ return i.props.data.id == toast.id;});
        if (!children || children.length == 0)
        {
            toasts.push(<Toast data={toast} close={this.closeToast.bind(this)} />);
        }
		else
		{
            toasts.push(children[0]);
        }
    }
    this.state.toasts = toasts;
    return (
				<div id={notificationWrapperId} className="toast-top-right" aria-live="polite" role="alert">					
				{this.state.toasts}
				</div>
		);
	}
	
}






