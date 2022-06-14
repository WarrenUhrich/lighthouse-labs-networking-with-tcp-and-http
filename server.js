const net = require('net');

const PORT = 3000;

const server = net.createServer();

server.on('connection', (connection) => {
    connection.setEncoding('utf-8');
    console.log('A client connected!');
});

server.listen(PORT, () => {
    console.log(
        'Server listening on port:',
        PORT
    );
});
