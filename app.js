var express = require('express');
var path    = require('path');
var app     = express();


var port = process.env.PORT || 5000;

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/dist'));

app.get('/', function(req, res) {
    //res.sendFile(path.join(__dirname + '../../../dist/index.html'));
    res.render('index');
}
);

app.listen(port, function() {
    console.log('app is listening in port *heroku*..!.');
});
