# Lighthouse Labs | Networking with TCP and HTTP

* [ ] Networking and Protocols
* [ ] TCP
* [ ] HTTP Fundamentals
* [ ] TCP Demo via NodeJS

## Ports

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

These break up data transfer into "packets" that can be delivered over a network.

### User Datagram Protocol (UDP)

* Small header size (8 bytes); small packets
* Considered "connectionless" - no ongoing connection required
* No error recovery (corrupted packets are discarded)
* Video stream / audio stream

### Transmission Control Protocol (TCP)

* Larger header size (20 bytes)
* Connection-based (handshake, an on-going connection is maintained)
* Packets arrive in-order
* Corrupted packets are reported to the server and re-sent
* Useful for guaranteed communication like FTP

### Hypertext Transfer Protocol (HTTP)

* An application-based layer built on top of TCP
* Considered request-response style connection
* Stateless (no history / knowledge of previous requests)
* HTTP requests are accompanied by a METHOD / verb
    * GET - I need info!
    * POST - Here is some info!
* HTTP requests are also accompanied by a STATUS CODE
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
* Status code ranges:
    * 100-199 represent information.
    * 200-299 represent a success.
    * 300-399 represent a redirection.
    * 400-499 represent client errors.
    * 500-599 represent server errors.
* Headers are detailed in HTTP, including size of data, filename, content type, cookie, and a lot more...

