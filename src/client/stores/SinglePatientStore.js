/*eslint no-unused-vars: 0*/

import BaseStore from './BaseStore';
import SinglePatientViewModel from '../model/SinglePatientViewModel';


/**
 * 
 */
class SinglePatientStore extends BaseStore {

    constructor() {
        super();
        this.subscribe(() => this._registerToActions.bind(this));
    }

    _registerToActions(action) {
        switch (action.type) {
        case ActionType.SINGLE_PATIENT_FETCH:
                /*var getData = {
                    url: AppConstants.,
                    dataType: DataType.JSON,
                    contentType: ContentType.JSON
                };
                ServiceManager.doGet(getData).then(function(response) {
                    var visitData = visitSummaryStore.translate(response, RequestType.GET);
                    emitChange(AppConstants.FETCH_EVENT, visitData);
                }, function(error) {
                	emitChange(AppConstants.FETCH_EVENT, error);
                });*/
            var singlePatientViewData = SinglePatientViewModel.getSinglePatientViewData();
            super.emitChange(AppConstants.FETCH_EVENT, singlePatientViewData);
            break;

        default:
            return;
        }
    }

}

export default new SinglePatientStore();