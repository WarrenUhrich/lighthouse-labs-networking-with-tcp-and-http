# Lighthouse Labs | Networking with TCP and HTTP

* [X] Networking and Protocols
* [X] TCP
* [ ] HTTP Fundamentals
* [ ] TCP Demo via NodeJS

https://www.google.com:443/search?q=NodeJS

## Internet Protocol

These addresses (IP addresses) are unique identifiers for each device in a network.

* IPv4: 192.168.11.1
* IPv6: 2001:db8:3333:4444:5555:6666:7777:8888

This should give us multi-undecillion choices / unique values.

## Ports

Help us to organize request / response traffic to/from our devices.
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

## Client-Server Model

* There are two ends to this style of communication (client... and the server...)
* Servers have an application with features or data that clients want access to!
* Clients are an application capable of making a request to a server! (And, hopefully understanding a potential response.)
* Example server) Zoom server (actual Zoom server computers w/software)
                  * Starbucks online server
                  * WoW game server
                  * Office printer
* Example client) Zoom clients (program we install on our devices)
                  * Starbucks phone app
                  * WoW game program
                  * Computer with printing software

## Transport Layers

These are protocols defining on how we can break up data transfer into "packets" over a network. Each packet is composed of:
* Header (or set of headers)
  * Origin
  * Intended destination
  * (Size...)

### User Datagram Protocol (UDP)

* Small header size (8 bytes) which results in smaller packet sizes
* Considered "connectionless"—there is no need to establish/maintain a long-term on-goin connection
* No error recover (corrupted packets are discarded)
* This is great for low-latency data that JUST NEEDS TO SEND
* Common for...
  * Some multi-player games!!!
  * Audio streaming (live podcast / online-radio)
  * Video streaming
  * Audio/video calling

### Transmission Control Protocol (TCP)

* Larger header size (than UDP) - 20 bytes
* Requires a formal connection (3-way handshake) to confirm and maintain the sender and recipient (considered connection-oriented)
* Corrupted packets are reported to the server and re-sent to ensure full original data is sent correctly.
* Packets arrive in-order.
* Useful for guaranteed communication
* FTP

### Hyptertext Transfer Protocol (HTTP)

* Application-based layer on TOP of TCP... data is still sent in-full and error-free.
* It is a protocol describing how "messages" are to be formatted and transmitted.
* HTTP is a request-response communication—web browser makes a request, server sends a response, and the transaction is done
* HTTP is a stateless protocol—a formal "session" is not maintained via HTTP, no data is tracked between requests, there is no "memory" between communications.
* Routes to resources are made up of a method (verb) and a path.
* Response headers contain all sorts of info including...
  * data-size
  * file-name
  * content-type
  * cookies to set
* All HTTP requests are expected to be accompanied by a status code!
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
* The 100 ranges mean something:
  * 100-199 represent information.
  * 200-299 represent a success.
  * 300-399 represent a redirection.
  * 400-499 represent client errors.
  * 500-599 represent server errors.
