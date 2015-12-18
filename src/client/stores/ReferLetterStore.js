import BaseStore from './BaseStore';
import DataTranslator from './../translators/DataTranslator';

/**
 * 
 */
class ReferLetterStore extends BaseStore {

    constructor() {
        super();
        this.subscribe(() => this._registerToActions.bind(this));
    }

    _registerToActions(action) {
        let referralStore = this;
        switch (action.type) {
        case ActionType.REFER_LETTER_DATA_FETCH:
            let patientId = Utils.parseUrl(Route.PATIENT).Patient;
            var getData = {
                url: AppConstants.PATIENT_DETAILS_URL + patientId,
                dataType: DataType.JSON,
                contentType: ContentType.JSON
            };
            ServiceManager.doGet(getData).then(function(response) {
                response['patientId'] = patientId;
                var referLetterData = DataTranslator.translateReferLetterData(response);
                referralStore.emitChange(AppConstants.FETCH_EVENT, referLetterData);
            }, function(error) {
                referralStore.emitChange(AppConstants.FETCH_EVENT, error);
            });
            break;

        default:
            return;
        }
    }

}

export default new ReferLetterStore();