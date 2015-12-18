/*eslint no-unused-vars: 0*/
jest.dontMock('../PatientBanner');
jest.dontMock('../../../../controls/StageIndicator');
jest.dontMock('../../../../controls/ControlBase');
jest.dontMock('../../../../controls/LabeledControl');
jest.dontMock('../../../../utils/framework/Localizer');
jest.dontMock('../../../../utils/framework/LocalizerManager');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

const GlobalWindowManager = require('../../../../utils/GlobalWindowManager');
const PatientBanner = require('../PatientBanner');
var jsonData = {

    name: 'Tina',
    spouseName: 'James',
    dOB: '01/01/1978',
    emergencyContactPhn: '9987123456',
    picmeID: 'PICME1234',
    jananiID: 'JANANI1234',
    nextDueDate: '01/02/2016',
    addrs1: 'Addr11',
    addrs2: 'Addr21',
    addrs3: 'Addr31',
    village: 'villageValue1',
    city: 'cityValue1',
    state: 'stateValue1',
    pincode: 'pincodeValue1',
    temporaryAddrSameAsPermanent: 'No',
    isPregrnancyWanted: 'No',
    lmp: '01/01/2015',
    edd: '01/03/2015',
    subCentreID: '3',
    subCentreName: 'Aastha',
    vhnName: 'Dr Jayesh',
    bloodGroup: 'B-',
    highRiskMother: 'No',
    highRiskMotherComments: 'No she is high risk',
    obstetrics: 'GPAL1',
    Risk: 'High'

};

describe('PatientBanner', () => {
    it('verifies patient Banner', () => {
        var aboutPatient = TestUtils.renderIntoDocument(
            <PatientBanner patientData={jsonData}/>
        );

        let contentLabel = TestUtils.scryRenderedDOMComponentsWithTag(aboutPatient, 'label');
        let contentValue = TestUtils.scryRenderedDOMComponentsWithTag(aboutPatient, 'span');
        expect(ReactDOM.findDOMNode(contentLabel[0]).textContent).toEqual('Name');
        // expect(ReactDOM.findDOMNode(contentValue[0]).textContent).toEqual(jsonData['name']);

        expect(ReactDOM.findDOMNode(contentLabel[1]).textContent).toEqual('Age');
        // expect(ReactDOM.findDOMNode(contentValue[1]).textContent).toEqual(jsonData['']);

        expect(ReactDOM.findDOMNode(contentLabel[2]).textContent).toEqual('Contact No');
        // expect(ReactDOM.findDOMNode(contentValue[2]).textContent).toEqual(jsonData['emergencyContactPhn']);

        expect(ReactDOM.findDOMNode(contentLabel[3]).textContent).toEqual('Spouse');
        // expect(ReactDOM.findDOMNode(contentValue[3]).textContent).toEqual(jsonData['spouseName']);

        expect(ReactDOM.findDOMNode(contentLabel[4]).textContent).toEqual('Obsterics');
        // expect(ReactDOM.findDOMNode(contentValue[4]).textContent).toEqual(jsonData['obstetrics']);

        expect(ReactDOM.findDOMNode(contentLabel[5]).textContent).toEqual('Risk');
        // expect(ReactDOM.findDOMNode(contentValue[5]).textContent).toEqual(jsonData['Risk']);

        expect(ReactDOM.findDOMNode(contentLabel[6]).textContent).toEqual('Blood Group');
        // expect(ReactDOM.findDOMNode(contentValue[5]).textContent).toEqual(jsonData['bloodGroup']);

        expect(ReactDOM.findDOMNode(contentLabel[7]).textContent).toEqual('PICME ID');
        // expect(ReactDOM.findDOMNode(contentValue[5]).textContent).toEqual(jsonData['picmeID']);

        expect(ReactDOM.findDOMNode(contentLabel[8]).textContent).toEqual('Janani ID');
        // expect(ReactDOM.findDOMNode(contentValue[5]).textContent).toEqual(jsonData['jananiID']);
    });
});