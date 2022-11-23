const net = require('net');

const config = {
    host: 'localhost', // '127.0.0.1'
    port: 5000
};

const client = net.createConnection(config);

client.setEncoding('utf-8');

client.on('data', (data) => {
    console.log('Data from Server:', data);
});

process.stdin.on('data', (userInput) => {
    client.write(userInput);
});
