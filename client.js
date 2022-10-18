const net = require('net');

const config = {
    host: 'localhost', // 127.0.0.1
    port: 6200
};

const client = net.createConnection(config);
