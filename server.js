const app = require('express')();
const server = require('http').createServer(app);
const express= require('express');

process.env.PWD = process.cwd();
app.use(express.static(process.env.PWD + '/img'));

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/html/index.html');
});

app.get('/c', (req, res) => {
  i = req.query.l;
  if(i == 2)res.sendFile(__dirname + '/html/c/c2.html');
  else if(i == 3) res.sendFile(__dirname + '/html/c/c3.html');
	else if(i == 4) res.sendFile(__dirname + '/html/c/c4.html');
	else if(i == 5) res.sendFile(__dirname + '/html/c/c5.html');
	else if(i == 6) res.sendFile(__dirname + '/html/c/c6.html');
	else if(i == 7) res.sendFile(__dirname + '/html/c/c7.html');
	else if(i == 8) res.sendFile(__dirname + '/html/c/c8.html');
	else if(i == 9) res.sendFile(__dirname + '/html/c/c9.html');
	else if(i == 10) res.sendFile(__dirname + '/html/c/c10.html');
	else if(i == 11) res.sendFile(__dirname + '/html/c/c11.html');
	else res.sendFile(__dirname + '/html/c/c.html');
});

server.listen(80,function(){
	console.log("Server is running");
});
