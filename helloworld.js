const http = require("http")

const server = http.createServer(function (request, response) {

   // Send the HTTP header
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/plain'})

   // Send the response body as "Hello World"
   response.end('Hello World\n')
}).listen(3000)

// Console will print the message
console.log('Server running')

// Wait for a minute (60,000 milliseconds) before closing the server
setTimeout(function () {
  server.close();
  console.log('Server closed');
}, 60000);
