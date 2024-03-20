# Lighthouse Labs | Networking with TCP and HTTP

[GitHub Repository Branch](https://github.com/WarrenUhrich/lighthouse-labs-networking-with-tcp-and-http/tree/2024.03.19-web-flex-eve-19february2024) | [Vimeo Video Recording](https://vimeo.com/925239594/72dfae0da9?share=copy)

* [X] Networking and Protocols
* [X] TCP
* [X] HTTP Fundamentals
* [X] TCP Demo via NodeJS

## To Run This Example

This project is one server, that can handle connections from one or more clients. It is a demonstration of TCP connections in a simple chat application.

```bash
# In one terminal, enter the project and run:
node server.js

# In another terminal (or terminals), enter the project and run:
node client.js
```

If you'd like to open your server up to the internet, consider looking into [ngrok](https://ngrok.com/). *Please ensure you take potential security concerns of opening up your application to the internet into account before trying this.*

## HTTP Request Essentials

* The path that a request typically goes through in most home or office settings:
    * Browser -> Computer -> Router -> ISP -> DNS -> (Cloud / Internet Nodes) -> Web Server
* HTTP port is :80

![Network and Web Request Diagram](https://github.com/WarrenUhrich/lighthouse-labs-networking-with-tcp-and-http/blob/2022.06.14-web-flex-day-16may2022/networking-diagram.png?raw=true)

* Anatomy of a Domain
    * HTTP -> Protocol
    * mobile -> Sub-domain
    * duckduckgo -> Domain
    * com -> Top level domain
    * /search?q=JavaScript+MDN -> Resource
        * ?q=JavaScript+MDN -> Query parameters
            * q -> Key
            * JavaScript+MDN -> Value
            * & -> Tells us there is a new key-value pair
    * :80 -> Port

![Anatomy of a Web Address Diagram](https://github.com/WarrenUhrich/lighthouse-labs-networking-with-tcp-and-http/blob/2022.06.14-web-flex-day-16may2022/domain-anatomy.png?raw=true)

## Client-Server Model

* There are two ends to the communication in a server / client connection.
* Servers have an application with features or data that clients want access to.
* Common examples include a printer that computers on a local network need to connect to, or a web-server that phones equipped with web browsers would like to request web pages from. 

### Internet Protocol

Internet Protocol addresses are unique identifiers for each device on a network (computer, tablet, phone, security camera, etc.) Typically your device will be assigned one by your local router, so that it can be identified and easily communicate both with the router and other local devices in the home or office. Beyond that, your modem / router will usually be assigned an external address for interfacing for the world wide web at large.

Standard formats include:

* IPv4: 192.168.11
* IPv6: 2001:db8:3333:4444:5555:6666:7777:8888

Note that because IPv4 maximum number of unique addresses caps between four and five billion, we've had need for IPv6 and its incredible multi-undecillion count of possible addresses.

### Ports

Think about how many connections featuring both requests and expected responses a device may require at any given moment. Between concious actions like browsing the web, running a system update, or downloading an application, and background operations like checking the current date and time for your timezone, checking for updates for your existing applications, and querying an e-mail server to see if you have any new mail, there could be any number of connections starting, stopping, or being maintained second-to-second.

How does a device keep each of these straight!? This is where ports come in. So there is no unexpected criss-cross of data, or confusion as to which network response is intended for which program, applications will listen only on specific ports. There are 65,356 ports available; ports 0 to 1023 are more well-known, considered standard system ports (they often require superuser priveleges on Unix-based systems.)

To help out developers of both hardware and software alike, there are many standardized ports that are expected for certain types of applications and certain types of web traffic:

* 20 FTP data transfer (File Transfer Protocol)
* 21 FTP commands
* 22 SSH / SFTP (Secure SHell / Secure File Transfer Protocol)
* 25 Simple Mail Transfer Protocol sending mails (SMTP)
* 53 DNS (Domain Name System)
* 80 HTTP (HyperText Transfer Protocol)
* 110 POP3 receiving mails (Post Office Protocol)
* 194 IRC (Internet Relay Chat)
* 443 HTTPS (HyperText Transfer Protocol Secure) over TLS (Transport Layer Security) or SSL (Secure Socket Layer)
* 5432 PG (PostgreSQL)

The above are just the tip of the iceberg when it comes to the ports used by the device you're on right now! However, as it pertains to a web developer, we often only need to worry about a small handful of these.

### Transport Layers

Specifically, we spend a lot of time making use of [transport layer](https://en.wikipedia.org/wiki/Transport_layer) protocols.

These break up data transfer into "packets" that can be delivered over a network. Each packet has a header, or set thereof, describing its origin, intended destination, and often other details about data.

## [User Datagram Protocol (UDP)](https://en.wikipedia.org/wiki/User_Datagram_Protocol)

* Small header size (8 bytes) which results in smaller packet size.
* Considered "[connectionless](https://en.wikipedia.org/wiki/Connectionless_communication)," there is no need to establish or maintain an on-going connection over time.
* No error recovery (corrupted packets are discarded.)
* This is great for low-latency data that just needs to send, it is common for streaming as you just want a picture *now* even if there is occasional loss of data / distortion.

## [Transmission Control Protocol (TCP)](https://en.wikipedia.org/wiki/Transmission_Control_Protocol)

* Larger header size than UDP (20 bytes.)
* This requires a formal connection (3-way handshake) to confirm and maintain the sender and recipient; it is [connection-oriented](https://en.wikipedia.org/wiki/Connectionless_communication).
* Corrupted packets are reported to the server and re-sent to ensure the full data-set is sent correctly.
* Packets arrive in-order.
* Useful for guaranteed communication in needed... consider downloading a file.

## [Hypertext Transfer Protocol (HTTP)](https://en.wikipedia.org/wiki/Transport_layer)

* This is an application-based layer built on top of TCP—data sent across the web must be sent in full, error-free.
* It is a protocol describing how messages are to be formatted and transmitted.
* [Request-response](https://en.wikipedia.org/wiki/Request%E2%80%93response) communication; that is to say, your web browser must first make a request to a server and expect a response if it is available.
* HTTP is a [stateless protocol](https://en.wikipedia.org/wiki/Stateless_protocol), a formal "session" is not maintained by HTTP, so an ongoing status or data is not kept track of between requests. There is no "memory" of any previous communication. *In contrast, **FTP** is **stateful**; the server tracks what has been done in previous requests and can take actions based on knowledge of the active session.*
* Routes to resources are made up of method (verb) and a path.
* All HTTP responses are expected to be accompanied by a [status code](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes).
* Response headers contain information about the response... Think size of data to transfer, file name if it is a download, content-type (HTML, image, video, audio, etc.) and more.

### Methods

The only methods formally supported include GET and POST.

* GET descibes a request for information.
* POST is intended to post, or send, information in your request.

Using these, there are other method verbs we can spoof for use in applications:

* GET, POST, PUT, PATCH, DELETE

Luckily for web applications, they also happen to match just about perfectly to CRUD operations!

* CREATE = POST
* READ = GET
* UPDATE = PUT/PATCH
* DELETE = DELETE

### Paths

Paths are an address representing a resource (data, or a file.) Think `/users/`, `/dinosaurs/`, or a more "specific" path like `user/3`, `/dinosaur/tyrannosaurus` or `/images/porsche.jpg`.

A common architecture followed by a lot of software using HTTP in order to achieve the appearance of state in their application, and provide more predictable/reliable use of methods and paths to their users, is called [representational state transfer (REST)](https://en.wikipedia.org/wiki/Representational_state_transfer).

### [HTTP Status Codes](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes)

A status code communicates what occurred when a request was made. It can be important for software, or people, to know and understand what happened so that they can understand the content of the response.

Status codes ranges:

  * 100-199 represent information.
  * 200-299 represent a success.
  * 300-399 represent a redirection.
  * 400-499 represent client errors.
  * 500-599 represent server errors.

You've likely encountered web pages that either display a number in these ranges, or have prompted your browser to display a message explaining one of these situations. Some that you may have engaged with during regular browsing include:

* `102: Processing`
* `200: OK`
* `301: Permanent Redirect`
* `302: Temporary Redirect`
* `400: Bad Request`
* `403: Forbidden`
* `404: File/Page/Resource not Found`
* `418: I'm a Teapot`
* `500: Internal Server Error`
* `503: Service Unavailable`

## Time to put this Knowledge into Practice!

When working on a Node-powered HTTP server, the default option available out-of-the-box to format and send responses is its [`http` module](https://nodejs.dev/learn/the-nodejs-http-module). For listening for requests and sending requests on a more basic level, you will want to instead make use of NodeJS' [`net` module](https://nodejs.org/api/net.html).

Let's try one of these out; create a file called `server.js` and populate it so:

***server.js***

```JavaScript
const net = require('net');
const port = 54321;

const server = net.createServer();

console.log(server);
```

With your log you can confirm that the module is loading correctly, and see what the server object looks like. Now let's run the server and confirm that it operates!

### Listening for Traffic (Server)

```JavaScript
const net = require('net');
const port = 54321;

const server = net.createServer();

server.listen(port, () => {
  console.log(`The server is listening on port:${port}`);
});
```

Executing the file now, we can see that the server runs, and actively waits for incoming requests (the terminal remains occupied.) Remember that HTTP is a request-response protocol. Servers wait for requests... and only after receiving one, do they send an appropriate response.

### Sending a Request (Client)

Create a new file called `client.js`, and we'll see if we can connect to our server.

***client.js***

```JavaScript
const net = require('net');

const config = {
  host: 'localhost', // Or external URL.
  port: '54321'
};

const client = net.createConnection(config);
```

***server.js***

```JavaScript
const net = require('net');
const port = 54321;

const server = net.createServer();

server.on('connection', () => {
  console.log('A new client has connected!');
});

server.listen(port, () => {
  console.log(`The server is listening on port:${port}`);
});
```

Running the server, followed by the client file (in a different terminal tab or window), should result in your server reporting when a client connects!

### Sending, and Receiving, Data

***client.js***

```JavaScript
const net = require('net');

const config = {
  host: 'localhost', // Or external URL.
  port: '54321'
};

const client = net.createConnection(config);

client.setEncoding('utf-8');

client.on('data', (messageFromServer) => {
  console.log('The server says:', messageFromServer);
});

client.write('Hello server; I am the client!');
```

***server.js***

```JavaScript
const net = require('net');
const port = 54321;

const server = net.createServer();

server.on('connection', (connection) => {
  console.log('A new client has connected!');

  connection.write('Hello, Client; I am the server!');

  connection.on('data', (messageFromClient) => {
    console.log('The client says:', messageFromClient);
  });

  connection.setEncoding('utf-8');
});

server.listen(port, () => {
  console.log(`The server is listening on port:${port}`);
});
```

We should now see output on both terminals when running these files... proof that they're communicating!

### Accepting User Input in the Client

***client.js***

```JavaScript
const net = require('net');

const config = {
  host: 'localhost', // Or external URL.
  port: '54321'
};

const client = net.createConnection(config);

client.setEncoding('utf-8');

client.on('data', (messageFromServer) => {
  console.log('The server says:', messageFromServer);
});

client.write('Hello server; I am the client!');

// Read terminal line in; send string to server.
process.stdin.on('data', (data) => {
  client.write(data);
});
```

***server.js***

```JavaScript
const net = require('net');
const port = 54321;

const server = net.createServer();

const connections = []; // Array for storing each individidual connection object.

server.on('connection', (connection) => {
  console.log('A new client has connected!');

  connection.write('Hello, Client; I am the server!');

  connections.push(connection); // Add connection to array.

  connection.on('data', (messageFromClient) => {
    console.log('The client says:', messageFromClient);

    // Loop through connections.
    for (const con of connections) {
      // Avoid duplicates; ensure connection is open and writable.
      if (con !== connection && !con._writableState.finished) {
        con.write(messageFromClient.trim());
      }
    }
  });

  connection.setEncoding('utf-8');
});

server.listen(port, () => {
  console.log(`The server is listening on port:${port}`);
});
```

Wow, almost a whole chatroom now!! With a few tweaks we can improve this a bit by letting users set a name via a simple terminal command; this way we can display their names along with their messages. Let's also remove extra text on the client side, to make our output a little cleaner.

***client.js***

```JavaScript
const net = require('net');

const config = {
  host: 'localhost', // Or external URL.
  port: '54321'
};

const client = net.createConnection(config);

client.setEncoding('utf-8');

client.on('data', (messageFromServer) => {
  // Remove the "server says" text now that we have names.
  console.log(' > ', messageFromServer);
});

client.write('Hello server; I am the client!');

// Read terminal line in; send string to server.
process.stdin.on('data', (data) => {
  client.write(data);
});
```

***server.js***

```JavaScript
const net = require('net');
const port = 54321;

const server = net.createServer();

const connections = [];

server.on('connection', (connection) => {
  console.log('A new client has connected!');

  connection.write('Hello, Client; I am the server!');

  connections.push(connection);

  connection.on('data', (messageFromClient) => {
    console.log('The client says:', messageFromClient);
    
    // Set name (if provided by client.)
    if (messageFromClient.startsWith('setName:')) {
      const name = messageFromClient.split(' ')[1].trim();
      return connection.username = name;
    }

    for (const con of connections) {
      if (con !== connection && !con._writableState.finished) {

        // Write the name if available.
        if(typeof connection.username !== 'undefined') {
          con.write(`${connection.username} said: ${messageFromClient.trim()}`);
        } else {
          con.write(`Anonymous User said: ${messageFromClient.trim()}`);
        }
        
      }
    }
  });

  connection.setEncoding('utf-8');
});

server.listen(port, () => {
  console.log(`The server is listening on port:${port}`);
});
```

## Resources

* [Wikipedia: Internet Protocol](https://en.wikipedia.org/wiki/Internet_Protocol)
  * [Client-Server Model](https://en.wikipedia.org/wiki/Client%E2%80%93server_model)
  * [List of TCP and UDP port numbers](https://en.wikipedia.org/wiki/List_of_TCP_and_UDP_port_numbers)
  * [[HTTP] Hypertext Transfer Protocol](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol) / [[HTTPS] Hypertext Transfer Protocol Secure](https://en.wikipedia.org/wiki/HTTPS)/[w/[TLS] Transport Layer Security](https://en.wikipedia.org/wiki/Transport_Layer_Security)
  * [[FTP] File Transfer Protocol](https://en.wikipedia.org/wiki/File_Transfer_Protocol)
  * [[SSH] Secure Shell](https://en.wikipedia.org/wiki/Secure_Shell)
  * [[SMTP] Simple Mail Transfer Protocol](https://en.wikipedia.org/wiki/Simple_Mail_Transfer_Protocol)
  * [[IMAP] Internet Message Access Protocol](https://en.wikipedia.org/wiki/Internet_Message_Access_Protocol)
  * [[POP3] Post Office Protocol](https://en.wikipedia.org/wiki/Post_Office_Protocol)
  * [[IRC] Internet Relay Chat](https://en.wikipedia.org/wiki/Internet_Relay_Chat)
  * [[Postgres] PostgreSQL](https://en.wikipedia.org/wiki/PostgreSQL)
* [HTTP Cat (Visual Representation of HTTP Status Codes)](https://http.cat/) / [HTTP Dog (Visual Representation of HTTP Status Codes)](https://http.dog/)
* [Khan Academy: How the Internet Works](https://www.khanacademy.org/computing/computer-science/internet-intro/internet-works-intro/v/the-internet-http-and-html)
* [EVERY Detail: What Happens when you type Google.com in your Address Bar](https://github.com/alex/what-happens-when)
* [ngrok: Getting Started](https://ngrok.com/docs/getting-started)
* [NodeJS `net` Module](https://nodejs.org/api/net.html#net)
* [NodeJS: How do I create a HTTP server?](https://nodejs.org/en/knowledge/HTTP/servers/how-to-create-a-HTTP-server/)
  * [The Node.js `http` module](https://nodejs.dev/learn/the-nodejs-http-module)
* [Complex Requests using CURL in your Terminal](http://curl.haxx.se/docs/httpscripting.html)
* [Postman: an HTTP Client (for HTML; JSON; XML and more!)](http://getpostman.com/)
