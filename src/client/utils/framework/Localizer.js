/*eslint no-mixed-spaces-and-tabs:0*/
/*eslint no-unused-vars: 0*/
// import React from 'react';
var jsonData;

export default class Localizer {

    constructor(jsonObj) {
        // console.log('inside Localizer constructor');
        this.jsonData = jsonObj;
    }

    localize(key) {
        // console.log('Localizer : localize : ');    	
        return this.jsonData[key];
    }
}


