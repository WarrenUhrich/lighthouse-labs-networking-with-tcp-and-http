const net = require('net');

const config = {
    host: '4.tcp.ngrok.io',
    port: 17514
};

const client = net.createConnection(config);

client.setEncoding('utf-8');

// Enter data, press enter to sent to server.
process.stdin.on('data', (data) => {
    client.write(data);
});

// Read data coming from the server.
client.on('data', (data) => {
    console.log(data);
});
