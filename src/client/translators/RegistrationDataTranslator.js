/*eslint no-mixed-spaces-and-tabs:0*/
/*eslint no-unused-vars: 0*/
import React from 'react';


export default class RegistrationDataTranslator {
	
		



	   static getDataModelForView(obj)
		{
    return  {
        id : obj?obj.id:null,
        name: obj ? obj.name:'',
        spouseName: obj ?obj.spouseName:'',
        dOB:'12/12/2015',//obj?Utils.convertDateFormatForView(obj.dOB):'',
        emergencyContactPhn:obj ? obj.emergencyContactPhn:'',
        picmeID: obj?obj.picmeID:'',
        jananiID:obj?obj.jananiID :'',
        nextDueDate: obj?obj.nextDueDate:'',
        addrs1:obj?obj.addrs1:'',
        addrs2:obj?obj.addrs2:'',
        addrs3:obj?obj.addrs3:'',
        village:obj?obj.village:'',
        city:obj?obj.city:'',
        state:obj?obj.state:'',
        pincode:obj?obj.pincode:'',
        temporaryAddrSameAsPermanent:obj?bool(obj.temporaryAddrSameAsPermanent):'',
        isPregrnancyWanted: obj?bool(obj.isPregrnancyWanted):'',
        lmp:obj?obj.lmp:'',
        edd:obj?obj.edd:'',
        subCentreID:obj?obj.subCentreID:'',
        subCentreName:obj?obj.subCentreName:'',
        vhnName:obj?obj.vhnName:'',
        bloodGroup:obj?obj.bloodGroup:'',
        highRiskMother:obj?obj.highRiskMother:'',
        highRiskMotherComments:obj?obj.highRiskMotherComments:'',
        obstetrics:obj?obj.obstetrics:'',
        pregnancyweekValue:1,
        pregnancyweekText:'W1',
        risk: ''
        
    };
		    
	
}
	   static getDataModelForService(a)
	   {
    return {
        name:a.name,
        spouseName:a.spouseName,
        dOB:a.dOB,
        emergencyContactPhn:a.emergencyContactPhn,
        picmeID:a.picmeID,
        jananiID:a.jananiID,
        nextDueDate:a.nextDueDate,
        addrs1:a.addrs1,
        addrs2:a.addrs2,
        addrs3:a.addrs3,
        village:a.village,
        city:a.city,
        state:a.state,
        pincode:a.pincode,
        temporaryAddrSameAsPermanent:str(a.temporaryAddrSameAsPermanent),
        isPregrnancyWanted:str(a.isPregrnancyWanted),
        lmp:a.lmp,
        edd:a.edd,
        subCentreID:a.subCentreID,
        subCentreName:a.subCentreName,
        vhnName:a.vhnName,
        bloodGroup:a.bloodGroup,
        highRiskMother:a.bloodGroup,
        highRiskMotherComments:a.highRiskMotherComments,
        obstetrics:a.obstetrics
       
    };
	   }
	
}