const net = require('net');

// tcp://8.tcp.ngrok.io:13299
const config = {
    host: 'localhost', // 127.0.0.1
    port: 6200
    // host: '8.tcp.ngrok.io',
    // port: 13299
};

const client = net.createConnection(config);

client.setEncoding('utf-8');

client.on('data', (data) => {
    console.log(data);
});

process.stdin.on('data', (userInput) => {
    client.write(userInput);
});
