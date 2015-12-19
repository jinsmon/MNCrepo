import React from 'react';// eslint-disable-line  no-unused-vars
// import ReactMixin from 'react-mixin';
import Auth from '../services/AuthService';
import ControlBase from '../../../controls/ControlBase';
import Button from '../../../controls/ControlButton';

import {Input} from 'react-bootstrap';




export default class Login extends ControlBase {

    constructor() {
        super();
        this.state = {
            user: '',
            password: ''
        };
    }

    login(e) {        
        e.preventDefault();
        Auth.login(this.state.user, this.state.password, this.props)
            .catch(function(err) {
                alert('There\'s an error logging in'+err);              
            });
    }

    childRender() {
        return (
            <div className="login jumbotron center-block">
        <h1>Login</h1>
        <form role="form">
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <Input type="text" valueLink={this.linkState(this.state, 'user')} className="form-control" id="username" placeholder="Username" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <Input type="password" valueLink={this.linkState(this.state, 'password')} className="form-control" id="password" ref="password" placeholder="Password" />
        </div>        
        <Button btnstyle='success' bsSizestyle='small' value ='Save' onClick = {this.login.bind(this)}></Button>
      </form>
    </div>
            );
    }
}

// ReactMixin(Login.prototype, React.addons.LinkedStateMixin);
