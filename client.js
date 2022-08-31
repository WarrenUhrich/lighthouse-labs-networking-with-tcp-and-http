const net = require('net');

const config = {
    host: 'localhost', // 127.0.0.1
    port: 5050
};

// const config = {
//     host: '2.tcp.ngrok.io',
//     port: '18683'
// };

const client = net.createConnection(config);

client.setEncoding('utf-8');

client.on('data', (data) => {
    console.log(data);
});

client.write('Hello, I am the client!');

// Standard input from Node.js
// When you type into terminal and hit enter.
process.stdin.on('data', (userMessage) => {
    client.write(userMessage);
});
