var singlePatientViewData = {
    patientId:'2',
    totalVisits: '',
    ancVisits: '',
    generalVisits: '',
    missedVisits: '',

    visits: [{
        weekType: 'W1-13',
        visits: [
            {
                visitId: 23,
                status: 'Done',
                type: 'ANC',
                date: '',
                lastUpdated: '',
                enteredBy: ''
            },
            {
                visitId: 24,
                status: 'Done',
                type: 'ANC',
                date: '',
                lastUpdated: '',
                enteredBy: ''
            },
            {
                visitId: 25,
                status: 'Done',
                type: 'General',
                date: '',
                lastUpdated: '',
                enteredBy: ''
            }
        ],
        totalVisits: '03',
        ancVisits: '02',
        generalVisits: '01',
        missedVisits: '00'
    },
        {
            weekType: 'W13-27',
            visits: [
                {
                    visitId: 26,
                    status: 'Done',
                    type: 'ANC',
                    date: '',
                    lastUpdated: '',
                    enteredBy: ''
                },
                {
                    visitId: 27,
                    status: 'Done',
                    type: 'General',
                    date: '',
                    lastUpdated: '',
                    enteredBy: ''
                }
            ],
            totalVisits: '02',
            ancVisits: '01',
            generalVisits: '01',
            missedVisits: '00'
        },
        {
            weekType: 'W28-39',
            visits: [],
            totalVisits: '00',
            ancVisits: '00',
            generalVisits: '00',
            missedVisits: '00'
        }

    ]
};

export default class SinglePatientViewModel {
    static getSinglePatientViewData() {
        return singlePatientViewData;
    }
}