var http = require("http");

http.createServer(function(reuqest, response) {
    // Send the HTTP header
    // HTTP Status: 200 : OK
    // Content Type: text/plain
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    // Send the response body as "Welcome to Data Representation & Querying"
    response.end('Welcome to Data Representation & Querying\n');

}).listen(8081);

console.log("Server running @ 127.0.0.1/8081");