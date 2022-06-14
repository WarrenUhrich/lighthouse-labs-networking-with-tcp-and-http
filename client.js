const net = require('net');

const config = {
    host: '4.tcp.ngrok.io',
    port: 17514
};

const client = net.createConnection(config);

client.setEncoding('utf-8');
