# Lighthouse Labs | Networking with TCP and HTTP

[GitHub Repository Branch](https://github.com/WarrenUhrich/lighthouse-labs-networking-with-tcp-and-http/tree/2023.10.17-web-flex-eve-18sept2023) | [Vimeo Video Recording](https://vimeo.com/875430613/f86d5d748c?share=copy)

* [X] Networking and Protocols
* [ ] TCP
* [X] HTTP Fundamentals
* [ ] TCP Demo via NodeJS

https://www.google.com:443/search?q=JavaScript

## IP (Internet Protocol)

Unique identifiers for each device on a network.

* IPv4: 192.168.11.123
* IPv6: 2001:db8:3333:4444:5555:6666:7777:8888

## Ports

* 20 FTP data transfer (File Transfer Protocol)
* 21 FTP commands
* 22 SSH / SFTP (Secure SHell / Secure File Transfer Protocol)
* 25 Simple Mail Transfer Protocol sending mails (SMTP)
* 53 DNS (Domain Name System)
* 80 HTTP (HyperText Transfer Protocol)
* 110 POP3 receiving mails (Post Office Protocol)
* 194 IRC (Internet Relay Chat)
* 443 HTTPS (HyperText Transfer Protocol Secure) over TLS (Transport Layer Security* or SSL (Secure Socket Layer)
* 5432 PG (PostgreSQL)

## Client-Server Model

* There are two ends to communications (server, client)
* Server: are a device or application that has services or data that clients want access to
* Client: a device or application that can be used to access/interact a server
* Examples...
  * A Web Server (like Facebook) and a Web Browser (client)
  * Zoom server and Zoom clients
  * E-mail server (stores emails online) and an e-mail client
  * Printer (server) and our computer (printing software is our client)

## HTTP Methods

* `GET` -> repeatable, bookmarkable, any info is in the address - "default"
* `POST` -> one-time event, info is in the body of the request

## HTTP Status Codes

* 100-199 represent information.
* 200-299 represent a success.
* 300-399 represent a redirection.
* 400-499 represent client errors.
* 500-599 represent server errors.

* 102: Processing
* 200: OK
* 301: Permanent Redirect
* 302: Temporary Redirect
* 400: Bad Request
* 403: Forbidden
* 404: File/Page/Resource not Found
* 418: I'm a Teapot
* 500: Internal Server Error
* 503: Service Unavailable

## Transport Layers

Are standardized ways to break up data being transferred into "packets." Each packet has header (or multiple headers) that describe its origin and destination (sometimes more.)

### User Datagram Protocol (UDP)

* Small header (8 bytes)
* Considered "connectionless"—no long-term guaranteed connection
* No error recovery (corrupted packets are discarded)
* Great for low-latency data that JUST NEEDS TO SEND NOW
* Used lots in live content...
  * Live video calls
  * Video streaming services
  * Online radio
  * Online gaming

### Transmission Control Protocol (TCP)

* Larger header (20 bytes)
* Requires a formal on-going connection to maintain sender and recipient (connection-oriented)
* Corrupted packets are reported to the server so correct replacement data can be sent.
* Packets arrive in-order.
* Useful for guaranteed communications.

### Hypertext Transfer Protocol (HTTP)

* Application-based layer built on top of TCP
* Request-response communication
* HTTP is a stateless protocol - there is no "session" maintained within HTTP
* Routes to resources are made up of a method and a path
  * GET /search
  * host: https://google.com:443
  * cookies: 
  * origin: 
  * status:
* HTTP requests/responses should have a status code


