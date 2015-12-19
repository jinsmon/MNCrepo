var visitSummaryData = {
    type: 'ANC Visit1',
    dateOfVisit: '12/11/2015',
    subCenterName: 'Aadhanoor',
    PHCName: 'Aadhanoor',
    VHNName: 'Janaki',
    PatientInfo: {
        name : 'Devki',
        spouseName : 'Shiv Kumar',
        age : 27,
        contactNumber : 9875645444,
        BG : 'B+',
        PregnancyStatus : 'W1-12',
        Obstetrics : 'GALP01D',
        Risk : 'High'
    },
 
    Allergies: {
        isFood: 'Yes',
        isEnv: 'Yes'
    },
    CurrentIllnessHistory: {
        Vomiting: 'Yes',
        LeakingOfWateryFluidPerVaginum_PV: 'Yes'
    },
    CurrentPregnancy: {
        PregnancyWanted: 'Yes'
    },
    ObstetricHistory: {
        TreatmentForInfertility: 'Yes',
        SpinalDeformitiesSuchAs_Acoliosis_kyphosis_polio: 'Yes'
    },
    PastMedicalHistory: {
        HighBloodPressure_hypertension: 'Yes'
    },
    SystemicExamination: {
        NormalNervousSystem: 'Yes'
    },
    ExaminationNotes : 'Patient reports for 1st visit pregnancy',
    RecordedMedicationDetails : 'Tablets given',
    Notes : '<VHN or PHC worker provide the comments before printing the page>'
};


export default class VisitSummaryModel {
    static getVisitSummaryData() {
        return visitSummaryData;
    }
}