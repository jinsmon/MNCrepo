/*eslint no-console: 0*/

'use strict';

var express = require('express');
var path    = require('path');
var app     = express();

app.use(express.static(__dirname + '../../../dist/'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '../../../dist/index.html'));
}
);

app.listen(3000, function() {
    console.log('app is listening in port 3000..!.');
});
