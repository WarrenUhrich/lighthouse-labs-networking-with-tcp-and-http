const net = require('net');
const config = {
    host: 'localhost',
    port: 3000
};

const client = net.createConnection(config);

client.setEncoding('utf-8');

client.on('data', (serverData) => {
    console.log(serverData);
});

process.stdin.on('data', (userInput) => {
    client.write(userInput); // Send to server.
});
