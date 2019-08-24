var express = require('express');
var app = express();

app.get('/', (req, res) => {
    res.send('HHello world!');
});

app.get('/bob', (req, res) => {
    res.send('HHello bob!');
});

const port = process.env.PORT || 3000;

var server = app.listen(port, ()=>{
    var host = server.address().address
    var port = server.address().port
    console.log('Example app listening at https://%s:%s', host, port);
})