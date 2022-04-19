const net = require('net');
const port = 3000;

const server = net.createServer();

const connections = [];

server.on('connection', (connection) => {
    connection.setEncoding('utf-8');

    // console.log('A client has connected.');
    connections.push(connection);

    // Listen for data writes from clients.
    connection.on('data', (data) => {
        console.log(
            'A client submitted:'
            + data
        );

        // Sets name if pattern matches:
        // name: Warren
        if (data.startsWith('name:')) {
            data = data + ' ';
            const name = data.split(' ')[1];
            console.log(name);
            return connection.username = name;
        }

        for (const conn of connections ) {
            if (conn !== connection && !conn._writableState.finished) {
                const name = typeof connection.username !== 'undefined' ? connection.username.trim() : 'Client';
                conn.write(
                    name
                    + ' says: '
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
