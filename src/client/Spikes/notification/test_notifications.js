import React from 'react';

class NotificationView extends React.Component {
    render() {
        return (<div>
        <button onClick={function () {toast.show('success message','success');}}>Success</button>
        <button onClick={function() {toast.show('error message','error');}}>Error</button>
        <button onClick={function() {toast.show('warning message','warning');}}>Warning</button>
        <button onClick={function() {toast.show('information','info');}}>Info</button>
        </div>);
    }
}

module.exports = NotificationView;