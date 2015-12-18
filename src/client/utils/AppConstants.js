const APP_NAME = 'Janani';
const PATIENT_REGISTRATION_URL = 'http://ec2-52-10-19-65.us-west-2.compute.amazonaws.com/FHIRServer/patientRegistration/register';
const PATIENT_VISIT_URL = 'http://ec2-52-10-19-65.us-west-2.compute.amazonaws.com/FHIRServer/patientVisit/createVisit';
const PATIENT_DETAILS_URL = 'http://ec2-52-10-19-65.us-west-2.compute.amazonaws.com/FHIRServer/patientRegistration/searchByID?id=';
const REGISTRATION_URL_PATTERN = 'Developer/Registration/RegistrationId';
const VISIT_URL_PATTERN = 'Developer/Visit/VisitId';
const SAVE_EVENT = 'save';
const FETCH_EVENT = 'fetch';
const ACTION_TYPE = {
    REGISTER_PATIENT_ACTION: 'REGISTER_PATIENT_ACTION',
    SAVE_VISIT_INFO_ACTION: 'SAVE_VISIT_INFO',
    REGISTERED_PATIENT_FETCH: 'REGISTERED_PATIENT_FETCH',
    VISIT_INFO_FETCH: 'VISIT_INFO_FETCH',
    IMPORT_PICME_DATA: 'IMPORT_PICME_DATA',
    LOGIN_USER: 'LOGIN_USER',
    LOGOUT_USER: 'LOGOUT_USER',
    SUCCESS_LOGIN: 'SUCCESS_LOGIN',
    VISIT_SUMMARY_FETCH: 'VISIT_SUMMARY_FETCH',
    SINGLE_PATIENT_FETCH: 'SINGLE_PATIENT_FETCH',
    REFER_LETTER_DATA_FETCH:'REFER_LETTER_DATA_FETCH'
};

const ROUTE_PATH = {
    REGISTRATION: '/app/Registration',
    VISIT: 'Visit',
    PATIENT:'/app/Patient',
    SINGLE_PATIENT_VIEW: '/app/SinglePatientView',
    REFERRAL_LETTER: '/app/ReferralLetter',
    VISIT_SUMMARY:'/app/VisitSummary',
    MO_WORKLIST: '/app/MOWorkList'
};


const NOTIFICATION_MESSAGE = {
    REGISTER_PATIENT_SUCCESS_MESSAGE: 'Patient Registerd successfully',
    VISIT_SAVE_SUCCESS_MESSAGE: 'Visit Information Saved Successfully'
};

const NOTIFICATION_TYPE = {
    SUCCESS: 'success',
    ERROR: 'error'
};

const REQUEST_TYPE = {
    GET: 'GET',
    POST: 'POST'
};

const DATA_TYPE = {JSON: 'json'};

const CONTENT_TYPE = {JSON: 'application/json; charset=utf-8'};


module.exports = {
    PATIENT_REGISTRATION_URL: PATIENT_REGISTRATION_URL,
    PATIENT_VISIT_URL: PATIENT_VISIT_URL,
    APP_NAME: APP_NAME,
    ACTION_TYPE: ACTION_TYPE,
    NOTIFICATION_TYPE: NOTIFICATION_TYPE,
    NOTIFICATION_MESSAGE: NOTIFICATION_MESSAGE,
    CONTENT_TYPE: CONTENT_TYPE,
    DATA_TYPE: DATA_TYPE,
    PATIENT_DETAILS_URL: PATIENT_DETAILS_URL,
    SAVE_EVENT: SAVE_EVENT,
    FETCH_EVENT: FETCH_EVENT,
    REGISTRATION_URL_PATTERN: REGISTRATION_URL_PATTERN,
    VISIT_URL_PATTERN: VISIT_URL_PATTERN,
    REQUEST_TYPE: REQUEST_TYPE,
    ROUTE_PATH: ROUTE_PATH

};