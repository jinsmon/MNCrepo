import React from 'react';
import PatientContainer from './../layout/container/patientContainer';
import VisitInfo from './VisitInfo';



export default class VisitPage extends React.Component {


    render() {
        return (
            <PatientContainer>
                <VisitInfo />
            </PatientContainer>
            );
    }
}




