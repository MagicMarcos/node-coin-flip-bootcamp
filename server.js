const http = require('http');
const fs = require('fs');
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet');

const server = http.createServer(function (req, res) {
	const page = url.parse(req.url).pathname;
	const params = querystring.parse(url.parse(req.url).query);
	console.log(page);
	if (page == '/') {
		fs.readFile('index.html', function (err, data) {
			res.writeHead(200, { 'Content-Type': 'text/html' });
			res.write(data);
			res.end();
		});
	} else if (page == '/css/style.css') {
		fs.readFile('css/style.css', function (err, data) {
			res.write(data);
			res.end();
		});
	} else if (page == '/js/main.js') {
		fs.readFile('js/main.js', function (err, data) {
			res.writeHead(200, { 'Content-Type': 'text/javascript' });
			res.write(data);
			res.end();
		});
	} else if (page == '/api') {
		res.writeHead(200, { 'Content-Type': 'application/json' });
		function objToJson() {
			const flip = Math.ceil(Math.random() * 2);
			console.log(flip);
			if (flip === 1) {
				return 'heads';
			} else if (flip === 2) {
				return 'tails';
			}
		}
		res.end(JSON.stringify(objToJson()));
	} else {
		figlet('404!!', function (err, data) {
			if (err) {
				console.log('Something went wrong...');
				console.dir(err);
				return;
			}
			res.write(data);
			res.end();
		});
	}
});

server.listen(7500);
