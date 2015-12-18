import React from 'react';
import NotificationManager from '../utils/NotificationManager';
import AppHeader from './layout/header/AppHeader';
var ScrollDesign={
    'height':'978px',
    'background-color': '#f5f5f5'
};
class App extends React.Component {
    componentDidMount() {
        window.toast = this.refs.notify;
    }
    render() {
        return (
            <div style={ScrollDesign}>
                <AppHeader {...this.props}/>
                <NotificationManager ref='notify'  />
                <div className="container-fluid">
                    {this.props.children}
                </div>       
            </div>
            );
    }
}

module.exports = App;


