var patientData ={
    'Patient': 'Patient_1',
    'PatientDetails': {
        'Name': 'Devaki Amma',
        'SpouseName': 'Shiva Kumar',
        'ContactDetails': '+91 9454789320',
        'Age': '37 yrs',
        'BloodGroup': 'B+ve',
        'pregnancyIndicator': {'options' :[{text: 'W1-12',value: 'W1-12'},
                                           {text: 'W13-27',value: 'W13-27'},
                                           {text: 'W28-40',value: 'W28-40'}],
                                'value' : 'W1-12'},
        'Obstetrics': 'G2OAPOL1'
    }
	};


export default class PatientModel {

    static getPatientData() {
        return patientData;
    }
}