/*eslint no-console: 0*/

'use strict';

var express = require('express');
var path = require('path');
var app = express();
var request = require('request');
var bodyParser = require('body-parser');

var port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use(express.static(__dirname + '/dist/'));

//var proxyUrl = 'http://' + '<username>' + ':' + '<password>' + '@' + 'cis-india-pitc-bangalorez.proxy.corporate.ge.com:' + 80;
//var proxyUrl='https_proxy=http://http-proxy.health.ge.com:88';
//request = request.defaults({proxy: proxyUrl});


app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
}
);

app.get('/api/worklists', function(req, res, next) {
	var options = '';
	console.log('francis1 '); 
	var datas = JSON.stringify(req.body);
    var searchString = req.headers['searchString'];
	console.log('francis2 '+searchString); 
	 if(typeof req.headers['searchString'] !== 'undefined') {
	  options = {
        uri: 'http://ec2-52-34-194-19.us-west-2.compute.amazonaws.com/FHIRServer/patientRegistration/search?searchString=' + searchString,
        method: 'GET',
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
        body: datas
    };
	 }
	 else
	 {
		 options = {
        uri: 'http://ec2-52-34-194-19.us-west-2.compute.amazonaws.com/FHIRServer/patientRegistration/search',
        method: 'GET',
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
        body: datas
        };
	 }
	
	 request(options, function(error, response, body) {
        if (error) {
            next(error);
        }
        if (!error && response.statusCode == 200) {
            res.json(JSON.parse(body));
        }
    });

});
	
  
app.get('/api/getVisits', function(req, res, next) {
   var datas = JSON.stringify(req.body);
    var patientId = req.headers['patientid'];
    var options = {
        uri: 'http://ec2-52-34-194-19.us-west-2.compute.amazonaws.com/FHIRServer/patientVisit/searchVisits?patientReference=' + patientId,
        method: 'GET',
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
        body: datas
    };

    request(options, function(error, response, body) {
        if (error) {
            next(error);
        }
        if (!error && response.statusCode == 200) {
            res.json(JSON.parse(body));
        }
    });

});




app.post('/api/registerPatient', function(req, res, next) {
    var datas = JSON.stringify(req.body);
    var options = {
        uri: 'http://ec2-52-34-194-19.us-west-2.compute.amazonaws.com/FHIRServer/patientRegistration/register',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
        body: datas
    };

    request(options, function(error, response, body) {
        if (error) {
            next(error);
        }
        if (!error && response.statusCode == 200) {
            res.json(body);
        }
    });

});

app.post('/api/saveVisit', function(req, res, next) {

    var datas = JSON.stringify(req.body);

    var options = {
        uri: 'http://ec2-52-34-194-19.us-west-2.compute.amazonaws.com/FHIRServer/patientVisit/createVisit',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
        body: datas
    };

    request(options, function(error, response, body) {
        if (error) {
            next(error);
        }
        if (!error && response.statusCode == 200) {
            res.json(body);
        }
    });
});

app.get('/api/getVisits', function(req, res, next) {
   var datas = JSON.stringify(req.body);
    var patientId = req.headers['patientid'];
    var options = {
        uri: 'http://ec2-52-34-194-19.us-west-2.compute.amazonaws.com/FHIRServer/patientVisit/searchVisits?patientReference=' + patientId,
        method: 'GET',
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
        body: datas
    };

    request(options, function(error, response, body) {
        if (error) {
            next(error);
        }
        if (!error && response.statusCode == 200) {
            res.json(JSON.parse(body));
        }
    });

});

app.get('/api/getPatientDetail', function(req, res, next) {

    var datas = JSON.stringify(req.body);
   var patientId = req.headers['patientid'];
    var options = {
    	uri: 'http://ec2-52-34-194-19.us-west-2.compute.amazonaws.com/FHIRServer/patientRegistration/searchByID?id='+patientId,
        method: 'GET',
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
        body: datas
    };

    request(options, function(error, response, body) {
        if (error) {
            next(error);
        }
        if (!error && response.statusCode == 200) {
            res.json(JSON.parse(body));
        }
    });
    var patientData = {}
});

app.get('/api/getSubCenterDetails', function(req, res, next) {
    var datas = JSON.stringify(req.body);
    var options = {
        uri: 'http://ec2-52-34-194-19.us-west-2.compute.amazonaws.com/FHIRServer/organization/searchAllSC',
        method: 'GET',
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
        body: datas
    };

    request(options, function(error, response, body) {
        if (error) {
            next(error);
        }
        if (!error && response.statusCode == 200) {
            res.json(JSON.parse(body));
        }
    });
});

app.listen(port, function() {
    console.log('app is listening in PORT' + port);
});
