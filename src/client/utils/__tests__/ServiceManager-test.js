/*eslint no-unused-vars: 0*/
jest.dontMock('../ServiceManager');

import $ from 'jquery';

const ServiceManager = require('../ServiceManager');

describe('ServiceManager', () => {

    it('doGet returns a valid data on request', () => {

        var getResponse;

        var jsonGetInput = {
            url: 'http://demo3803178.mockable.io/sampleGet',
            headers: [{
                key: 'test1',
                value: 'abc'
            }, {
                key: 'test2',
                value: 'def'
            }],
            dataType: 'json',
            notifyError: true,
            timeout: 2000
        };

        // console.log('Inside Test');
        ServiceManager.doGet(jsonGetInput).then(function(response) {
            getResponse = response;
            // console.log('getResponse : ' + JSON.stringify(getResponse));
            expect(JSON.stringify(getResponse)).toEqual('{"msg":"hello world"}');
        });

        // Verify that it's Off by default

    });

    it('doGet returns a valid data if timeout is null', () => {

        var getResponse;

        var jsonGetInput = {
            url: 'http://demo3803178.mockable.io/sampleGet',
            headers: [{
                key: 'test1',
                value: 'abc'
            }, {
                key: 'test2',
                value: 'def'
            }],
            dataType: 'json',
            notifyError: true,
            timeout: null
        };

        // console.log('Inside Test');
        ServiceManager.doGet(jsonGetInput).then(function(response) {
            getResponse = response;
            // console.log('getResponse : ' + JSON.stringify(getResponse));
            expect(JSON.stringify(getResponse)).toEqual('{"msg":"hello world"}');
        });

        // Verify that it's Off by default

    });

    it('doGet returns a error when notifyError is false', () => {

        var getResponse;

        var jsonGetInput = {
            url: 'http://localhost:8080/TestReacthtml.html1',
            headers: [{
                key: 'test1',
                value: 'abc'
            }, {
                key: 'test2',
                value: 'def'
            }],
            dataType: 'json',
            notifyError: false,
            timeout: 2000
        };

        // console.log('Inside Test');
        ServiceManager.doGet(jsonGetInput).then(function(response) {
            // success 		
        }, function(error) {
            expect(JSON.stringify(error)).toEqual('{"readyState":4,"responseText":"","status":404,"statusText":"Not Found"}');
        });

        // Verify that it's Off by default

    });

    it('doPost returns a valid data on request', () => {

        var getResponse;

        var jsonPostInput = {
            url: 'http://demo3803178.mockable.io/samplePOST',
            headers: [{
                key: 'test1',
                value: 'abc'
            }, {
                key: 'test2',
                value: 'def'
            }],
            data: [{
                data1: 'one',
                data2: 'two'
            }, {
                data1: 'three',
                data2: 'four'
            }],
            dataType: 'json',
            notifyError: true,
            timeout: 2000
        };

        // console.log('Inside Test');
        ServiceManager.doGet(jsonPostInput).then(function(response) {
            getResponse = response;
            // console.log('getResponse : ' + JSON.stringify(getResponse));
            expect(JSON.stringify(getResponse)).toEqual('{"msg":"hello posted data"}');
        });

        // Verify that it's Off by default

    });

    it('doPost returns a valid data on request when timeout is null', () => {

        var getResponse;

        var jsonPostInput = {
            url: 'http://demo3803178.mockable.io/samplePOST',
            headers: [{
                key: 'test1',
                value: 'abc'
            }, {
                key: 'test2',
                value: 'def'
            }],
            data: [{
                data1: 'one',
                data2: 'two'
            }, {
                data1: 'three',
                data2: 'four'
            }],
            dataType: 'json',
            notifyError: true,
            timeout: null
        };

        // console.log('Inside Test');
        ServiceManager.doGet(jsonPostInput).then(function(response) {
            getResponse = response;
            // console.log('getResponse : ' + JSON.stringify(getResponse));
            expect(JSON.stringify(getResponse)).toEqual('{"msg":"hello posted data"}');
        });

        // Verify that it's Off by default

    });

    it('doPost returns a error when notifyError is false', () => {

        var getResponse;

        var jsonPostInput = {
            url: 'http://localhost:8080/TestReacthtml.html1',
            headers: [{
                key: 'test1',
                value: 'abc'
            }, {
                key: 'test2',
                value: 'def'
            }],
            data: [{
                data1: 'one',
                data2: 'two'
            }, {
                data1: 'three',
                data2: 'four'
            }],
            dataType: 'json',
            notifyError: false,
            timeout: 2000
        };

        // console.log('Inside Test');
        ServiceManager.doGet(jsonPostInput).then(function(response) {
            // success					
        }, function(error) {
            expect(JSON.stringify(getResponse)).toEqual('{"readyState":4,"responseText":"","status":404,"statusText":"Not Found"}');
        });

        // Verify that it's Off by default

    });

    it('doPost does not returns a error when notifyError is true', () => {

        var getResponse;

        var jsonPostInput = {
            url: 'http://localhost:8080/TestReacthtml.html1',
            headers: [{
                key: 'test1',
                value: 'abc'
            }, {
                key: 'test2',
                value: 'def'
            }],
            data: [{
                data1: 'one',
                data2: 'two'
            }, {
                data1: 'three',
                data2: 'four'
            }],
            dataType: 'json',
            notifyError: true,
            timeout: 2000
        };

        // console.log('Inside Test');
        ServiceManager.doGet(jsonPostInput).then(function(response) {
            // success					
        }, function(error) {
            expect(JSON.stringify(getResponse)).toEqual(null);
        });

        // Verify that it's Off by default

    });

});
