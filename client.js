const net = require('net');

const config = {
    host: 'localhost',
    port: 3000
};

const client = net.createConnection(config);

client.setEncoding('utf-8');
