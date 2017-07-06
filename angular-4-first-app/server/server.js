"use strict";
var express     = require('express'),
    bodyParser  = require('body-parser'),
    fs          = require('fs'),
    app         = express()/*,
    customers   = JSON.parse(fs.readFileSync('data/customers.json', 'utf-8')),
    states      = JSON.parse(fs.readFileSync('data/states.json', 'utf-8'))*/;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Would normally copy necessary scripts into src folder (via grunt/gulp) but serving
//node_modules directly to keep everything as simple as possible

//The src folder has our static resources (index.html, css, images)
//app.use(express.static(__dirname + './')); 
app.use('/', express.static(__dirname + '/../web'));
app.use('/node_modules', express.static(__dirname + '/../../node_modules'));


// redirect all others to the index (HTML5 history)
app.all('/*', function(req, res) {
    res.sendFile('index.html',{root : __dirname + '/../web/'});
});

app.listen(8085);

console.log('Express listening on port 8085.');

//Open browser
var opn = require('opn');

/*opn('http://localhost:8085').then(() => {
    console.log('Browser closed.');
});*/


