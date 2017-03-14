var express = require('express');
var app = express();
var path = require('path');

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
});

app.get('/script', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/app.min.js'));
});

app.get('/books', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/books.json'));
});

app.listen(666, function() {
    console.log('My app listening on port 666!')
});