/*eslint no-unused-vars: 0*/
jest.dontMock('../NotificationManager');
jest.dontMock('../../components/layout/notification/ToasterCreator');
jest.dontMock('../framework/Localizer');
jest.dontMock('../framework/LocalizerManager');


import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';


const GlobalWindowManager = require('../../utils/GlobalWindowManager');



const NotificationManager = require('../NotificationManager');
describe('NotificationManager', () => {

    it('verifies notofication', () => {
        var notify = TestUtils.renderIntoDocument(
        <NotificationManager />
        );
        notify.show('success message','success');
        var notifyNode = ReactDOM.findDOMNode(notify);
        expect(notifyNode.textContent).toEqual('success message');
    });

});
