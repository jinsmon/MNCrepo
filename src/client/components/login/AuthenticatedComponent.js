import React from 'react';
import LoginStore from '../../stores/LoginStore';

export default (ComposedComponent) => {
    return class AuthenticatedComponent extends React.Component {

        componentWillMount() {           
            if (!LoginStore.isLoggedIn()) {
                this.props.history.replaceState(null, '/');
            }
        }


        constructor() {
            super();
            this.state = this._getLoginState();
        }

        _getLoginState() {
            return {
                userLoggedIn: LoginStore.isLoggedIn(),
                user: LoginStore.user,
                jwt: LoginStore.jwt
            };
        }

        componentDidMount() {
            this.changeListener = this._onChange.bind(this);
            LoginStore.addChangeListener(ActionType.LOGIN_USER, this._onChange.bind(this));
        }

        _onChange() {
            this.setState(this._getLoginState());
        }

        componentWillUnmount() {
            LoginStore.removeChangeListener(ActionType.LOGIN_USER, this.changeListener);
        }

        render() {
            return (
                <ComposedComponent
                {...this.props}
                user={this.state.user}
                jwt={this.state.jwt}
                userLoggedIn={this.state.userLoggedIn} />
                );
        }
        };
};
