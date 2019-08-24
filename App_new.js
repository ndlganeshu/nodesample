var express = require('express');
var app = express();
var mongoose = require('mongoose');

app.get('/', (req, res) => {
  res.send('HHello world!');
});

app.get('/bob', (req, res) => {
  res.send('HHello bob!');
});

// /user/Ganesh
app.get('/user/:name', (req, res) => {
  res.send('HHello ', req.param('name'),'!');
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
