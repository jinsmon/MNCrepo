/*eslint no-unused-vars: 0*/
/*eslint no-console: 0*/
/*eslint no-undef: 0*/
var nools = require('nools');

var Number = function (patientData) {
    this.anemic = patientData.anemicValue; 
};
var flow = nools.flow('Check Health', function (flow) {

    flow.rule('NormalAnemic', [Number, 'n', 'n.anemic<10 && n.anemic>5'], function (facts) {
        console.log('Normal Anemic : Value is between 5 and 10');
    });

    flow.rule('HighAnemic', [Number, 'n', 'n.anemic>10'], function (facts) {
        console.log('High Anemic : Value is greater than 10');
    });

    flow.rule('LowAnemic', [Number, 'n', 'n.anemic<5'], function (facts) {
        console.log('Low Anemic : Value is less thann 5 ');
    });  

});


var patientData = {anemicValue: '12', diabeticValue: '108'};
var session = flow.getSession();
session.assert(new Number(patientData));
session.match().then(
    function(){
        console.log('Done');
    },
    function(err){
        //console.error(err.stack);
        console.log('Error');
    });
session.on('fire',function(fact){
    console.log('Assertion completed');
    consol.log(fact);
});
 
