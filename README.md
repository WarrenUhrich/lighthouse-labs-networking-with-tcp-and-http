# Lighthouse Labs | Networking with TCP and HTTP

* [ ] Networking and Protocols
* [ ] TCP
* [ ] HTTP Fundamentals
* [ ] TCP Demo via NodeJS

## IP - the Two Prominent Formats

* IPv4: 192.168.000.100
* IPv6: 2001:db8:3333:4444:5555:6666:7777:8888

## Ports

* `20` FTP data transfer (File Transfer Protocol)
* `21` FTP commands
* `22` SSH / SFTP (Secure SHell / Secure File Transfer Protocol)
* `25` Simple Mail Transfer Protocol sending mails (SMTP)
* `53` DNS (Domain Name System)
* `80` HTTP (HyperText Transfer Protocol)
* `110` POP3 receiving mails (Post Office Protocol)
* `194` IRC (Internet Relay Chat)
* `443` HTTPS (HyperText Transfer Protocol Secure) over TLS (Transport Layer Security) or SSL (Secure Socket Layer)
* `5432` PG (PostgreSQL)

## Transport Layers

Transport layers are protocols that we can use to deliver / receive information on a network.

Breaks up data transfer into packets. Each packet has a header:

* The origin of the request
* Intended destination
* Other info about the traffic / request

### UDP - User Datagram Protocol

* Small header (8 bytes) - very small packet!
* Considered "connectionless" - no long term connection is established / enforced
* No error recovery (corrupted packets are discarded)
* Low-latency data transfer, great for: gaming, radio, video streaming
    * In cases where distortion, loss-of-data is okay
* Speed over accuracy

## TCP - Transmission Control Protocol

* Larger header size (20 bytes)
* This does require a formal on-going connection, confirming sender / recipient
* Any corrupted packets are reported back to the server for re-sending
* Packets arrive in-order
* Useful for guaranteed connection / transfer
* Accuracy over speed

## HTTP - HyperText Transfer Protocol

* Application-based layer *on top* of TCP
* Protocol describing how data is formatted / transferred
* Request-reponse style communication, instead of ongoing
* HTTP is a stateless protocol (no memory of previous transactions)
* HTTP requests are composed of a method and an action / path
* HTTP responses also have a status code

http://google.com
HTTP: GET /SEARCH?q=JavaScript
STATUS: 200 OK
Content-type: text/html

HTTP: POST /SEARCH
BODY: 

/users/5
/posts/206

## Common HTTP Status Codes

* 100-199 represent general information.
* 200-299 represent a success.
* 300-399 represent a redirect.
* 400-499 represent a client error.
* 500-599 represent a server errors.

Some common status codes include:

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

