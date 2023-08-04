const http = require("http");
const { createLogger, transports, format } = require("winston");

const version = process.env.HELLOWORLD_VERSION;

const logger = createLogger({
  format: format.combine(
    format.timestamp({
      format: "YYYY-MM-DD HH:mm:ss",
    }),
    format.printf(({ timestamp, level, message, meta }) => {
      return `${timestamp} [${level}]: ${message} ${meta ? JSON.stringify(meta) : ""}`;
    })
  ),
  transports: [new transports.Console()],
});

const server = http.createServer(function (request, response) {
  // Send the HTTP header
  // HTTP Status: 200 : OK
  // Content Type: text/plain
  response.writeHead(200, { "Content-Type": "text/plain" });

  // Send the response body as "Hello World"
  response.end("Hello World From Paris\n");
}).listen(3000);

// Console will print the message
logger.info("Server running", { version });


// Wait for a minute (60,000 milliseconds) before closing the server
//setTimeout(function () {
//  server.close();
//  console.log('Server closed');
//}, 50000);

