var visitData = {
    patientId: 'pat1223',
    firstName: 'Bandesh',
    middleName: 'N',
    lastName: 'Kharnar',
    age: '29',
    RiskProfilingIcons: 'HighRiskMedicalConditionMother',
    bloodGroup: 'B+',
    GPAL_Score: '5',
    GestationAgeOf_CurrentPregnancy: '8 weeks',
    AbdominalExamination: {
        InspectationOfScars: 'No relevant scars',
        FundalHeightInCMS: '4',
        FundalHeightInWeeks: '8',
        FoetalLie: 'Oblique',
        Foetalpresentation: 'Shoulder',
        FHS: '120',
        SingleVsMultiplePregnancy: 'Single',
        FoetalMovements: true
    },

    Allergies: {
        isDrug: true,
        isFood: true,
        isEnv: true,
        drugAllergyDetail: 'Rantac',
        foodAllergyDetail: 'Allergic to Egg',
        envAllergyDetail: 'Dust Allergy'
    },
    BreastExamination: {
        LeftBreast: {
            Normal: true,
            RetractedNipple: true,
            Nodule: false,
            Lump: false,
            Scar: false
        },
        RightBreast: {
            Normal: false,
            RetractedNipple: false,
            Nodule: true,
            Lump: true,
            Scar: false
        }

    },
    CurrentIllnessHistory: {
        Nausea: false,
        Vomiting: false,
        Heartburn: true,
        Constipation: false,
        IncreasedFrequencyOfUrination: false,
        Fever: false,
        PersistentVomiting: false,
        AbnormalVaginalDischarge_itching: false,
        PalpitationsEasyFatigability: false,
        Breathlessness: false,
        GeneralisedSwellingOfTheBody_PuffinessOfTheFace: false,
        SevereHeadacheAndBlurringOfVision: false,
        PassingSmallerAmountsOfUrineAndBurningSensationDuringMicturition: false,
        VaginalBleeding: false,
        LeakingOfWateryFluidPerVaginum_PV: false
    },
    CurrentPregnancy: {
        PregnancyWanted: true,
        LMP: '2015-01-01',
        EDD: '2015-10-07',
        EDD_USG: '2015-10-10'
    },
    FamilyHistory: {
        Highbloodpressurehypertension: false,
        Diabetes: true,
        Tuberculosis: false,
        TwinsinimmediateFamily: true,
        CongeniatlMalfomationsinimmediatefamily: true
    },
    GeneralExamination: {
        Height: '150',
        Weight: '60',
        Pallor: true,
        Jaundice: true,
        Pulse: false,
        RespiratoryRate: '120',
        Oedema: false,
        BloodPressure1: '90',
        BloodPressure2: '120',
        TemperatureInFarenheit: '40',
        TooWeak: true
    },
    HabbitsSocialHistory: {
        Tobacco: true,
        Smoking: true,
        Drugs: true,
        Alcohol: false
    },
    MenstrualHistory: {
        Regularity: false,
        Frequencyinnumberofdays: '2',
        Numberofdaysofbleed: '4',
        AgeatMenarche: '13',
        PainassociatedwithPeriods: true
    },
    ObstetricHistory: {
        Gravid: '111',
        Para: '222',
        LiveBirths: '666',
        RecurrentEarlyAbortion: false,
        Post_abortionComplications: false,
        Hypertension_preeclampsia_eclampsia: true,
        AntePartumHaemorrhage_APH: false,
        Breech_TransversePresentation: false,
        ObstructedLabour_IncludingDystocia: true,
        PerinealInjuries_tears: false,
        ExcessiveBleedingAfterDelivery: false,
        PuerperalSepsis: false,
        BloodTransfusionDuringPreviousPregnancies: false,
        StillbirthOrNeonatalLoss: false,
        ThreeOrMoreSpontaneousConsecutiveAbortions: false,
        ObstructedLabour: true,
        PrematureBirths_twins_multiplePregnancies: false,
        WeightOfThePreviousBaby: false,
        AdmissionFoHypertensionOrPreEclampsia_eclampsiaInThePreviousPregnancy: false,
        SurgeryOnTheReproductiveTract: false,
        CongenitalAnomaly: false,
        TreatmentForInfertility: false,
        SpinalDeformitiesSuchAs_Acoliosis_kyphosis_polio: false,
        Rh_negative_inThePreviousPregnancy: false
    },
    PastMedicalHistory: {
        HighBloodPressure_hypertension: true,
        BP_OnMedication: true,
        Diabetes: false,
        Diabetes_OnMedication:false,
        Breathlessness_on_exertion_palpitations_HeartDisease: false,
        Breathlessness_OnMedication: false,
        RenalDisease: false,
        Renaldisease_OnMedication:false,
        Convulsions_epilepsy: false,
        Convulsions_OnMedication:false,
        Attacksofbreathlessness_asthma: false,
        Asthama_OnMedication:false,
        Jaundice: true,
        Jaundice_OnMedication:true,
        Malaria: true,
        Malaria_OnMedication:true,
        ReproductiveTractInfection_RTI: false,
        RTI_OnMedication:false,
        SexuallyTransmittedInfection_STI_and_HIV_AIDS: true,
        STI_AIDS_OnMedication:false
    },
    SystemicExamination: {
        NormalCardiovascularySystem: true,
        NormalNervousSystem: true,
        NormalDigestiveSystem: false,
        NormalMusculoskeltalSystem: true,
        NormalCardiovascularySystem_Details: 'Irregular cardilogy',
        NormalNervousSystem_Details: 'Nervous system irregular',
        NormalDigestiveSystem_Details: '',
        NormalMusculoskeltalSystem_Details: 'Irregular Musculoskeltal'
    },
    LabOrder: {
        BloodGroup_including_RhFactor: true,
        VDRL_RPR: false,
        HIV_testing: true,
        Rapid_Malaria_Test: true,
        BloodSugar: true,
        HbsAg: false,
        CBC_with_ESR: true,
        PeripheralSmear: false
    },
    LabResults: {
        UPT: 'Positive',
        Hb: 'Present',
        UrineSugar: false,
        UrineProteins: true,
        RapidMalariaTest: 'Negative'
    },
    MedicalPrescriptions: {
        Inj_TT_IM: true,
        FolicAcidSuppliment_IFA: false,
        Counselling: true,
        Issue_MaternalChildProtectionCard: true,
        JSYCard: true,
        BPLCard: false,
        RecordPossibleLocationOfDelivery: 'PHC Name'
    },
    Comments: {
        GeneralComments: 'Mother with premature baby history',
        IncidentCapture: 'Prescriptions , photos , Scans , Allergies etc',
        Attachements: ''
    }
};


export default class VisitModel {
    static getVisitData() {
        return visitData;
    }
}