const net = require('net');
const PORT = 5000;

const server = net.createServer();

server.listen(PORT, () => {
    console.log('TCP Server is listening on PORT:', PORT);
});

server.on('connection', () => {
    console.log('Client has connected!');
});
