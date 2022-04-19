# Lighthouse Labs | Networking with TCP and HTTP

## To-Do

* [ ] Networking and Protocols
* [ ] TCP
* [ ] HTTP Fundamentals
* [ ] TCP Demo via NodeJS

## HTTP Request Essentials

* The path that a request typically goes through in most home or office settings:
    * Browser -> Computer -> Router -> ISP -> DNS -> (Cloud / Internet Nodes) -> Web Server
* HTTP port is :80
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

## Client-Server Model

* Two ends to our communication:
    * Client
    * Server

## Internet Protocol

* Unique identifiers for devices in a network
* IP Address has two standard formats:
    * IPv4: 192.168.0.1
    * IPv6: 2001:db8:3333:4444:5555:6666:7777:8888

## Ports

There are 65,356 ports available on most computers. 0 to 1023 are called the well-known, or system, ports.

* 20 FTP data transfer
* 21 FTP commands
* 22 SSH
* 25 SMTP
* 53 DNS
* 80 HTTP
* 110 POP3
* 194 IRC
* 443 HTTPS
* 5432 Postgres

## Transport Layers

We're breaking up data transfer into packets.

## User Datagram Protocl (UDP)

* Small header size (8 bytes)
* Connectionless communication (there is no maintenance of connection time)
* No error recovery (if something corrupt is sent or missed, it is discarded)
* Typically used for low-latency data; stuff that JUST NEEDS TO SEND.
    * Twitch Stream
    * Online Radio

## Transmission Control Protocol (TCP)

* Larger header size (up to 20 bytes)
* Requires an ongoing connection; must complete a 3-way handshake confirming the sender and recipient
* Packets are sent / arrive in-order
* Corrupt / missing packets are reported to the server so that they may be re-sent correctly
* Great for guaranteed communication (file downloads, web pages, etc.)

## Hypertext Transfer Protocol (HTTP)

* Application-based layer
* Request-reponse communication (server waits for a request; sends a reponse)
* HTTP is stateless
    * The state is not kept track of
    * The nature of the connection, and all information thereof is not maintained between requests
* HTTP requests contain a route (resource and verb)

### HTTP METHODS

These are offically supported in all HTTP as methods/verbs:

* GET (/ or has query parameters, the request is usually a GET method request)
* POST includes additional data in the request headers

These are supported by some options, but are often spoofed:

* PUT/PATCH
* DELETE

These map well to CRUD operations, thankfully!

* CREATE: POST
* READ: GET
* UPDATE: PUT/PATCH
* DELETE: DELETE

### Paths

Paths are an address representing a resource (data, or a file.) Think `/users/`, `/dinosaurs/`, or a more "specific" path like `user/3`, `/dinosaur/tyrannosaurus` or `/images/porsche.jpg`.

### HTTP Status Codes

Status codes ranges:

  * 100-199 represent information.
  * 200-299 represent a success.
  * 300-399 represent a redirection.
  * 400-499 represent client errors.
  * 500-599 represent server errors.

Common errors include:

* 102: Processing
* 200: OK
* 301: Permanent Redirect
* 302: Temporary Redirect
* 400: Bad Request
* 404: Resource not Found
* 418: I'm a Teapot
* 500: Internal Server Error
* 503: Service Unavailable

## Building a Basic TCP App in NodeJS


