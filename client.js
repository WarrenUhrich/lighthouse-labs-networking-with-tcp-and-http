const net = require('net');

const config = {
    host: 'localhost',
    port: 3000
};

const client = net.createConnection(config);

client.setEncoding('utf-8');

// Read data from server!
client.on('data', (data) => {
    console.log(data); // Output data from server.
});

// Read terminal submission; send to server.
process.stdin.on('data', (data) => {
    client.write(data);
});
