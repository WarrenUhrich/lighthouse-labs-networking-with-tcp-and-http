const net = require('net');
const PORT = 5050;

const server = net.createServer();
// console.log(server);

server.listen(PORT, () => {
    console.log('The server is now listening on port:', PORT);
});

const allConnections = [];

server.on('connection', (connection) => {
    console.log('A client has connected to the server.');

    connection.setEncoding('utf-8');

    connection.write('You have successfully connected to our Lighthouse TCP test server!');

    connection.on('data', (data) => {
        console.log(data.trim());

        if (data.trim().startsWith('name: ')) {
            const name = data.trim().split(' ')[1];
            return connection.username = name;
        }

        for (const conn of allConnections) {
            if (conn !== connection && !conn._writableState.finished) {
                if (connection.username) {
                    conn.write(`${connection.username.trim()}: ${data.trim()}`);
                } else {
                    conn.write(`Unknown: ${data.trim()}`);
                }
            }
        }
    });

    allConnections.push(connection);
});
