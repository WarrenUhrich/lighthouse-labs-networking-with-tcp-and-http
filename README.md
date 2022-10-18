# Lighthouse Labs | Networking with TCP and HTTP

* [X] Networking and Protocols
* [X] TCP
* [ ] HTTP Fundamentals
* [ ] TCP Demo via NodeJS

## Internet Protocols

IPv4: 192.168.0.1
IPv6: 2001:db8:3333:4444:5555:6666:7777:8888

## Ports

Over 65,000 ports available on most devices.. the first 0-1023 are typically seen as reserved / system ports.


* 20 FTP data transfer (File Transfer Protocol)
* 21 FTP commands
* 22 SSH / SFTP (Secure SHell / Secure File Transfer Protocol)
* 25 Simple Mail Transfer Protocol sending mails (SMTP)
* 53 DNS (Domain Name System)
* 80 HTTP (HyperText Transfer Protocol)
* 110 POP3 receiving mails (Post Office Protocol)
* 194 IRC (Internet Relay Chat)
* 443 HTTPS (HyperText Transfer Protocol Secure) over TLS (Transport * Layer Security) or SSL (Secure Socket Layer)
* 5432 PG (PostgreSQL)

## Transport Layers

Formats / rules followed when transferring data. Identify ways to break larger data into more manageable "packets." Each packet usually has a header describing origin, destination, and/or other details.

### User Datagram Protocol (UDP)

* Small header size (8 bytes)
* Considered "connectionless" (don't need to establish a connection that lasts over an agreed upon time)
* No error recovery (if packets are corrupted, they simply discarded)
* Great for low-latency data that JUST NEEDS TO SEND - think streaming video or radio

### Transmission Control Protocol (TCP)

* Larger header size (20 bytes)
* Requires a formal connection between sender and recipient
* Corrupted packets are reported to be re-sent
* Packets arrive in-order
* Useful for guaranteed communication—downloading files, chats, etc.

### HyperText Transfer Protocol

* Application layer built on TCP (data still transferred error-free)
* Protocol with more rules surrounding how data is formatted and transferred
* Request-reponse based communication
* HTTP is considered "stateless"—doesn't keep track of users or data between requests (EVERY request is fresh!)
* Request / response headers can contain a variety of information (content-type)
* 2 methods: GET and POST
  * C | POST
  * R | GET
  * U | PUT/PATCH
  * D | DELETE
* Status Codes!
  * 100-199 represent information.
  * 200-299 represent a success.
  * 300-399 represent a redirection.
  * 400-499 represent client errors.
  * 500-599 represent server errors.
  * Some common ones includes:
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
