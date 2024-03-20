const net = require('net');

const config = {
    port: 5555,
    host: 'localhost', // '127.0.0.1'
    // tcp://4.tcp.us-cal-1.ngrok.io:10097
    // port: 10097,
    // host: '4.tcp.us-cal-1.ngrok.io'
};

const client = net.createConnection(config);

client.setEncoding('utf-8');
client.on('data', (serverData) => {
    console.log(serverData);
});

// When we type into our terminal and hit enter, this event fires:
process.stdin.on('data', (userInput) => {
    client.write(userInput); // Write to the SERVER!
});
