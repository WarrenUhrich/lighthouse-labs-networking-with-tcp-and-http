# Lighthouse Labs | Networking with TCP and HTTP

* [ ] Networking and Protocols
* [ ] TCP
* [ ] HTTP Fundamentals
* [ ] TCP Demo via NodeJS

## Client-Server Model

* Two ends to communication (client, and a server)
* Servers have an application with features or data that clients want access to
* Common examples includes:
  * Two computers on a network
  * Computer and a printer on a network
  * A computer equipped with a web browser connecting to a server (like Google) asking for a web page

## Internet Protocol (IP)

Unique identifiers for each device on a network. In a local network, IP addresses are often assigned by the router.

Two standard formats for IP addresses now:

* IPv4: 192.168.0.11
* IPv6: 2001:db8:3333:4444:5555:6666:7777:8888

## Ports

With the great number of connections that often occur between devices, ports help us keep track of which are which, and for what purpose a communication is being made.
  * 20 FTP data transfer (File Transfer Protocol)
  * 21 FTP commands
  * 22 SSH / SFTP (Secure SHell / Secure File Transfer * Protocol)
  * 25 Simple Mail Transfer Protocol sending mails (SMTP)
  * 53 DNS (Domain Name System)
  * 80 HTTP (HyperText Transfer Protocol)
  * 110 POP3 receiving mails (Post Office Protocol)
  * 194 IRC (Internet Relay Chat)
  * 443 HTTPS (HyperText Transfer Protocol Secure) over * TLS (Transport Layer Security) or SSL (Secure Socket * Layer)
  * 5432 PG (PostgreSQL)

## Transport Layers

We have protocols that breakup data transfer into smaller "packets" that can be more easily delivered over a network. Each packet typically has some sort of a header (this might describe the packet's size, origin, and destination, for example.) Think of a packet header like an envelope! An outgoing and return address.

### User Datagram Protocol (UDP)

* Small header size (8 bytes) which results in smaller total packet sizes
* Considered "connectionless," no need to establish an agreed, ongoing connection between parties
* No error recovery (corrupted or missing packets are ignored and discarded)
* This is great for low-latency data, that just needs to send!
* Used in things like...
  * Online Radio
  * Live Video Streams
  * Some online games

### Transmission Control Protocol (TCP)

* Larger header size (20 bytes)
* TCP requires formal connection (3-way handshake) to confirm and maintain both sender and recipient (connection-oriented)
* Corrupted packets are reported to the server so corrections can be re-sent
* Packets arrive in-order
* Useful for guaranteed communication - FTP, transferring files

## HyperText Transfer Protocol (HTTP)

* An application-based layer built on-top of TCP
* Request-response communication style - server waits for requests, receives, sends, and the comm. is done
* HTTP is considered "stateless", there is no ongoing or maintained session, each request is handled fresh - no idea of the history from any individual client
* Routes to resources are made up of two core components:
  1. VERB
  2. PATH

GET /search?q=JavaScript # if a form is submitted, contents appear in the address

POST /sign-in # if a form is submitted, contents appear in the request body

#### Status Codes

    100-199 represent information.
    200-299 represent a success.
    300-399 represent a redirection.
    400-499 represent client errors.
    500-599 represent server errors.

    102: Processing
    200: OK
    301: Permanent Redirect
    302: Temporary Redirect
    400: Bad Request
    403: Forbidden
    404: File/Page/Resource not Found
    418: I'm a Teapot
    500: Internal Server Error
    503: Service Unavailable

