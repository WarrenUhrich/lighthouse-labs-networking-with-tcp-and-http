const net = require('net');

const config = {
    host: 'localhost', // '127.0.0.1'
    port: 5000
    // host: '6.tcp.ngrok.io',
    // port: 11872
};

const client = net.createConnection(config);

client.setEncoding('utf-8');

client.on('data', (data) => {
    console.log(data);
});

process.stdin.on('data', (userInput) => {
    client.write(userInput);
});
