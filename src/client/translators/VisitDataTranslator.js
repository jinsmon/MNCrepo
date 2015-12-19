
class VisitDataTranslator {

    static getDataModelForView(visitData) {

        var visitInfo = {

            AbdominalExamination: {
                InspectationOfScars: visitData.abdominalFindings,
                FundalHeightInCMS: visitData.fundalHeight,
                FundalHeightInWeeks: visitData.fundalHeightWeeks,
                FoetalLie: visitData.foetalLie,
                Foetalpresentation: visitData.foetalPresentation,
                FHS: visitData.foetalHeartRate,
                SingleVsMultiplePregnancy: visitData.singleVsMultiplePrgncy,
                FoetalMovements: bool(visitData.isFoetalMovements)
            },

            Allergies: {
                isDrug: bool(visitData.isDrugAllergies),
                isFood: bool(visitData.isFoodAllergies),
                isEnv: bool(visitData.isEnvironmentalAllergies),
                drugAllergyDetail: visitData.drugAllergiesText,
                foodAllergyDetail: visitData.foodAllergiesText,
                envAllergyDetail: visitData.environmentalAllergiesText
            },
            BreastExamination: {
                LeftBreast: {
                    Normal: bool(visitData.isNormal_Left),
                    RetractedNipple: bool(visitData.isRetractedNipple_Left),
                    Nodule: bool(visitData.isNodule_Left),
                    Lump: bool(visitData.isLump_Left),
                    Scar: bool(visitData.isScar_Left)
                },
                RightBreast: {
                    Normal: bool(visitData.isNormal_Right),
                    RetractedNipple: bool(visitData.isRetractedNipple_Right),
                    Nodule: bool(visitData.isNodule_Right),
                    Lump: bool(visitData.isLump_Right),
                    Scar: bool(visitData.isScar_Right)
                }

            },
            CurrentIllnessHistory: {
                Nausea: bool(visitData.isNausea),
                Vomiting: bool(visitData.isVomits),
                Heartburn: bool(visitData.isHeartburn),
                Constipation: bool(visitData.isConstipation),
                IncreasedFrequencyOfUrination: bool(visitData.isUrintnFrqncyIncrsed),
                Fever: bool(visitData.isFever),
                PersistentVomiting: bool(visitData.isPrstntVomtng),
                AbnormalVaginalDischarge_itching: bool(visitData.isAbnrmlVaginlDischrgItchng),
                PalpitationsEasyFatigability: bool(visitData.isPalpitations),
                Breathlessness: bool(visitData.isBreathlessness),
                GeneralisedSwellingOfTheBody_PuffinessOfTheFace: bool(visitData.isBodySwelling),
                SevereHeadacheAndBlurringOfVision: bool(visitData.isSevereHeadacheVisionBlur),
                PassingSmallerAmountsOfUrineAndBurningSensationDuringMicturition: bool(visitData.isUrnPasngOrBurngSenstnDurngMctrton),
                VaginalBleeding: bool(visitData.isVaginalBleedng),
                LeakingOfWateryFluidPerVaginum_PV: bool(visitData.isFluidLeakngFrmVagina)
            },
            CurrentPregnancy: {
                PregnancyWanted: bool(visitData.isPregnancyRequired),
                LMP: Utils.convertDateFormatForView(visitData.lMPDate),
                EDD: Utils.convertDateFormatForView(visitData.eDDDate),
                EDD_USG: Utils.convertDateFormatForView(visitData.eDDByUSGDate)
            },
            FamilyHistory: {
                Highbloodpressurehypertension: bool(visitData.isHighBldPresrFamHist),
                Diabetes: bool(visitData.isDiabetesFamHist),
                Tuberculosis: bool(visitData.isTuberculosis),
                TwinsinimmediateFamily: bool(visitData.isTwinsInImdtFmly),
                CongeniatlMalfomationsinimmediatefamily: bool(visitData.isCongenitalMalformationInImdtFmly)
            },
            GeneralExamination: {
                Height: visitData.height,
                Weight: visitData.weight,
                Pallor: bool(visitData.isPallor),
                Jaundice: bool(visitData.isJaundiceGeneralExamintn),
                Pulse: bool(visitData.isPulse),
                RespiratoryRate: visitData.respiratoryRate,
                Oedema: bool(visitData.isOedema),
                BloodPressure1: '30',
                BloodPressure2: '150',
                TemperatureInFarenheit: visitData.temperature,
                TooWeak: bool(visitData.isTooWeekToGetOutOfBed)
            },
            HabbitsSocialHistory: {
                Tobacco: bool(visitData.isTobacco),
                Smoking: bool(visitData.isSmoking),
                Drugs: bool(visitData.isDrugs),
                Alcohol: bool(visitData.isAlcohol)
            },
            MenstrualHistory: {
                Regularity: bool(visitData.regularity),
                Frequencyinnumberofdays: visitData.daysFreqncyNo,
                Numberofdaysofbleed: visitData.bleedDaysNo,
                AgeatMenarche: visitData.menarcheAge,
                PainassociatedwithPeriods: bool(visitData.isPainInPeriods)
            },
            ObstetricHistory: {
                Gravid: visitData.gravida,
                Para: visitData.para,
                LiveBirths: visitData.liveBirths,
                RecurrentEarlyAbortion: bool(visitData.isRecurrentAbortions),
                Post_abortionComplications: bool(visitData.isPostAbrtnComplcatns),
                Hypertension_preeclampsia_eclampsia: bool(visitData.isHypertension),
                AntePartumHaemorrhage_APH: bool(visitData.isAntepartumHaemorrhage),
                Breech_TransversePresentation: bool(visitData.isBreechOrTransversePresentation),
                ObstructedLabour_IncludingDystocia: bool(visitData.isObstructedLabour),
                PerinealInjuries_tears: bool(visitData.isPerinealInjuriesOrTears),
                ExcessiveBleedingAfterDelivery: bool(visitData.isExcessBleedngAftrDelvry),
                PuerperalSepsis: bool(visitData.isPuerperalSepsis),
                BloodTransfusionDuringPreviousPregnancies: bool(visitData.isBldTrnsfusnDurngPrvsPrgnces),
                StillbirthOrNeonatalLoss: bool(visitData.isStlBirthOrNeontlLoss),
                ThreeOrMoreSpontaneousConsecutiveAbortions: bool(visitData.isMoreCnsctveAbortns),
                ObstructedLabour: bool(visitData.isObstructedLabour),
                PrematureBirths_twins_multiplePregnancies: bool(visitData.isPrematrBrthsTwnsOrMltplPrgncs),
                WeightOfThePreviousBaby: bool(visitData.isWeightPrvsBaby4500gmOrMore),
                AdmissionFoHypertensionOrPreEclampsia_eclampsiaInThePreviousPregnancy: bool(visitData.isHyprtnsnOrEclpsaInThePrvsPrgncy),
                SurgeryOnTheReproductiveTract: bool(visitData.isSurgryOnTheReprdctvTrct),
                CongenitalAnomaly: bool(visitData.isCongenitalAnomalies),
                TreatmentForInfertility: bool(visitData.isTreatmentForInfertility),
                SpinalDeformitiesSuchAs_Acoliosis_kyphosis_polio: bool(visitData.isSpinalDeformities),
                Rh_negative_inThePreviousPregnancy: bool(visitData.isRhNgtvPrvsPrgncy)
            },
            PastMedicalHistory: {
                HighBloodPressure_hypertension: bool(visitData.isHighBldPrssre),
                Diabetes: bool(visitData.isDiabetes),
                Breathlessness_on_exertion_palpitations_HeartDisease: bool(visitData.isBreathlessnessMedHist),
                ChronicCough_bloodInSputum_prolongedFever_tuberculosis: bool(visitData.isChrncCoughBldInTheSputmProlongdFevr),
                RenalDisease: bool(visitData.isRenalDisease),
                Convulsions_epilepsy: bool(visitData.isConvulsns),
                Attacksofbreathlessness_asthma: bool(visitData.isAttcksOfBrthlessnssOrAsthma),
                Jaundice: bool(visitData.isJaundice),
                Malaria: bool(visitData.isMalaria),
                ReproductiveTractInfection_RTI: bool(visitData.isReprdctvTrctInfectn),
                SexuallyTransmittedInfection_STI_and_HIV_AIDS: bool(visitData.isSTIOrHIV)
            },
            SystemicExamination: {
                NormalCardiovascularySystem: bool(visitData.cardiovascularySystem),
                NormalNervousSystem: bool(visitData.nervousSystem),
                NormalDigestiveSystem: bool(visitData.diagestiveSystem),
                NormalMusculoskeltalSystem: bool(visitData.musculoskeletalSystem),
                NormalCardiovascularySystem_Details: visitData.cardiovascularySystemNote,
                NormalNervousSystem_Details: visitData.nervousSystemNote,
                NormalDigestiveSystem_Details: visitData.diagestiveSystemNote,
                NormalMusculoskeltalSystem_Details: visitData.musculoskeletalSystemNote
            }
        };

        return visitInfo;
    }

    static getDataModelForService(visitData) {


        var visitInfo = {

            visitType: 'normal',
            visitStartDate: '12/12/1990',
            visitNumber: '1',
            patientReference: '1',
            isPregnancyRequired: str(visitData.CurrentPregnancy.PregnancyWanted, ''),
            lMPDate: Utils.convertDateFormatForView(visitData.CurrentPregnancy.LMP, ''),
            eDDDate: Utils.convertDateFormatForView(visitData.CurrentPregnancy.EDD, ''),
            eDDByUSGDate: Utils.convertDateFormatForView(visitData.CurrentPregnancy.EDD_USG, ''),
            cardiovascularySystem: str(visitData.SystemicExamination.NormalCardiovascularySystem, 'Normality', ''),
            cardiovascularySystemNote: visitData.SystemicExamination.NormalCardiovascularySystem_Details,
            nervousSystem: str(visitData.SystemicExamination.NormalNervousSystem, 'Normality', ''),
            nervousSystemNote: visitData.SystemicExamination.NormalNervousSystem_Details,
            diagestiveSystem: str(visitData.SystemicExamination.NormalDigestiveSystem, 'Normality', ''),
            diagestiveSystemNote: visitData.SystemicExamination.NormalDigestiveSystem_Details,
            musculoskeletalSystem: str(visitData.SystemicExamination.NormalMusculoskeltalSystem, 'Normality', ''),
            musculoskeletalSystemNote: visitData.SystemicExamination.NormalMusculoskeltalSystem_Details,
            isHighBldPrssre: str(visitData.PastMedicalHistory.HighBloodPressure_hypertension, ''),
            isDiabetes: str(visitData.PastMedicalHistory.Diabetes, ''),
            isBreathlessnessMedHist: str(visitData.PastMedicalHistory.Breathlessness_on_exertion_palpitations_HeartDisease, ''),
            isChrncCoughBldInTheSputmProlongdFevr: str(visitData.PastMedicalHistory.ChronicCough_bloodInSputum_prolongedFever_tuberculosis, ''),
            isRenalDisease: str(visitData.PastMedicalHistory.RenalDisease, ''),
            isConvulsns: str(visitData.PastMedicalHistory.Convulsions_epilepsy, ''),
            isAttcksOfBrthlessnssOrAsthma: str(visitData.PastMedicalHistory.Attacksofbreathlessness_asthma, ''),
            isJaundice: str(visitData.PastMedicalHistory.Jaundice, ''),
            isMalaria: str(visitData.PastMedicalHistory.Malaria, ''),
            isReprdctvTrctInfectn: str(visitData.PastMedicalHistory.ReproductiveTractInfection_RTI, ''),
            isSTIOrHIV: str(visitData.PastMedicalHistory.SexuallyTransmittedInfection_STI_and_HIV_AIDS, ''),
            gravida: visitData.ObstetricHistory.Gravid,
            para: visitData.ObstetricHistory.Para,
            liveBirths: visitData.ObstetricHistory.LiveBirths,
            isPostAbrtnComplcatns: str(visitData.ObstetricHistory.Post_abortionComplications, ''),
            isHypertension: str(visitData.ObstetricHistory.Hypertension_preeclampsia_eclampsia, ''),
            isEclampsia: str(visitData.ObstetricHistory.Hypertension_preeclampsia_eclampsia, ''),
            isAntepartumHaemorrhage: str(visitData.ObstetricHistory.AntePartumHaemorrhage_APH, ''),
            isBreechOrTransversePresentation: str(visitData.ObstetricHistory.Breech_TransversePresentation, ''),
            isObstructedLabour: str(visitData.ObstetricHistory.ObstructedLabour_IncludingDystocia, ''),
            isPerinealInjuriesOrTears: str(visitData.ObstetricHistory.PerinealInjuries_tears, ''),
            isExcessBleedngAftrDelvry: str(visitData.ObstetricHistory.ExcessiveBleedingAfterDelivery, ''),
            isPuerperalSepsis: str(visitData.ObstetricHistory.PuerperalSepsis, ''),
            isBldTrnsfusnDurngPrvsPrgnces: str(visitData.ObstetricHistory.BloodTransfusionDuringPreviousPregnancies, ''),
            isStlBirthOrNeontlLoss: str(visitData.ObstetricHistory.StillbirthOrNeonatalLoss, ''),
            isMoreCnsctveAbortns: str(visitData.ObstetricHistory.ThreeOrMoreSpontaneousConsecutiveAbortions, ''),
            isPrematrBrthsTwnsOrMltplPrgncs: str(visitData.ObstetricHistory.PrematureBirths_twins_multiplePregnancies, ''),
            isWeightPrvsBaby4500gmOrMore: str(visitData.ObstetricHistory.WeightOfThePreviousBaby, ''),
            isHyprtnsnOrEclpsaInThePrvsPrgncy: str(visitData.ObstetricHistory.AdmissionFoHypertensionOrPreEclampsia_eclampsiaInThePreviousPregnancy, ''),
            isSurgryOnTheReprdctvTrct: str(visitData.ObstetricHistory.SurgeryOnTheReproductiveTract, ''),
            isCongenitalAnomalies: str(visitData.ObstetricHistory.CongenitalAnomaly, ''),
            isTreatmentForInfertility: str(visitData.ObstetricHistory.TreatmentForInfertility, ''),
            isSpinalDeformities: str(visitData.ObstetricHistory.SpinalDeformitiesSuchAs_Acoliosis_kyphosis_polio, ''),
            isRhNgtvPrvsPrgncy: str(visitData.ObstetricHistory.Rh_negative_inThePreviousPregnancy, ''),
            isRecurrentAbortions: str(visitData.ObstetricHistory.RecurrentEarlyAbortion, ''),
            recurrentAbortionsCount: '12',
            regularity: str(visitData.MenstrualHistory.Regularity, 'Regularity', ''),
            daysFreqncyNo: visitData.MenstrualHistory.Frequencyinnumberofdays,
            bleedDaysNo: visitData.MenstrualHistory.Numberofdaysofbleed,
            menarcheAge: visitData.MenstrualHistory.AgeatMenarche,
            isPainInPeriods: str(visitData.MenstrualHistory.PainassociatedwithPeriods, ''),
            isNausea: str(visitData.CurrentIllnessHistory.Nausea, ''),
            isVomits: str(visitData.CurrentIllnessHistory.Vomiting, ''),
            isHeartburn: str(visitData.CurrentIllnessHistory.Heartburn, ''),
            isConstipation: str(visitData.CurrentIllnessHistory.Constipation, ''),
            isUrintnFrqncyIncrsed: str(visitData.CurrentIllnessHistory.IncreasedFrequencyOfUrination, ''),
            isFever: str(visitData.CurrentIllnessHistory.Fever, ''),
            isPrstntVomtng: str(visitData.CurrentIllnessHistory.PersistentVomiting, ''),
            isAbnrmlVaginlDischrgItchng: str(visitData.CurrentIllnessHistory.AbnormalVaginalDischarge_itching, ''),
            isPalpitations: str(visitData.CurrentIllnessHistory.PalpitationsEasyFatigability, ''),
            easyFatigability: str(visitData.CurrentIllnessHistory.PalpitationsEasyFatigability, ''),
            isBreathlessness: str(visitData.CurrentIllnessHistory.Breathlessness, ''),
            isBodySwelling: str(visitData.CurrentIllnessHistory.GeneralisedSwellingOfTheBody_PuffinessOfTheFace, ''),
            isFacePuffiness: str(visitData.CurrentIllnessHistory.GeneralisedSwellingOfTheBody_PuffinessOfTheFace, ''),
            isSevereHeadacheVisionBlur: str(visitData.CurrentIllnessHistory.SevereHeadacheAndBlurringOfVision, ''),
            isUrnPasngOrBurngSenstnDurngMctrton: str(visitData.CurrentIllnessHistory.PassingSmallerAmountsOfUrineAndBurningSensationDuringMicturition, ''),
            isVaginalBleedng: str(visitData.CurrentIllnessHistory.VaginalBleeding, ''),
            isFluidLeakngFrmVagina: str(visitData.CurrentIllnessHistory.LeakingOfWateryFluidPerVaginum_PV, ''),
            isTobacco: str(visitData.HabbitsSocialHistory.Tobacco, ''),
            isSmoking: str(visitData.HabbitsSocialHistory.Smoking, ''),
            isDrugs: str(visitData.HabbitsSocialHistory.Drugs, ''),
            isAlcohol: str(visitData.HabbitsSocialHistory.Alcohol, ''),
            height: visitData.GeneralExamination.Height,
            weight: visitData.GeneralExamination.Weight,
            isPallor: str(visitData.GeneralExamination.Pallor, ''),
            isJaundiceGeneralExamintn: str(visitData.GeneralExamination.Jaundice, ''),
            isPulse: str(visitData.GeneralExamination.Pulse, ''),
            respiratoryRate: visitData.GeneralExamination.RespiratoryRate,
            isOedema: str(visitData.GeneralExamination.Oedema, ''),
            bloodPressure: '30150',
            temperature: visitData.GeneralExamination.TemperatureInFarenheit,
            isTooWeekToGetOutOfBed: str(visitData.GeneralExamination.TooWeak, ''),
            isHighBldPresrFamHist: str(visitData.FamilyHistory.Highbloodpressurehypertension, ''),
            isDiabetesFamHist: str(visitData.FamilyHistory.Diabetes, ''),
            isTuberculosis: str(visitData.FamilyHistory.Tuberculosis, ''),
            isTwinsInImdtFmly: str(visitData.FamilyHistory.TwinsinimmediateFamily, ''),
            isCongenitalMalformationInImdtFmly: str(visitData.FamilyHistory.CongeniatlMalfomationsinimmediatefamily, ''),
            isNormal_Right: str(visitData.BreastExamination.RightBreast.Normal, ''),
            isRetractedNipple_Right: str(visitData.BreastExamination.RightBreast.RetractedNipple, ''),
            isNodule_Right: str(visitData.BreastExamination.RightBreast.Nodule, ''),
            isLump_Right: str(visitData.BreastExamination.RightBreast.Lump, ''),
            isScar_Right: str(visitData.BreastExamination.RightBreast.Scar, ''),
            isNormal_Left: str(visitData.BreastExamination.LeftBreast.Normal, ''),
            isRetractedNipple_Left: str(visitData.BreastExamination.LeftBreast.RetractedNipple, ''),
            isNodule_Left: str(visitData.BreastExamination.LeftBreast.Nodule, ''),
            isLump_Left: str(visitData.BreastExamination.LeftBreast.Lump, ''),
            isScar_Left: str(visitData.BreastExamination.LeftBreast.Scar, ''),
            isDrugAllergies: str(visitData.Allergies.isDrug, ''),
            isFoodAllergies: str(visitData.Allergies.isFood, ''),
            isEnvironmentalAllergies: str(visitData.Allergies.isEnv, ''),
            drugAllergiesText: visitData.Allergies.drugAllergyDetail,
            foodAllergiesText: visitData.Allergies.foodAllergyDetail,
            environmentalAllergiesText: visitData.Allergies.envAllergyDetail,
            abdominalFindings: visitData.AbdominalExamination.InspectationOfScars,
            fundalHeight: visitData.AbdominalExamination.FundalHeightInCMS,
            fundalHeightWeeks: visitData.AbdominalExamination.FundalHeightInWeeks,
            foetalLie: visitData.AbdominalExamination.FoetalLie,
            foetalPresentation: visitData.AbdominalExamination.Foetalpresentation,
            foetalHeartRate: visitData.AbdominalExamination.FHS,
            singleVsMultiplePrgncy: visitData.AbdominalExamination.SingleVsMultiplePregnancy,
            isFoetalMovements: str(visitData.AbdominalExamination.FoetalMovements, '')


        };
        return visitInfo;
    }
   /* convertBloodPressure1(bloodPressure) {
    	return bloodPressure.split('\')[0];
    }
    
    convertBloodPressure2(bloodPressure) {
    	return bloodPressure.split('\')[1];
    }*/

}
module.exports = VisitDataTranslator;