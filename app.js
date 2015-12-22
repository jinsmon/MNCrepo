/*eslint no-console: 0*/

'use strict';

var express = require('express');
var path    = require('path');
var app     = express();
var request=require('request');

app.use(express.static(__dirname + '../../../dist/'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '../../../dist/index.html'));
}
);
app.get('/api/worklists', function(req, res) {
    /*var options = {
        host: 'ec2-52-10-19-65.us-west-2.compute.amazonaws.com',
        path: '/FHIRServer/patientRegistration/search',
        method: 'GET'
    };
    http.request(options, function(response) {
        var body = '';
        response.on('data', function(d) {
            body += d;
        });
        response.on('end', function() {
            console.log('-----');
            console.log(body);
            res.send(body);
        });
        });*/
    var url = 'http://ec2-52-10-19-65.us-west-2.compute.amazonaws.com/FHIRServer/patientRegistration/search';
    request(url, function (error, response, body) {
        if (error) {
            console.log('error ' + error);
        }
        if (!error && response.statusCode == 200) {
            //console.log(body); // Show the HTML for the Google homepage.
            res.json(JSON.parse(body));
        }
    });
});

app.listen(3000, function() {
    console.log('app is listening in port 3000..!.');
});
