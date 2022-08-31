const net = require('net');

// const config = {
//     host: 'localhost', // 127.0.0.1
//     port: 5050
// };

const config = {
    host: '2.tcp.ngrok.io',
    port: '18683'
};

const client = net.createConnection(config);