import React from 'react';
import LoginStore from './../../stores/LoginStore';

class LoginForm extends React.Component {

    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            role: '',
            language: 'en',
            errorSpan: ''
        };

        LoginStore.addChangeListener(ActionType.SUCCESS_LOGIN, this.handleSuccessLogin.bind(this));
    }

    handleSuccessLogin(data) {   
        this.props.history.pushState(null, data.args);
    }

    handleChange(event) {
        this.setState({role: event.target.value});
    }
    
    handleChangeLanguage(event) {
        this.setState({language: event.target.value});
    }

    usernameChanged(event) {
        this.setState({user: event.target.value});
    }

    passwordChanged(event) {
        this.setState({password: event.target.value});
    }

    showPassword(event) {
        event.preventDefault();
        var fieldType = document.getElementById('password');
        if (fieldType.type == 'password') {
            fieldType.type = 'text';
        } else {
            fieldType.type = 'password';
        }
    }

    validateLogin(event) {
        event.preventDefault();
        this.login(this);
    }

    login() {
        // window.location='#/app';
        AppAction.executeAction(ActionType.LOGIN_USER, {
            jwt: this.state
        });
    }

    render() {
        var loginStyle = {
            maxWidth: '332px',
            marginTop: '100px',
            background: '#FFF',
            border: 'solid #CFCFCF 5px',
            padding: '20px',
            borderRadius: '10px'
        };

        var errorStyle = {
            'font-size': '14px',
            color: 'red',
            textAlign: 'center'
        };

        var containerStyle = {
            width: '100%',
            height: '100%',
            background: '#DCDCDC'
        };

        var labelFont = {
            'font-size': '16px',
            'font-family': 'Century Gothic'
        };

        var passwordLabel = {
            'font-size': '14px',
            textAlign: 'center',
            opacity: '0.6'
        };

        var rememberPasswordLabel = {
            'font-size': '14px',
            opacity: '0.6',
            paddingLeft: '0px'
        };

        var btn = {
            height: '42px',
            backgroundColor: '#0098DB',
            fontSize: '19px',
            color: '#fff'
        };

        var checkbox = {width: '30px'};

        var inner_addon = {position: 'relative'};

        var innerPosition = {
            position: 'absolute',
            pointerEvents: 'none',
            padding: '35px 0px 0px 10px',
            left: '0px'
        };

        var showPassword = {
            paddingLeft: '20px',
            marginLeft: '248px',
            marginTop: '-61px',
            height: '31px',
            width: '15px',
            border: 'white'
        };

        var outerPosition = {
            position: 'absolute',
            pointerEvents: 'none',
            padding: '35px 0px 0px 257px',
            left: '0px'
        };

        var placeholderPosition = {paddingLeft: '35px'};

        var errorPanel = {height: '16px'};

        return (
            <div className="container" style={containerStyle}>
           <div className="login jumbotron center-block" style={loginStyle}>
              <div style={errorPanel}>
                 <span style={errorStyle}>{this.state.errorSpan}</span>
              </div>
               <label></label>
            <form role="form" style={labelFont}>
              <div className="form-group  left-addon" style={inner_addon}>
                  <label htmlFor="username" >Username</label>   
                   <i className="glyphicon glyphicon-user" style={innerPosition}></i>
                  <input type="text" className="form-control" id="username" value={this.state.user} placeholder="Username" ref="user" onChange={this.usernameChanged.bind(this)} style={placeholderPosition} />
                  <i className="glyphicon glyphicons-eye-open" ></i>
              </div>
          <div className="form-group left-addon" style={inner_addon}>
                  <label htmlFor="password">Password</label>
                  <i className="glyphicon glyphicon-lock" style={innerPosition}></i>
               <input type="password" className="form-control" id="password" ref="password"  value={this.state.password} placeholder="Password"  onChange={this.passwordChanged.bind(this)}  style={placeholderPosition}/>
              <button className="btn btn-default" style={showPassword} onClick={this.showPassword}><i className="glyphicon glyphicon-eye-open" style={outerPosition}></i></button>
          </div>
              <div className="form-group">
                  <label htmlFor="role">Role</label>
                  <select value={this.state.role}  className="form-control" id="role" ref="role" onChange={this.handleChange.bind(this)}>
                  <option value="" >Select Role</option>
                  <option value="medicalOfficer">Medical officer</option>
                  <option value="admin">Admin</option>
                  <option value="vhnUser">VHN User</option>
                </select>
              </div>
              <div className="form-group">
              <label htmlFor="language">Language</label>
              <select value={this.state.language}  className="form-control" id="language" ref="language" onChange={this.handleChangeLanguage.bind(this)}>
              <option value="en">English</option>
              <option value="ta">Tamil</option>
            </select>
          </div>
              <div>
            <input type="checkbox" id="checkbox" ref="checkbox" style={checkbox}/>  <span style={rememberPasswordLabel}>Remember Password?</span>
            </div><br/>
           <div className="form-group"><button type="submit" className="btn form-control" style={btn} onClick={this.validateLogin.bind(this)}>LOGIN</button> </div>
          <div className="form-group text-center" ><small> <span style={passwordLabel}>Forgot Password?</span><a href="#" id="forgot" name="forgot" htmlFor="forgotPassword" > Click Here</a></small><br/></div>
        </form>
         </div>
        </div>
            );
    }

}

module.exports = LoginForm;
