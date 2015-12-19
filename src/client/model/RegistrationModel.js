var patientData = {
    name: 'Tina Malik',
    spouseName: 'Anu Malik',
    dOB: '12/03/1978',
    emergencyContactPhn: '01234567891',
    picmeID: 'PICME123',
    jananiID: 'JANANI123',
    nextDueDate: '12/12/2014',
    addrs1: 'Addr1',
    addrs2: 'Addr2',
    addrs3: '',
    village: 'villageValue',
    city: 'cityValue',
    state: 'stateValue',
    pincode: 'pincodeValue',
    temporaryAddrSameAsPermanent: 'Yes',
    isPregrnancyWanted: 'Yes',
    lmp: '11/11/2013',
    edd: '10/11/2013',
    Gravid: '111',
    Para: '222',
    LiveBirths: '666'
};

export default class RegistrationModel {

    static getPatientData() {
        return patientData;
    }
}