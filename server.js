const http = require('http');
const app = require('./appRest');

const port = process.env.port || 3000

const server = http.createServer(app);

server.listen(port);