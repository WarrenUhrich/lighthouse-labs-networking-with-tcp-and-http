const net = require('net');
const PORT = 5000;

const server = net.createServer();

server.listen(PORT, () => {
    console.log('TCP Server is listening on PORT:', PORT);
});

server.on('connection', (connection) => {
    console.log('Client has connected!');

    connection.setEncoding('utf-8');

    connection.write('Welcome! You have established a connection to the TCP server!');

    connection.on('data', (userInput) => {
        console.log('Data from Client:', userInput);
    });
});
