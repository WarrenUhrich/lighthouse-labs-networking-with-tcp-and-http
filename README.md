# Lighthouse Labs | Networking with TCP and HTTP

* [ ] Networking and Protocols
* [ ] TCP
* [ ] HTTP Fundamentals
* [ ] TCP Demo via NodeJS

## Transport Layers

Usually on the web when we want to transfer data (files, messages, information, streams, etc.) we break things down into packets. Packets are small pieces of data delivered over a network.

Packets usually consist of a header/headers -> think of headers as the envelope. Headers usually consist of the origin, intended destination, and details about the data.

The body of a packet is the data. The body would be the contents of the envelope.

### UDP (User Datagram Protocol)

* Small header size (8 bytes) which results in smaller packet size
* Considered connectionless (there is no need to estbalish an on-going guaranteed connection)
* No error recovery (if something is found to be corrupt, it just discards)
* Great for very low-latency data... we just need it to send NOW! Good for live audio/video streaming, as we can live with occasional distortion or losses when the goal is to see as close to live as possible

### TCP (Transmission Control Protocol)

* Larger header size (20 bytes)
* Requires a formal on-going connection to confirm and maintain both sender and recipient
* Corrupted packets are reported to the server and have them re-sent to ensure the full original data is sent properly
* Packets arrive in-order
* Useful when guaranteed communication is needed... file transfers

### HTTP (Hypertext Transfer Protocol)

* An application-based layer built on the shoulders of TCP
* Describes how messages should be formatted and transmitted
* Request-response style communication; your browser must first make a request to a waiting server to receive a response
* "Routes" to resources are made up of a method (verb) and a path
* METHODS:
    * GET is requesting a resource, and can have query parameters
    * POST is a submission, submitted data will be included in the BODY of the request
* All HTTP responses will be accompanied by a status code!
* Response headers also contain information about the response (size of the transfer, file name, content-type, etc.)

#### Status Codes:

* 100-199 represent information.
* 200-299 represent a success.
* 300-399 represent a redirection.
* 400-499 represent client errors.
* 500-599 represent server errors.

Common ones...
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

## IP Addresses

Are unique identifiers for networks and devices both local and online.

Standard formats include:
* IPv4: 192.168.0.11 -> 4-5 billion
* IPv6: 2001:db8:3333:4444:5555:6666:7777:8888

## Ports

A lot of connections are made to our devices, and it is important for our each device to understand which software should handle which traffic.

Ports 0 to 1023 are considered standard system ports (generally reserved.)

Some examples of ports used by general softwares include:

* 20 FTP data transfer (File Transfer Protocol)
* 21 FTP commands
* 22 SSH / SFTP (Secure SHell / Secure File Transfer Protocol)
* 25 Simple Mail Transfer Protocol sending mails (SMTP)
* 53 DNS (Domain Name System)
* 80 HTTP (HyperText Transfer Protocol)
* 110 POP3 receiving mails (Post Office Protocol)
* 194 IRC (Internet Relay Chat)
* 443 HTTPS (HyperText Transfer Protocol Secure) over TLS (Transport Layer Security)* or SSL (Secure Socket Layer)
* 5432 PG (PostgreSQL)

