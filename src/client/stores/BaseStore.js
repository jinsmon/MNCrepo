import {EventEmitter} from 'events';
import AppDispatcher from '../dispatcher/AppDispatcher';

export default class BaseStore extends EventEmitter {

    constructor() {
        super();
    }

    subscribe(actionSubscribe) {
        this._dispatchToken = AppDispatcher.register(actionSubscribe());
    }

    get dispatchToken() {
        return this._dispatchToken;
    }

    emitChange(title, args) {
        var data = {
            title: title,
            args: args
        };       
        this.emit(title, data);
    }

    addChangeListener(event, callback) {
        this.on(event, callback);
    }

    removeChangeListener(event, callback) {
        this.removeListener(event, callback);
    }


}
