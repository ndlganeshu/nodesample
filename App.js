const http = require('http');

const server = http.createServer((req,res)=>{
	res.statusCode = 200;
	res.setHeader('Content-Type','text/plain');
	res.end( "hello world");
})
const host = '0.0.0.0';
const port = process.env.PORT || 3000;

server.listen(port ,host,()=>{
	console.log('server started.....')
})
