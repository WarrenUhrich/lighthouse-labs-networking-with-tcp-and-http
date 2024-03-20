const net = require('net'); // Bring in networking features from NodeJS!
const PORT = 5555; // Remember 0-1023 are usually reserved.

const server = net.createServer();

server.listen(PORT, () => {
    console.log('TCP server is now listening!');
});

const allConnections = [];

server.on('connection', (connection) => {
    console.log('A client has connected!');

    connection.setEncoding('utf-8');
    connection.write('Welcome to the TCP server!');

    // When the client writes to us, the server:
    connection.on('data', (clientData) => {
        clientData = clientData.trim(); // Remove extra new-lines.
        console.log('client:', clientData);

        // If the user types in name: MyName
        if(clientData.startsWith('name: ')) {
            let newUsername = clientData.slice(6);
            connection.username = newUsername;
            return; // Don't continue.
        }

        // Send message to all clients (except the client who wrote this message.)
        for(const client of allConnections) {
            if(client !== connection) {
                const username = connection.username ? connection.username : 'Guest';
                client.write(`${username}: ${clientData}`);
            }
        }
    });

    allConnections.push(connection);
});
