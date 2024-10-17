var path = require('path');
var express = require('express');
var app = require('express')();
var http = require('http').Server(app);
var cors = require('cors')
//Configure port
var port=8080;

//App directories
var PROJECT_DIR = path.normalize(__dirname);

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:8080'); // Specific origin
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'); // Allowed methods
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Allowed headers
    next();
});


app.get('/', function (req, res) {
    res.send('Hello World!');
  });

app.use('/',express.static(path.join(PROJECT_DIR, '')));

http.listen(port, function(){
    console.log('Sample Application runnning at http://localhost:'+port+'/UI');
});
