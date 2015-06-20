// 1. Goal: A basic web server that listens on port 1337
// 2. Goal: Write out two parts of a message, "This is half", "of this awesome message"
// Node is a generic platform for building applications that require network access
// Everything in Node is asynchronous unless you explicitely require synchronous
// callbacks can fire at different times depending on how long things take.

var http = require("http");

function logsTimestamp() {
  console.log(new Date());
}


var handleRequest = function(req, res) {
  res.writeHead(200, {'Content-type' : 'text-plain'});

// prevents a dual request for the url due to the favicon
  if (req.url == '/favicon.ico') {
    res.end('');
    return;
  }

  console.log('The requested url is:' + req.url);
  console.log( "first write starting");
  res.write("This is half ", logsTimestamp);
  console.log( "second write starting");
  res.write("of this awesome message. ", logsTimestamp);
  console.log( "writes ended");
  res.end('Hello World!', logsTimestamp);
  console.log( "response ended");

};

var server = http.createServer(handleRequest);
server.listen(1337);

console.log('Server is running on port 1337');
