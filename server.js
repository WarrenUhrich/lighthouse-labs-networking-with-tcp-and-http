const net = require('net');
const PORT = 3000; // Ports 0 to 1023 | 3000, 5000, 8080, 8000

const server = net.createServer();

server.listen(PORT, () => {
    console.log('TCP Server is listening on PORT:', PORT);
});

server.on('connection', () => {
    console.log('A client has connected!');
});
