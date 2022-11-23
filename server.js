const net = require('net');
const PORT = 5000;

const server = net.createServer();

server.listen(PORT, () => {
    console.log('TCP Server is listening on PORT:', PORT);
});

const allConnections = [];

server.on('connection', (connection) => {
    console.log('Client has connected!');
    // console.log(connection);

    connection.setEncoding('utf-8');

    connection.write('Welcome! You have established a connection to the TCP server!');

    connection.on('data', (userInput) => {
        userInput = userInput.trim();

        if (userInput.startsWith('name:')) {
            // name:warren
            // ['name', 'warren']
            const name = userInput.split(':')[1];
            connection.username = name;
            return;
        }

        console.log('Data from Client:', userInput);

        for (const connFromArr of allConnections) {
            if (connFromArr !== connection) {
                const name = connection.username ? connection.username : 'Guest';
                connFromArr.write(`${name}: ${userInput}`);
            }
        }
    });

    allConnections.push(connection);
});
