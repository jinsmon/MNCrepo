/*eslint no-unused-vars: 0*/
import DataTranslator from './../translators/DataTranslator';
import BaseStore from './BaseStore';

class RegistrationStore extends BaseStore {

    constructor() {
        super();
        this.subscribe(() => this.registerToActions.bind(this));
    }

   /* getPatientData() {
        var patientData = RegistrationModel.getPatientData();
        return patientData;
    }
*/
    translate(patientData, type) {
        var data;
        if (type == RequestType.GET) {
            data = DataTranslator.translateRegistrationDataForView(patientData);
        } else if (type == RequestType.POST) {
            data = DataTranslator.translateRegistrationDataForService(patientData);
        }
        return data;
    }


    handleImportResponse(successCount, failureCount, maxLength) {
        let totalCount = successCount + failureCount;
        if (totalCount === maxLength) {
            toast.show(successCount + ' users were registered', NOTIFICATION_TYPE.SUCCESS);
            toast.show(failureCount + ' users were not registered', NOTIFICATION_TYPE.ERROR);
        }
    }

    registerToActions(action) {
        let registrationStore = this;
        switch (action.type) {
        case ActionType.REGISTER_PATIENT_ACTION:
            let patientData = this.translate(action.data, RequestType.POST);
            if(patientData.id) {
                patientData['id'] = patientData.id;
            }
            let postData = {
                url: AppConstants.PATIENT_REGISTRATION_URL,
                data: JSON.stringify(patientData),
                dataType: DataType.JSON,
                contentType: ContentType.JSON
            };
            ServiceManager.doPost(postData).then(function(response) {

                toast.show(response, NOTIFICATION_TYPE.SUCCESS);
                registrationStore.emitChange(AppConstants.SAVE_EVENT, response);

            }, function(error) {
                toast.show(error, NOTIFICATION_TYPE.ERROR);
                registrationStore.emitChange(AppConstants.SAVE_EVENT, error);
            });
            break;
            
        case ActionType.REGISTERED_PATIENT_FETCH:
            let patientId = Utils.parseUrl(AppConstants.REGISTRATION_URL_PATTERN).RegistrationId;
           // patientId = '1';
            if (patientId && patientId != -1) {
                var getData = {
                    url: AppConstants.PATIENT_DETAILS_URL + patientId,
                    dataType: DataType.JSON,
                    contentType: ContentType.JSON
                };
                ServiceManager.doGet(getData).then(function(response) {
                    var patientData = registrationStore.translate(response, RequestType.GET);
                    registrationStore.emitChange(AppConstants.FETCH_EVENT, patientData);
                }, function(error) {
                    registrationStore.emitChange(AppConstants.FETCH_EVENT, error);
                });
            } else {
                var patientData = registrationStore.translate(null, RequestType.GET);
                registrationStore.emitChange(AppConstants.FETCH_EVENT, patientData);
            }
            break;

        case ActionType.IMPORT_PICME_DATA:
            var successCount = 0;
            var failureCount = 0;
           
            for (var entry of action.data) {
                let patientData = registrationStore.translate(entry, RequestType.POST);
                let postData = {
                    url: AppConstants.PATIENT_REGISTRATION_URL,
                    data: JSON.stringify(patientData),
                    dataType: DataType.JSON,
                    contentType: ContentType.JSON
                };
                ServiceManager.doPost(postData).then(function(response) {
                    successCount++;
                    registrationStore.handleImportResponse(successCount, failureCount, action.data.length);
                }, function(error) {
                    failureCount++;
                    registrationStore.handleImportResponse(successCount, failureCount, action.data.length);
                });
            }
            break;
        default:
            return;
        }
    }


}

export default new RegistrationStore();
