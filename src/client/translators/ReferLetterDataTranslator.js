export default class ReferLetterDataTranslator {

    static populateReferLetterData(obj) {
        return {
            name: obj ? obj.name : '',
            spouseName: obj ? obj.spouseName : '',
            age: obj ? Utils.findAge(obj.dOB) : '', // obj?Utils.convertDateFormatForView(obj.dOB):'',
            emergencyContactPhn: obj ? obj.emergencyContactPhn : '',
            bloodGroup: obj ? obj.bloodGroup : '',
            patientId: obj ? obj.patientId : '',
            picmeID: obj ? obj.picmeID : '',
            subCentreName: obj ? obj.subCentreName : '',
            phcName: 'phc_Name',
            referredTo: '',
            reasonForReferral: '',
            referredOn: '',
            modeOfTransport: '',
            CurrentMedication: '',
            OnformationOnReferral: '',
            patientConsent: ''

        };
    }


}