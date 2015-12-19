import React from 'react';
// import StageIndicator from './../../../controls/StageIndicator';
// Input, Row, Label,
import {ProgressBar} from 'react-bootstrap';

/*var patientH1 = {
    marginLeft: '10px',
    fontWeight: 'normal',
    fontSize: '25px'
};

var bgStyle = {
    backgroundColor: '#DAF1F9',
    marginLeft: '-16px',
    marginTop: '65px',
    position: 'fixed',
    width: '100%'
};
*/

class PatientBanner extends React.Component {



    render() {
        var patientData = this.props.patientData;
        // let labelClass = 'col-xs-1 text-right';
        // let dataClass = 'col-xs-1 text-left';
        var paddLeft = 9;
        return (
            <div className="col-lg-12 patient-banner">
					<div className="col-lg-3 patient-info-bx1">
						<div className="col-sm-4">
							<img src="../../common/default_patient.png" className="patient-avatar"/>
						</div>
						<div className="content-body col-sm-8 device_width">
							<div id="row">
								<label>{locale('Name')}</label>
								<span>{patientData.name}</span>
							</div>
							<div id="row">
								<label>{locale('Age')}</label>
								<span>27 Yrs</span>
							</div>
							<div id="row">
								<label>{locale('ContactNo')}</label>
								<span>{patientData.emergencyContactPhn}</span>
							</div>
						</div>
						<div className="divider">&nbsp;</div>
					</div>
					<div className="col-lg-3 patient-info-bx2">
					<div className="content-body col-sm-8">
						<div id="row">
							<label>{locale('Spouse')}</label>
							<span>{patientData.spouseName}</span>
						</div>
						<div id="row">
							<label>{locale('Obsterics')}</label>
							<span>{patientData.obsterics}</span>
						</div>
						<div id="row">
							<label>{locale('Risk')}</label>
							<span>{patientData.obsterics}</span>
						</div>
					</div>
					<div className="divider">&nbsp;</div>
				</div>
				<div className="col-lg-3 patient-info-bx3">
					<div className="content-body col-sm-8">
						<div id="row">
							<label>{locale('BloodGroup')}</label>
							<span>{patientData.bloodGroup}</span>
						</div>
						<div id="row">
							<label>{locale('PICMEID')}</label>
							<span>{patientData.picmeID}</span>
						</div>
						<div id="row">
							<label>{locale('JananiID')}</label>
							<span>{patientData.jananiID}</span>
						</div>
					</div>
					<div className="divider">&nbsp;</div>
				</div>
				
				<div className="col-lg-3">
					<div className="content-body col-sm-8">
						<div id="row" className="ps_width">
							{locale('PregnencyStatus')}
						</div>
						<div id="row">
							<ProgressBar striped bsStyle="success" min={0} max={100} now={patientData.pregnancyweekValue} />
							<div className="progress_val" style={{marginLeft: patientData.pregnancyweekValue - paddLeft + '%'}}>
								<div className="arrow-up"></div>
								<span className="label label-success">{patientData.pregnancyweekText}</span>
							</div>
						</div>
					</div>
				</div>
			</div>
            );
    }
}
module.exports = PatientBanner;