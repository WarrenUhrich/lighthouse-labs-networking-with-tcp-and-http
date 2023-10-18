const net = require('net');
const config = {
    // port: 5555,
    // host: 'localhost'
    // 8.tcp.ngrok.io:17314
    host: '8.tcp.ngrok.io',
    port: 17314
};

const client = net.createConnection(config);

client.setEncoding('utf-8');

client.on('data', (serverData) => {
    console.log(serverData);
});

// When we type into our terminal, and hit ENTER, this event fires!
process.stdin.on('data', (userInput) => {
    client.write(userInput); // Send what user typed to the server.
});
