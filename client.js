const net = require('net');
const config = {
    // host: 'localhost',
    // port: 3000
    host: '8.tcp.ngrok.io',
    port: '13917'
};

const client = net.createConnection(config);

client.setEncoding('utf-8');

client.on('data', function(serverData) {
    console.log(serverData);
});

process.stdin.on('data', function(userInput) {
    client.write(userInput); // Send user input to server.
});
