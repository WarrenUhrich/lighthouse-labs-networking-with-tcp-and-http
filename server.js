const net = require('net');
const port = 3000;

const server = net.createServer();

server.on('connection', () => {
    console.log('A client has connected.');
});

server.listen(port, () => {
    console.log(
        'Server is listening on port:'
        + port
    );
});
