// require the http module from node
var http = require('http');

// call the createServer method and pass a function as the argument which has
// the request and response as its parameters
http.createServer(function (req, res) {
  // send an OK 200 response and the content type header to the requester
  res.writeHead(200, {'Content-Type': 'text/plain'});
  // send the response "Hello World when the page loads"
  res.end('Hello World\n');
  // start the event listen on the 1337 port of localhost
}).listen(1337);

// write to the screen that the server is running
console.log('Server running at http://localhost:1337/');
