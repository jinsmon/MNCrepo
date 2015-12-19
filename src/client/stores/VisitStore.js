
import BaseStore from './BaseStore';
import VisitModel from '../model/VisitModel';
import DataTranslator from './../translators/DataTranslator';

class VisitStore extends BaseStore {

    constructor() {
        super();
        this.subscribe(() => this.registerToActions.bind(this));
    }
    
    translate(visitData,type) {
        var data;
        if (type == RequestType.GET){
            data = DataTranslator.translateVisitDataForView(visitData);    
        }else if (type == RequestType.POST) {
            data =DataTranslator.translateVisitDataForService(visitData);
        }
        return data;
    }
    
    registerToActions(action) {
        let visitStore = this;
        switch (action.type) {
        case ActionType.SAVE_VISIT_INFO_ACTION:
            var visitData = visitStore.translate(action.data,RequestType.POST);
            var postData = {
                url: AppConstants.PATIENT_VISIT_URL,
                data: JSON.stringify(visitData),
                dataType: DataType.JSON,
                contentType: ContentType.JSON
            };
            
            
            ServiceManager.doPost(postData).then(function(response) {
                visitStore.emitChange(AppConstants.SAVE_EVENT, response);
                toast.show(response, NOTIFICATION_TYPE.SUCCESS);
               
            }, function(error) {
                visitStore.emitChange(AppConstants.SAVE_EVENT, error);
                toast.show(error, NOTIFICATION_TYPE.ERROR);
            });
            break;
            
        case ActionType.VISIT_INFO_FETCH:
            //var visitData = visitDataService;
            visitData = VisitModel.getVisitData();
            //console.log(visitData);
            visitStore.emitChange(AppConstants.FETCH_EVENT, visitData);

            /*var getData = {
                url: AppConstants.PATIENT_DETAILS_URL + '1',
                dataType: DataType.JSON,
                contentType: ContentType.JSON
            };
            ServiceManager.doGet(getData).then(function(response) {
                 var patientData = registrationStore.translate(response, RequestType.GET);
                 registrationStore.emitChange(AppConstants.FETCH_EVENT, patientData);

            }, function(error) {
                    registrationStore.emitChange(AppConstants.FETCH_EVENT, error);
            });*/
            break;
        default:
            return;
        }
    }


}


export default new VisitStore();

