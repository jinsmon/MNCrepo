var $ = require('jquery');
import AppAction from '../actions/AppAction';
import ServiceManager from './ServiceManager';
import AppConstants from './AppConstants';
import {AppUtils} from './AppUtils';
import LocalizerManager from './framework/LocalizerManager';

window.AppAction = AppAction;
window.ServiceManager = ServiceManager;
window.$ = $;
window.AppConstants = AppConstants;
window.ActionType = AppConstants.ACTION_TYPE;
window.NOTIFICATION_MESSAGE = AppConstants.NOTIFICATION_MESSAGE;
window.NOTIFICATION_TYPE = AppConstants.NOTIFICATION_TYPE;
window.ContentType = AppConstants.CONTENT_TYPE;
window.DataType = AppConstants.DATA_TYPE;
window.RequestType = AppConstants.REQUEST_TYPE;
window.Utils = AppUtils;
window.bool = AppUtils.convertStringToBoolean;
window.str = AppUtils.convertBooleanToString;
window.Route = AppConstants.ROUTE_PATH;

var lm = new LocalizerManager('en');
window.lm = lm;
