/*eslint no-mixed-spaces-and-tabs:0*/
import BaseStore from './BaseStore';
// import jwt_decode from 'jwt-decode';


class LoginStore extends BaseStore {

    constructor() {
        super();
        this.subscribe(() => this._registerToActions.bind(this));
        this._user = null;
        this._role = null;
        this._language = null;
        this._jwt = null;
    }

    _registerToActions(action) {
        switch (action.type) {
        case ActionType.LOGIN_USER:
            this._user = action.data.jwt.user;
            this._role = action.data.jwt.role;
            if (this._role == 'admin') {
                this.emitChange(ActionType.SUCCESS_LOGIN, '/app/MOWorkList');
            } else if (this._role == 'medicalOfficer') {
                this.emitChange(ActionType.SUCCESS_LOGIN, '/app/MOWorkList');
            } else if (this._role == 'vhnUser') {
                this.emitChange(ActionType.SUCCESS_LOGIN, '/app/VHNWorkList');
            } else {
                this.emitChange();
            }

            lm.setLanguage(action.data.jwt.language);

            break;
        case ActionType.LOGOUT_USER:
            this._user = null;
            this.emitChange();
            break;
        default:
            break;
        }
    }

    get user() {
        return this._user;
    }

    get jwt() {
        return this._jwt;
    }

    isLoggedIn() {
        return !!this._user;
    }
}

export default new LoginStore();