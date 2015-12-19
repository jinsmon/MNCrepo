import AppDispatcher from '../dispatchers/AppDispatcher.js';
import {LOGIN_USER} from '../constants/LoginConstants.js';
//import RouterContainer from '../services/RouterContainer';

export default {
    loginUser: (jwt, props) => {       
        AppDispatcher.dispatch({
            actionType: LOGIN_USER,
            jwt: jwt
        });      
        props.history.replaceState({}, '/home');
    },
    logoutUser: () => {
        /*RouterContainer.get().transitionTo('/login');
        localStorage.removeItem('jwt');
        AppDispatcher.dispatch({actionType: LOGOUT_USER});*/
    }
};
