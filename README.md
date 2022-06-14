# Lighthouse Labs | Networking with TCP and HTTP

* [X] Networking and Protocols
* [ ] TCP
* [X] HTTP Fundamentals
* [ ] TCP Demo via NodeJS

## Client

* Program capable of making requests and interpreting responses.

## Server

* Program capable of sending responses based on client requests.

## Client-Server Model

* Two ends of communication... server and client!
* Server has a resource (or resources) that clients want access to!
* Web-server, game server, printers!

## Internet Protocol

* IPv4: 192.168.0.1
* IPv6: 2001.db8:3333:4444:5555:6666:7777:8888

## Ports

* Used to distinguish which program to use in interpreting responses / requests... used to know how we should handle traffic coming to and fro'!

* `20` FTP (File Transfer Protocol)
* `21` SFTP (Secure Transfer Protocol)
* `22` SSH/SFTP (Secure SHell access)
* `25` Simple Mail Transfer Protocol (SMTP)
* `53` Domain Name System (DNS)
* `80` HTTP (HyperText Transfer Protocol)
* `110` POP3 (Post Office Protocol)
* `194` Internet Relay Chat (IRC)
* `443` HTTPS (Secure HyperText Transfer Protocol) over TLS (Transport Layer Security)
* `5432` PostgreSQL Database Management System

## Transport Layers

* UDP (User Datagram Protocol)
* TCP (Transmission Control Protocol)
* HTTP (Hypertext Transfer Protocol)

### UDP

* Small Header Size... (8 bytes) so the packets are very small!
* Considered connectionless - there is no need to establish or maintain an on-going connection over time.
* No error recovery (corrupted packets discarded...)
* This is great for low-latency data that just NEEDS TO SEND. Common for streaming like Netflix / Twitch.

### TCP

* Larger Header Size... (20 bytes)
* Requires a formal connection (connection-oriented!)
* Corrupted packets are reported back to the server to ensure the full data is received properly!
* Used for GUARANTEED communication and accurate data!

### HTTP

* Built on the shoulders of TCP! Accurate data required.
* Request-response based communication.
* Stateless... does not keep track of who you are or previous requests!
* "Routes" to resources, made up of a path (resources) and a verb (methods).

#### Methods

* POST (create)
* GET (read)
* PUT/PATCH (edit/update)
* DELETE (deletion of a resource)

## HTTP Status Codes

* `100-199` Information.
* `200-299` Success!
* `300-399` Redirect errors.
* `400-499` Client errors.
* `500-599` Server errors.
