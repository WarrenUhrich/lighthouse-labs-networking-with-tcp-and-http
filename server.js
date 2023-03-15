const net = require('net');
const PORT = 3000; // Ports 0 to 1023 | 3000, 5000, 8080, 8000

const server = net.createServer();

server.listen(PORT, () => {
    console.log('TCP Server is listening on PORT:', PORT);
});

const allConnections = [];

server.on('connection', (connection) => {
    console.log('A client has connected!');

    connection.setEncoding('utf-8');
    
    connection.write('Welcome to the server!'); // Send to client.

    connection.on('data', (clientData) => {
        clientData = clientData.trim(); // Cut off extra spaces at the beginning / end, incl. newlines

        console.log('Data received: ' + clientData);

        if(clientData.startsWith('name:')) {
            const newUsername = clientData.split(':')[1];
            connection.username = newUsername;
            return;
        }

        for(const conn of allConnections) {
            if(conn !== connection) {
                const username = connection.username ? connection.username : 'Guest';
                conn.write(`${username}: ${clientData}`);
            }
        }
    });

    allConnections.push(connection);
});
