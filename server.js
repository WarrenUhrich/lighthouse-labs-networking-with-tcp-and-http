const net = require('net');
const PORT = 5050;

const server = net.createServer();
// console.log(server);

server.listen(PORT, () => {
    console.log('The server is now listening on port:', PORT);
});

server.on('connection', () => {
    console.log('A client has connected to the server.');
});
