const net = require('net');
const config = {
    port: 7070,
    host: 'localhost'
    // tcp://4.tcp.ngrok.io:10942
    // host: '4.tcp.ngrok.io',
    // port: 10942
};

const client = net.createConnection(config);

client.setEncoding('utf-8');

// When I type into client and hit enter, this event runs...
process.stdin.on('data', (userInput) => {
    client.write(userInput); // Send text to server...
});

client.on('data', (serverData) => {
    console.log(serverData);
});
