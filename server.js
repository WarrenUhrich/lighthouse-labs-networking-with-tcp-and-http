const net = require('net');
const port = 3000;

const server = net.createServer();

const connections = [];

server.on('connection', (connection) => {
    // console.log('A client has connected.');
    connections.push(connection);

    connection.setEncoding('utf-8');

    // Listen for data writes from clients.
    connection.on('data', (data) => {
        for (const conn of connections ) {
            if (conn !== connection && !conn._writableState.finished) {
                conn.write(
                    'Client says: '
                    + data.trim()
                );
            }
        }
    });
});

server.listen(port, () => {
    console.log(
        'Server is listening on port:'
        + port
    );
});
