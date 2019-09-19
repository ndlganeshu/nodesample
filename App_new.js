var express = require('express');
var app = express();
var mongoose = require('mongoose');
var util = require('util');

// /images/logo.jpg
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('HHello world!');
});

// return the file
app.get('/index.htm', function (req, res) {
    res.sendFile( __dirname + "/" + "index.htm" );
 })
 
 // query params
 app.get('/process_get', function (req, res) {
    // Prepare output in JSON format
    response = {
       first_name:req.query.first_name,
       last_name:req.query.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
 })

app.get('/bob', (req, res) => {
  var txt = 'Hello %s from bob'
  res.send(util.format(txt,'Ganesh'));
});

// /user/Ganesh
app.get('/user/:name', (req, res) => {
  res.send('HHello '+ req.param('name')+'!');
});

var uristring =
  process.env.MONGOLAB_URI ||
  process.env.MONGOHQ_URL ||
  'mongodb+srv://ganesh:ganeshdb@mytestcluster-ed0df.mongodb.net/test';

app.get('/connectmgdb', (req, res) => {
  mongoose.connect(uristring, function(err, res1) {
    if (err) {
      res.send('ERROR connecting to: ' + uristring + '. ' + err);
    } else {
      res.send('Succeeded connected to: ' + uristring);
    }
  });
});

const port = process.env.PORT || 3000;

var server = app.listen(port, () => {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at https://%s:%s', host, port);
});
