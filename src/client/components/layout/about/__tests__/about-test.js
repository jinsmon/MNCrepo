/*eslint no-unused-vars: 0*/
jest.dontMock('../about');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

const About = require('../about');

describe('About', () => {

    it('verifies about text', () => {

        // Render a checkbox with label in the document
        var about = TestUtils.renderIntoDocument(
            <About />
        );

        var aboutNode = ReactDOM.findDOMNode(about);

        // Verify that it's Off by default
        expect(aboutNode.textContent).toEqual('This is about page');
    });

});
