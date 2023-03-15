# Lighthouse Labs | Networking with TCP and HTTP

* [ ] Networking and Protocols
* [ ] TCP
* [ ] HTTP Fundamentals
* [ ] TCP Demo via NodeJS

## Client-Server Model

* Two ends to the communication
* Servers have an application running on them with features or data that clients want
* Computer and Printer
* Web Browser and Web Server

## IP (Internet Protocol)

Unique address for a network or device.

* IPv4: 192.168.0.11
* IPv6: 2001:db8:3333:4444:5555:6666:7777:8888

## Ports

Keeping track of what kind of network traffic is happening, and keeping our traffics separate.

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

## Transport Layers

These are protocols (specialized formats and rules) for transferring data packets over a network. Packets are larger data, broken up into smaller pieces.

Each of these pieces usually carries some additional context / data with it, including: its origin, intended destination, and potentially more. Think a letter, with an envelope!

### User Datagram Protocol (UDP)

* Small header size (8 bytes) resulting in smaller packets
* Connectionless - no need to establish or maintain an on-going connection over time
* No error recovery (corrupted packets are discarded)
* Streaming audio (online radio/podcast) or video is a common use-case
* Packets may not arrive in-order

### Transmission Control Protocol (TCP)

* Larger header size (than UDP) at 20 bytes
* Requires a formal, ongoing connection, confirming sender and recipient
* Corrupted packets are reported back to the server and re-sent to ensure full / correct data is sent
* Packets arrive in-order
* This is most useful when guaranteed communication is needed - maybe a file download

### HyperText Transfer Protocol (HTTP)

* An application-based layer built on TCP
* Data sent across the web must be sent in-full and error-free
* Request-response communication
* An example of a stateless protocol - there is no formal session maintained between devices
* Routes to resources are made up of two core pieces:
  * Path
  * Method (verb): GET | POST
* All HTTP responses are accompanied (in header) by a status code
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

## 
