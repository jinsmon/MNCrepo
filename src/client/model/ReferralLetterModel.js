var refferalLetterData = {
    name : 'Name1',
    spouseName: 'James',
    age:28,
    emergencyContactPhone:'9987123456',
    bloodGroup :'A+',
    patientId : '1',
    picmeId :'25678',
    subCenterName :'Name1',
    phcName : 'phc_Name',
    referredTo : 'Refferred_Name',
    reasonForReferral :'',
    referredOn :'12/10/2015',
    modeOfTransport :'108',
    CurrentMedication :'',
    OnformationOnReferral: '',
    patientConsent:'Yes'

};
export default class ReferralLetterModel {

    static getReferLetterData() {
        return refferalLetterData;
    }
}
