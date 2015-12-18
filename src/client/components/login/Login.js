import React from 'react';
import LoginHeader from '../layout/header/LoginHeader';
import LoginForm from './LoginForm';

class Login extends React.Component {

    render() {
        return (
            <div>
                <LoginHeader/>
                <LoginForm {...this.props}/>
            </div>
        );
    }

}

module.exports = Login;
