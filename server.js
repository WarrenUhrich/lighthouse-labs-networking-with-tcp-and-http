const net = require('net');
const PORT = 6200;

const server = net.createServer();
// console.log(server);

server.listen(PORT, () => {
    console.log('TCP Server running on port:', PORT);
});

server.on('connection', (connection) => {
    console.log('A client has connected!');

    connection.setEncoding('utf-8');
    connection.write('You have connected to the server successfully!');

    connection.on('error', () => {
        console.log('Connection error.');
    });
});
