const http = require('http');
const hostname = 'localhost';
const port = 5000;

const server = http.createServer((req, res) => {
    console.log(req.headers);

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write('<h1>Hello World!</h1>');
    res.end();
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
});