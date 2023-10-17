const net = require('net');
const PORT = 7070; // 0 to 1023 are system or reserved ports

const server = net.createServer();
// console.log(server);

server.listen(PORT, () => {
    console.log('TCP server is listening on port:', PORT);
});

const allConnections = [];

server.on('connection', (connection) => {
    console.log('A client has connected!');
    // console.log('connection', connection);

    connection.setEncoding('utf-8');

    connection.write('Welcome to the server!');
    
    connection.on('data', (clientData) => {
        clientData = clientData.trim();
        console.log('clientData', clientData);

        if(clientData.startsWith('name:')) {
            let newUsername = clientData.split(':')[1];
            newUsername = newUsername.trim();
            connection.username = newUsername;
            return; // Stop here, don't loop and send.
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
