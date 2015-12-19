/*eslint no-mixed-spaces-and-tabs:0*/
/*eslint no-unused-vars: 0*/

import React from 'react';
import ControlBase from './../controls/ControlBase';

import Menu from './DeveloperMenu';
import NotificationManager from '../utils/NotificationManager';

export default class Developer extends ControlBase {


    constructor() {
        super();

        this.setState({required: false});
    }
    componentDidMount() {
        window.toast = this.refs.notify;
    }
    render() {
        return (
            <div>
            <NotificationManager ref='notify'  />
            <Menu />
           { this.props.children}
                            </div>
            );
    }

}
