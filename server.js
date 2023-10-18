const net = require('net');
const PORT = 5555; // 1 - 1023 - system ports / reserved.

const server = net.createServer();

server.listen(PORT, () => {
    console.log('TCP Server is listening on port:', PORT);
});

const allConnections = [];

server.on('connection', (connection) => {
    console.log('A client has connected!');

    connection.setEncoding('utf-8');

    connection.write('Welcome to our server!');

    connection.on('data', (clientData) => {
        clientData = clientData.trim();

        console.log('client:', clientData);

        if(clientData.startsWith('name:')) {
            let newUsername = clientData.split(':')[1];
            newUsername = newUsername.trim();
            connection.username = newUsername;
            return; // Don't continue down to the loop, we don't need to send this.
        }

        for(const conn of allConnections) {
            if(conn !== connection) {
                const username = connection.username ? connection.username : 'Guest';
                conn.write(`${username} says: ${clientData}`);
            }
        }
    });

    allConnections.push(connection);
});
