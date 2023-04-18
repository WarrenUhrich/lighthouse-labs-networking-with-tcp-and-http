const net = require('net');
const PORT = 3000; // Avoid 0 to 1023, aim for higher numbers

const server = net.createServer();

server.listen(PORT, function() {
    console.log('TCP Server listening on:', PORT);
});

const allConnections = [];

server.on('connection', function(connection) {
    console.log('A client has connected!');

    connection.setEncoding('utf-8');

    connection.write('Welcome to the server!');

    connection.on('data', function(clientData) {
        clientData = clientData.trim();

        console.log('Client Data Received:', clientData);

        if(clientData.startsWith('name:')) {
            let newUsername = clientData.split(':')[1];
            newUsername = newUsername.trim();
            connection.username = newUsername;
            return;
        }

        for(const currentConn of allConnections) {
            if(currentConn !== connection) {
                const username = connection.username ? connection.username : 'Guest';
                currentConn.write(`${username}: ${clientData}`);
            }
        }
    });

    allConnections.push(connection);
});
