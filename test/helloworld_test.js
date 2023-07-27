var Browser = require('zombie');
var assert = require('assert');
var app = require('../helloworld');
var http = require('http'); // Import the http module to access the server object

describe('main page', function() {
  let server; // Variable to store the server instance

  before(function() {
    // Create the browser instance and set up the server
    this.browser = new Browser({ site: 'http://localhost:3003' }); // Assuming the application runs on 'http://localhost:3003'
    server = http.createServer(app).listen(3003); // Assuming the server is created using 'app' and listens on port 3003
  });

  after(function (done) {
    // Close the server after the tests are done
    server.close(done);
  });

  before(function(done) {
    this.browser.visit('/', done);
  });

  it('should say hello world', function() {
    assert.ok(this.browser.success);
    assert.equal(this.browser.text(), "Hello World");
  });
});

