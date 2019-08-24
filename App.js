const http = require('http');
var mongoose = require ("mongoose");

const server = http.createServer((req,res)=>{
	res.statusCode = 200;
	res.setHeader('Content-Type','text/plain');
	res.end( "hello world111");
})
const host = '0.0.0.0';
const port = process.env.PORT || 3000;

server.listen(port ,host,()=>{
	console.log('server started.....')
})

var uristring =
process.env.MONGOLAB_URI ||
process.env.MONGOHQ_URL ||
'mongodb+srv://ganesh:ganeshdb@mytestcluster-ed0df.mongodb.net/test';

mongoose.connect(uristring, function (err, res) {
    if (err) {
    console.log ('ERROR connecting to: ' + uristring + '. ' + err);
    } else {
    console.log ('Succeeded connected to: ' + uristring);
    }
  });
