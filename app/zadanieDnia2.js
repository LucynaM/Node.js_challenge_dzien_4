//Twój kod

const http = require('http');

const srv = http.createServer((req, res) => {
	const userAgentHeader = req.headers['user-agent'];
	res.setHeader("Content-Type", "text/html; charset=utf-8");
	res.end(userAgentHeader);
});

srv.listen(3000, () => {
	console.log('serwer uruchomiony na porcie 3000');
});