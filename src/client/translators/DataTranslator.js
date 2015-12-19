import RegistrationTranslator from './RegistrationDataTranslator';
import VisitDataTranslator from './VisitDataTranslator';
import ReferLetterDataTranslator from './ReferLetterDataTranslator';



class DataTranslator {

    static translateVisitDataForService(source) {
        return VisitDataTranslator.getDataModelForService(source);
    }

    static translateVisitDataForView(source) {
        return VisitDataTranslator.getDataModelForView(source);
    }

    static translateRegistrationDataForService(source) {
        return RegistrationTranslator.getDataModelForService(source);
    }

    static translateRegistrationDataForView(source) {
        return RegistrationTranslator.getDataModelForView(source);
    }

    static translateReferLetterData(source) {
        return ReferLetterDataTranslator.populateReferLetterData(source);
    }
}
module.exports = DataTranslator;