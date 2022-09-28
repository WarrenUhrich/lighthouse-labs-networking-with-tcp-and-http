# Lighthouse Labs | Networking with TCP and HTTP

* [ ] Networking and Protocols
* [ ] TCP
* [ ] HTTP Fundamentals
* [ ] TCP Demo via NodeJS


## IP Addresses

* IPv4: `192.168.0.1`
* IPv6: `2001:db8:3333:4444:5555:6666:7777:8888`

## Ports

There are 65,356 ports available to us... 0-1023 are the more well-known standard system ports.

* :21 FTP traffic
* :22 SSH / SFTP
* :25 SMTP (Simple Mail Transfer Protocol)
* :53 DNS Lookup
* :80 standard HTTP (web page) traffic
* :110 POP3
* :194 IRC
* :443 encrypted / secure HTTP(S) traffic
* :5432 PostgreSQL

## Transport Layers

Any transport layer will breakout up data transfer into packets. Headers are often present to describe what content is being asked for, who is asking for it, the destination, etc.

### UDP (User Datagram Protocol)

* Small header size (8 bytes) which results in smaller packets overall
* Considered "connectionless" transport layer (doesn't require an ongoing connection)
* No error recovery.. if a packet is corrupt it is discarded
* Great for low-latency data that JUST NEEDS TO SEND
* Example) video / radio stream... 

### TCP (Transmission Control Protocol)

* Larger header size (20 bytes)
* Requires a formal, ongoing connection
* Error recovery.. corrupted packets are detected, and a new request for the proper data will be made
* Packets arrive in-order
* Useful for guaranteed communication where accuracy is concerned
* File-transfer

### HTTP (HyperText Transfer Protocol)

* Application (instead a transport layer) layer BUILT ON TOP of TCP
* It is a protocol describing how messsages are to be formatted and transmitted
* Request-Response communication
* HTTP is stateless (no formal session is maintained by the protocol) EVERY REQUEST is new.. no data about previous who's or what's is maintained between requests
* TWO methods supported: GET and POST
  * GET parameters are shown in the address bar (URL)
    * GET is for asking for resources
  * POST parameters are kept in the body of the request (not easy for the user to see)
* Status Codes are included
  * 100s - Information
  * 200s - Success
  * 300s - Redirection
  * 400s - User Error
  * 500s - Server Error
  * Examples:
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
* Very detailed headers for HTTP: content-type (HTML, image, video, JSON), origin, method.
