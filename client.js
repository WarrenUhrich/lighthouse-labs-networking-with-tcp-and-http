const net = require('net');
const config = {
    // host: 'localhost', tcp://6.tcp.ngrok.io:14304
    // port: 3000

    host: '6.tcp.ngrok.io',
    port: 14304
};

const client = net.createConnection(config);

client.setEncoding('utf-8');

client.on('data', (serverData) => {
    console.log(serverData);
});

process.stdin.on('data', (userInput) => {
    client.write(userInput); // Send to server.
});
